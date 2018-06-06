import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';

import TopContainer from "./components/TopContainer";
import SampleContainer from "./components/SampleContainer";
import NewComponent from "./components/NewComponent";
import PlayersComponent from "./components/PlayersComponent";
import AddPlayerComponent from "./components/AddPlayerComponent";
import SwordsComponent from "./components/SwordsComponent";
import ShieldsComponent from "./components/ShieldsComponent";

const muiTheme = createMuiTheme({});

render(
  <MuiThemeProvider theme={muiTheme}>
    <Router>
      <div>
        <Route exact path="/" component={AddPlayerComponent} />
        <Route path="/players" component={PlayersComponent} />
        <Route path="/addplayer" component={AddPlayerComponent} />
        <Route path="/swords" component={SwordsComponent} />
        <Route path="/shields" component={ShieldsComponent} />
      </div>
    </Router>
  </MuiThemeProvider>,
  document.getElementById("root")
);
