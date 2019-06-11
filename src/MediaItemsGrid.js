import React from "react";
import "./Lists/EntryList.css";
import "./Lists/ProviderEntry.css";

export default class MediaItemsGrid extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section>
        <div className="EntryList">
          {
            [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(value => (
            <a href='#' className='cover-photo'>
            <img src='http://localhost:8080/res/images/yes-movies.jpg' alt='YesMovies'/>
            <h2>aaa</h2>
            <p>bbb</p>
            </a>
            ))}
        </div>
      </section>
    );
  }
}

