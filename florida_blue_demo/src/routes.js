import React from "react";
import { Switch, Route } from "react-router-dom";
import Page1 from "./components/page1/page1";
import Page2 from "./components/page2/page2";
import Page3 from "./components/page3/page3";
import landingPage from "./components/landingPage/landingPage";
import Auth from "./components/auth/auth";

export default (
  <Switch>
    <Route exact path="/" component={landingPage} />
    <Route path="/page1" component={Page1} />
    <Route path="/page2" component={Page2} />
    <Route path="/page3" component={Page3} />
    <Route path="/auth" component={Auth} />
  </Switch>
);
