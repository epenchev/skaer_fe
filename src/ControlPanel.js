import React, { Component } from "react";
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import FilterIcon from '@material-ui/icons/FilterList';
import CastIcon from '@material-ui/icons/Cast';
import AccountCircle from '@material-ui/icons/AccountCircle';
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles/colorManipulator';
import './Toolbar.css'; 


const styles = theme => ({
  root: {
    flexGrow: 1,
  },

  menuButton: {
    flexGrow: 1,
  },

  functionButtons: {
    flexGrow: 1,
    outline: 'none',
    borderStyle: 'none',
  },

  buttonsBox: {
    display: 'flex',
    justifyContent: 'right',
  },

  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },

  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 400,
    },
  },

});


class ControlPanel extends Component {
  render() {
    const {classes} = this.props;
    return (
        <div className={classes.root}>
        <AppBar position='static'>
          <Toolbar>
            <div className={classes.menuButton}>
              <IconButton onClick={this.props.onMenuButton} edge="start"
                  className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon />
              </IconButton>
            </div>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon/>
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'Search' }}
              />
            </div>
            <div className={classes.functionButtons}>
              <div className={classes.buttonsBox}>
                <IconButton color="inherit">
                  <FilterIcon/>
                </IconButton>
                <IconButton color="inherit">
                  <CastIcon />
                </IconButton>
                <IconButton color="inherit">
                  <AccountCircle />
                </IconButton>
              </div>
            </div>
          </Toolbar>
       </AppBar>
       </div>
    );
  }
}

export default withStyles(styles)(ControlPanel);

