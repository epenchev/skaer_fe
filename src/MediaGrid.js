import React from 'react';
import Grid from '@material-ui/core/Grid';


export default class MediaGrid extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const elements = this.props.items.map(value => (
      React.createElement(this.props.gridItem, value)
    ));
    return (
      <div id='media-grid'>
        <Grid container xs={12} spacing={2}>
        {elements.map(value => (
          <Grid item>
            {value}
          </Grid>
        ))}
        </Grid>
      </div>
    );
  }
}
