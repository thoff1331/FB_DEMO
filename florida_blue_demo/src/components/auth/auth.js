import React, { PureComponent } from "react";
import { withStyles } from "@material-ui/core";
import { signup } from "../../ducks/auth";
import { connect } from "react-redux";
import { authStyles } from "./authStyles";
import axios from "axios";
import store from "../../store";
import { Link } from "react-router-dom";

class Auth extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };
  }
  handleChange = e => {
    {
      this.setState({ [e.target.name]: e.target.value });
    }
  };
  handleSignup = () => {
    this.props.signup(this.state.username, this.state.password);
    this.setState({ username: "", password: "" });
    this.props.history.push("/");
  };

  render() {
    const { classes } = this.props;
    console.log(this.props);
    console.log(store.getState());

    return (
      <div>
        <div autoComplete="off" className={classes.signup}>
          <h1>Signup</h1>
          <label>Username:</label>
          <input
            onChange={this.handleChange}
            value={this.state.username}
            name="username"
          />
          <label>Password:</label>
          <input
            onChange={this.handleChange}
            value={this.state.password}
            name="password"
            type="password"
          />
          <button className={classes.signupButton} onClick={this.handleSignup}>
            Signup
          </button>
          <Link to="/login" className={classes.link}>
            <span>Already Have an Account? Click here to Log In</span>
          </Link>
        </div>
      </div>
    );
  }
}
const mapStateToProps = reduxState => reduxState;

export default withStyles(authStyles)(
  connect(mapStateToProps, { signup })(Auth)
);
