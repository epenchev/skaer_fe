import React, { Component } from "react";
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import AddLibIcon from '@material-ui/icons/LibraryAdd';
import LibIcon from '@material-ui/icons/LibraryBooks';
import MailIcon from '@material-ui/icons/Mail';
import ListItemText from '@material-ui/core/ListItemText';
import Drawer from '@material-ui/core/Drawer';


const styles = theme => ({
  list: {
    width: 250,
  },
  listItem: {
    "&:hover": {
      color: "inherit !important"
    }
  }
});


class DrawerList extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.list}>
        <List>
            <ListItem className={classes.listItem} button component='a' href="#simple">
              <ListItemIcon><AddLibIcon /></ListItemIcon>
              <ListItemText primary='Add Collection'/>
            </ListItem>
        </List>
        <Divider />
        <List>
        {[ { title: 'Collections', icon: LibIcon }, 
            { title: 'Playlists', icon: LibIcon},
            { title: 'Online Content', icon: LibIcon }
          ].map((entry, index) => (
              <ListItem button key={entry.title}>
                <ListItemIcon><entry.icon /></ListItemIcon>
                <ListItemText primary={entry.title} />
              </ListItem>
        ))}
        </List>
        <Divider />
        <List>
          {['Settings', 'Help'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon><MailIcon /></ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
        ))}
        </List>
      </div>
    );
  }
}

const DrawerListS = withStyles(styles)(DrawerList);


export default class ControlDrawer extends Component {
 render() {
    return (
      <Drawer open={this.props.open} onClick={this.props.onClick}>
      <DrawerListS />
      </Drawer> 
    );
  }
}

