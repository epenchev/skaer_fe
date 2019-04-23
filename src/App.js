import React, { Component } from "react";
import {Toolbar} from "./Toolbar";
import {MediaList} from "./MediaList";
import {fetchProviders} from "./ApiCalls";
import {fetchProviderEntries} from "./ApiCalls";
import {MediaEntry} from "./MediaEntry";
import {ProviderEntry} from "./ProviderEntry";
import "./App.css";

import { library } from "@fortawesome/fontawesome-svg-core"
import { faIgloo } from "@fortawesome/free-solid-svg-icons"

library.add(faIgloo)

function apiFetchProvidersEntries(onSuccess) {
  fetchProviderEntries("2", onSuccess);
}

const Mlist = React.createElement(MediaList, {loadData: fetchProviders, itemRenderer: ProviderEntry});


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { toolbrarSelection: "2" };
    this.toolbarHandleSelect = this.toolbarHandleSelect.bind(this);
  }

  toolbarHandleSelect(eventKey) {
    console.log("selected " + eventKey);
  }

  render() {
    return (
      <div className="App">
        <Toolbar onSelection={this.toolbarHandleSelect}/>
        <div className="container">
        {Mlist}
        </div>
      </div>
    );
  }
}

export default App;
