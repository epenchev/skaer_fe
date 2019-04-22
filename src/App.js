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
  fetchProviderEntries('2', onSuccess);
}

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
              <Route
                path="/providers"
                render={(props) => <MediaList {...props} 
                  loadData={apiFetchProvidersEntries} itemRenderer={MediaEntry} />}
              />
            </Switch>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

export default App;
