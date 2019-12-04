import React, { PureComponent } from "react";
import { withStyles } from "@material-ui/styles";
import { footerStyles } from "./footerStyles";

class Footer extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <h1 className={classes.footer}>This is the Footer Component </h1>
      </div>
    );
  }
}

export default withStyles(footerStyles)(Footer);
