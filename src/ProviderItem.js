import React from 'react';
import './ProviderItem.css';

export class ProviderItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {id: this.props.id};
  }
 
  render() {
    return (
      <a id={this.props.id} className="cover-photo" href="#" onClick={this.props.selectHandler}>
        <img src={this.props.image} alt={this.props.name}/>
        <h2>{this.props.name}</h2>
        <p>{this.props.type}</p>
     </a> 
    );
  }
}

