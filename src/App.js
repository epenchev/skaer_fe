import React, { Component } from "react";
import {Toolbar} from "./Toolbar";
import {ProvidersList} from "./Lists/ProvidersList";
import {MediaList} from "./Lists/MediaList";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import "./App.css";
import { library, config } from "@fortawesome/fontawesome-svg-core"
import { faIgloo } from "@fortawesome/free-solid-svg-icons"

library.add(faIgloo)

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Toolbar />
        <div className="container">
        <BrowserRouter>
          <Switch>
            <Route path={"/providers"} component={ProvidersList} />
            <Route path={"/provider/:id"} component={MediaList} />
          </Switch>
        </BrowserRouter>
        </div>
      </div>
    );
  }
}

export default App;
