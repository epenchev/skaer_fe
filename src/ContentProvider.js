import React from 'react';
import './ContentProvider.css';

export function renderProvider(props) {
  return (
    <a id={props.id} className="cover-photo" href="#">
      <img src={props.cover_image} alt={props.name}/>
      <h2>{props.name}</h2>
      <p>{props.category}</p>
   </a>
  );
}
