import React, { PureComponent } from "react";
import { withStyles } from "@material-ui/core";
import { landingPage } from "../landingPage/landingPagesstyles";
import Spinner from "../spinner";

class Page2 extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      user: null
    };
  }
  async componentDidMount() {
    const url = "https://api.randomuser.me/";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({
      user: data.results[0],
      loading: false
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <h1 className={classes.header}>
        {this.state.loading || !this.state.user ? (
          <Spinner />
        ) : (
          <div>
            <img src={this.state.user.picture.large} />
            <h1>{this.state.user.name.first}</h1>
          </div>
        )}
      </h1>
    );
  }
}

export default withStyles(landingPage)(Page2);
