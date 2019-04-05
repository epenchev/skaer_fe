import React from 'react';
import {MediaItem} from './MediaItem';
import './MediaItemList.css';

export class MediaItemList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    }
  }

  loadData() {
    const apiKey = 'f3e9f7d1677c7aa63c9ab526381eeceb';
    const baseUrl = 'https://api.themoviedb.org/3';
    const language = 'en-US';
    const filter = '&sort_by=popularity.desc&include_adult=false&include_video=false&page=1';
    const apiUrl = `${baseUrl}/discover/movie?api_key=${apiKey}&language=${language}${filter}`;

    console.log(apiUrl)
    fetch(apiUrl)
      .then(response => {
        console.log('Status: ' + response.status);
        console.log('response text: ' + response.statusText);

        response.json().then(data => {
          const movies = data.results;
          this.setState({ movies });
        });
      })
      .then(body => {})
        .catch(err => {
          console.log('Fetch Error: ', err);
        }) 
  }

  loadDataFromSkaer() {
    const apiKey = 'f3e9f7d1677c7aa63c9ab526381eeceb';
    const baseUrl = 'https://api.themoviedb.org/3';
    const language = 'en-US';
    const filter = '&sort_by=popularity.desc&include_adult=false&include_video=false&page=1';
    const apiUrl_old = `${baseUrl}/discover/movie?api_key=${apiKey}&language=${language}${filter}`;
    console.log(apiUrl_old);

    const apiUrl = `http://localhost:8080/provider_entries?provid=1`
    console.log(apiUrl)
    fetch(apiUrl)
      .then(response => {
        console.log('Status: ' + response.status);
        console.log('response text: ' + response.statusText);

        response.json().then(data => {
          const movies = data;
          this.setState({ movies });
        });
      })
      .then(body => {})
        .catch(err => {
          console.log('Fetch Error: ', err);
        }) 
  }

  componentWillMount() {
    //this.loadData();
    this.loadDataFromSkaer();
  }

  render_old() {
    return (
      <section>
        <div className="MediaItemList">
          {this.state.movies.map((movie, index) => {
            return (
              <MediaItem title={this.state.movies[index].title} poster={this.state.movies[index].poster_path}/>
            )
          })}
        </div>
      </section>
    );
  }

  render() {
    return (
      <section>
        <div className="MediaItemList">
          {this.state.movies.map((movie, index) => {
            return (
              <MediaItem title={this.state.movies[index].title} poster={this.state.movies[index].url}/>
            )
          })}
        </div>
      </section>
    );
  }

}
