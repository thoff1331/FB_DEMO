import React, { PureComponent } from "react";
import { withStyles } from "@material-ui/core";
import { landingPage } from "../landingPage/landingPagesstyles";
import { connect } from "react-redux";
import store from "../../store";
import { getSession } from "../../ducks/auth";
import Spinner from "../spinner";
import teamlist from "../../data/teamData.json";
import { validate } from "@babel/types";
import { get } from "http";
import { starter } from "./page1Styles";

class Page1 extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      team: []
    };
  }
  componentDidMount() {
    let random = teamlist[Math.floor(Math.random() * teamlist.length)];
    this.props.getSession();
    this.setState({
      team: random
    });
    console.log(random);
  }

  render() {
    console.log(this.state);
    console.log(this.props);
    console.log(store.getState());
    const { classes } = this.props;
    return (
      <div>
        {this.props.user.username ? (
          <h1 className={classes.haeder}>
            Welcome {this.props.user.username}{" "}
          </h1>
        ) : (
          <p className={classes.header}></p>
        )}
        {this.state.team === [] ? (
          <Spinner />
        ) : (
          <div className={classes.team}>
            <h1>{this.state.team.team}</h1>
            <img src={this.state.team.logo} />
          </div>
        )}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default withStyles(
  landingPage,
  starter
)(connect(mapStateToProps, { getSession })(Page1));
