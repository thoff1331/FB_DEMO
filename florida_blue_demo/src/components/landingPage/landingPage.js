import React, { PureComponent } from "react";
import { withStyles } from "@material-ui/core";
import { landingPage } from "./landingPagesstyles";
class LandingPage extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.header}>
        <h1>This is the page that is first visted when the URL is visted </h1>
      </div>
    );
  }
}

export default withStyles(landingPage)(LandingPage);
