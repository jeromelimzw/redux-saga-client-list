import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import EditPage from "../EditPage";
import ViewPage from "../ViewPage";

const Routes = () => {
  return (
    <Switch>
      <Route path="/edit" component={EditPage} />
      <Route path="/view" component={ViewPage} />
      <Redirect exact path="/" to="/view" />
    </Switch>
  );
};

export default Routes;
