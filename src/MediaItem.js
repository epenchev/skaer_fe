import React from 'react';

export class MediaItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <a href={`/items/id`} className="itemLink">
        <img src={this.props.poster === null ? 'http://via.placeholder.com/300x450' : `https://image.tmdb.org/t/p/w300/${this.props.poster}`} 
          alt={`${this.props.title} poster`} className="imgResponsive" />
        <p className="itemTitle">{this.props.title}</p>
      </a>
    );
  }
}
