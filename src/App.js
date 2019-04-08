import React, { Component } from 'react';
import {Toolbar} from './Toolbar';
import {MediaItemList} from './MediaItemList';
import './App.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faIgloo } from '@fortawesome/free-solid-svg-icons'

library.add(faIgloo)


class App extends Component {
  render() {
   return (
      <div className="App">
        <Toolbar />
        <div className="container">
          <MediaItemList />
        </div>
     </div>
    );
  }
}

export default App;
