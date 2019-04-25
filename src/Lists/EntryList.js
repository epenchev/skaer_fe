import React from "react";
import "./EntryList.css";

// Base List component to hold 
export class EntryList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section>
        <div className="EntryList">
          { this.props.itemData.map((d, index) => {
              let newProps = Object.assign({key: index}, d);
              return React.createElement(this.props.itemRender, newProps);
          }) }
        </div>
      </section>
    );
  }
}
