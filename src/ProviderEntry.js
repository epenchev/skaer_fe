import React from 'react';
import './ProviderEntry.css';

export class ProviderEntry extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <a id={this.props.id} className="cover-photo" href="#">
        <img src={this.props.cover_image} alt={this.props.name}/>
        <h2>{this.props.name}</h2>
        <p>{this.props.category}</p>
      </a>
    );
  }
}
