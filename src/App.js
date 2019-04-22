import React, { Component } from 'react';
import {Toolbar} from './Toolbar';
import {MediaList} from './MediaList';
import {fetchProviders} from './ApiCalls';
import {fetchProviderEntries} from './ApiCalls';
import {renderProvider} from './ContentProvider';
import {MediaEntry} from './MediaEntry';
import './App.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faIgloo } from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

library.add(faIgloo)

function apiFetchProvidersEntries(onSuccess) {
  fetchProviderEntries('1', onSuccess);
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { renderProviders: false };
    this.handleSelect = this.onDropDownSelect.bind(this);
  }

  onDropDownSelect(eventKey) {
    if (eventKey === '4') {
        this.setState({ renderProviders: true });
    } else {
        this.setState({ renderProviders: false });
    }
  }

  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Toolbar doHandleSelect={this.handleSelect}/>
        <div className="container">
            <Switch>
              <Route
                path={'/providers'}
                render={(props) => <MediaList {...props} loadData={apiFetchProvidersEntries} itemRenderer={MediaEntry} />}
              />
            </Switch>
        </div>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
