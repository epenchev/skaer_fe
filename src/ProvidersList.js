import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({

  root: {
    flexGrow: 1,
    marginTop: 20,
    marginLeft: 100,
    width: 1000,
 },

  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    width: 250,
    height: 150,
  },

  image: {
    height: 150,
    width: 'auto',
  },
 
});



{/*
class ProviderEntry extends React.Component {
  render() {
    return (
        <img className={classes.image} src='https://image.tmdb.org/t/p/original/6z06UTkMbrsLq528wp3oJaWAZ06.jpg' alt='spiderman'/>
    );
  }
}
*/}



function FullWidthGrid(props) {
  const { classes } = props;

  return (
      <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} spacing={2} >
          <Grid container direction="row" justify="flex-start" spacing={2}>
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15].map(value => (
            <Grid item >
            {/*<Paper className={classes.paper} /> */}
            <img className={classes.image} src='http://localhost:8080/res/images/yes-movies.jpg' alt='spiderman'/>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
    </div>
  );
}

FullWidthGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FullWidthGrid);

