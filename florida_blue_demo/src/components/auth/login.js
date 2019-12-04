import React, { PureComponent } from "react";
import { login } from "../../ducks/auth";
import Axios from "axios";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import store from "../../store";
import { withStyles } from "@material-ui/styles";
import { authStyles } from "./authStyles";

class Login extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = e => {
    // e.preventDefault();
    this.props.login(this.state.username, this.state.password);
    this.setState({
      username: "",
      password: ""
    });
    this.props.history.push("/");
  };
  componentDidMount() {
    console.log(this.props);
  }
  onKeyUpHandle = e => {
    if (e.keyCode === 13) {
      this.handleSubmit();
    }
  };

  render() {
    const { classes } = this.props;
    console.log(store.getState());
    return (
      <form
        onSubmit={this.handleSubmit}
        autoComplete="off"
        className={classes.signup}
      >
        <h1>Login</h1>
        <label>Username</label>
        <input
          onKeyUp={this.onKeyUpHandle}
          type="text"
          ref={input => {
            this.username = input;
          }}
          name="username"
          onChange={this.handleChange}
          value={this.state.username}
          placeholder="Username"
        />
        <label>Password</label>
        <input
          onKeyUp={this.onKeyUpHandle}
          ref={input => (this.password = input)}
          type="text"
          name="password"
          onChange={this.handleChange}
          value={this.state.password}
          type="password"
          placeholder="Password"
        />
        <button
          type="submit"
          className={classes.signupButton}
          onClick={this.handleSubmit}
        >
          Login
        </button>
        <span>
          Not A Member?
          <Link to="/auth/signup" className={classes.link}>
            {" "}
            Click Here
          </Link>
        </span>
      </form>
    );
  }
}
const mapStateToProps = reduxState => {
  return {
    user: reduxState.user
  };
};

export default withStyles(authStyles)(
  connect(mapStateToProps, { login })(Login)
);
