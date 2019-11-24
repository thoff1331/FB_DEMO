import React, { PureComponent } from "react";
import { withStyles } from "@material-ui/core";
import { starter } from "../page1/page1Styles";

class Page2 extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { classes } = this.props;
    return <h1 className={classes.boiler}>Page2</h1>;
  }
}

export default withStyles(starter)(Page2);
