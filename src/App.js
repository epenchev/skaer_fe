import React, { Component } from 'react';
import {Toolbar} from './Toolbar';
import {MediaItemList} from './MediaItemList';
import MediaElement from './MediaElement';
import './App.css';

class App extends Component {
  render() {
        const
			sources = [
				{src: 'http://www.streambox.fr/playlists/test_001/stream.m3u8', type: 'application/x-mpegURL'},
				{src: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4', type: 'video/mp4'},
				{src: 'rtmp://firehose.cul.columbia.edu:1935/vod/mp4:sample.mp4', type: 'video/rtmp'}
			],
			config = {},
			tracks = {};
    return (
      <div className="App">
        <Toolbar />
        <div className="container">
          <MediaItemList />
        </div>
      {/*
        <MediaElement
		      id="player1"
		      mediaType="audio"
		      preload="none"
		      width="1024"
		      sources={JSON.stringify(sources)}
		      options={JSON.stringify(config)}
		      tracks={JSON.stringify(tracks)}
        />
      */}
      </div>
    );
  }
}

export default App;
