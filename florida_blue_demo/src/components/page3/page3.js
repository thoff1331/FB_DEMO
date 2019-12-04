import React, { PureComponent } from "react";
import { withStyles } from "@material-ui/core";
import { landingPage } from "../landingPage/landingPagesstyles";
import Spinner from "../spinner";

class Page3 extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Spinner />
        <h1 className={classes.header}>Page 3</h1>
      </div>
    );
  }
}

export default withStyles(landingPage)(Page3);
