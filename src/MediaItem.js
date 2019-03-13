import React from 'react';

export class MediaItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <a href={`/items/id`} className="itemLink">
          <img src={this.props.poster_path === null ? 'http://via.placeholder.com/300x450' : `https://image.tmdb.org/t/p/w300/${this.props.poster_path}`} 
            alt={`${this.state.movies.title} poster`} className="imgResponsive" />
        </a>
    );
  }
}
