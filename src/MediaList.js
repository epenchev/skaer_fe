import React from 'react';
import './MediaList.css';

export class MediaList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { itemsData: [] };
  }

  componentDidMount() {
    this.props.loadData((data) => {
      this.setState({ itemsData: data });
    });
  }

  render() {
    // Just for debug
    console.log(this.props);
    return (
      <section>
        <div className="MediaList">
          { this.state.itemsData.map((d, index) => {
              console.log(d);
              let newProps = Object.assign({key: index}, d);
              return React.createElement(this.props.itemRenderer, newProps);
          }) }
        </div>
      </section>
    );
  }
}
