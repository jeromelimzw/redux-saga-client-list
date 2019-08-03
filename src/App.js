import React from "react";
import Routes from "./containers/Routes";
import { Paper } from "@material-ui/core";
import "./App.css";

const App = () => {
  return (
    <div className="root">
      <Paper>
        <Routes />
      </Paper>
    </div>
  );
};

export default App;
