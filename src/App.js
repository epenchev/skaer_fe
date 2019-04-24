import React, { Component } from "react";
import {Toolbar} from "./Toolbar";
import {MediaList} from "./MediaList";
import {fetchProviders} from "./ApiCalls";
import {fetchProviderEntries} from "./ApiCalls";
import {MediaEntry} from "./MediaEntry";
import {ProviderEntry} from "./ProviderEntry";
import "./App.css";

import { library, config } from "@fortawesome/fontawesome-svg-core"
import { faIgloo } from "@fortawesome/free-solid-svg-icons"

library.add(faIgloo)

function apiFetchProvidersEntries(onSuccess) {
  fetchProviderEntries("2", onSuccess);
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { toolbrarSelection: "2" };
    this.toolbarHandleSelect = this.toolbarHandleSelect.bind(this);
  }

  toolbarHandleSelect(eventKey) {
    this.setState({ toolbrarSelection: eventKey });
  }

  createMediaList() {
    let list;
    const selection = this.state.toolbrarSelection;
    if (selection === "2") {
        // User collections
    } else if (selection == "3") {
        // User playlists
    } else if (selection === "4") {
        // Content providers (online media)
        list = <MediaList loadData={fetchProviders} itemRenderer={ProviderEntry} />;
    }
    return list;
  }

  render() {
    let list = this.createMediaList();
    return (
      <div className="App">
        <Toolbar onSelection={this.toolbarHandleSelect}/>
        <div className="container">
        {list}
        </div>
      </div>
    );
  }
}

export default App;
