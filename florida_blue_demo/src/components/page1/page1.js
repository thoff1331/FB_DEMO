import React, { PureComponent } from "react";
import { withStyles } from "@material-ui/core";
import { starter } from "./page1Styles";

class Page1 extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { classes } = this.props;
    return <h1 className={classes.boiler}>Page 1</h1>;
  }
}

export default withStyles(starter)(Page1);
