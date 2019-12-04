import React, { PureComponent } from "react";
import { CircularProgress } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

const styles = theme => ({
  progress: {
    position: "absolute",
    left: "calc(50% - 100px)",
    top: "calc(50% - 40px)",
    zIndex: "9999",
    margin: "-80px 0 0 24px",
    borderRadius: "50%",
    width: "150px",
    height: "150px",
    color: "red"
  }
});

function Spinner(props) {
  const { classes } = props;
  return (
    <div>
      <CircularProgress
        className={classes.progress}
        style={props.style}
        size={props && props.spinnerSize ? props.spinnerSize : 150}
      />
    </div>
  );
}

export default withStyles(styles)(Spinner);
