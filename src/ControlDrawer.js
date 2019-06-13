import React, { Component } from "react";
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Drawer from '@material-ui/core/Drawer';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import AddLibIcon from '@material-ui/icons/LibraryAdd';
import LibIcon from '@material-ui/icons/LibraryBooks';
import ListIcon from '@material-ui/icons/List';
import OnlineIcon from '@material-ui/icons/Input';
import SettingsIcon from '@material-ui/icons/Settings';
import HelpIcon from '@material-ui/icons/Help';


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
            <ListItem className={classes.listItem} button component='a' href="/add_collection">
              <ListItemIcon><AddLibIcon /></ListItemIcon>
              <ListItemText primary='Add Collection'/>
            </ListItem>
        </List>
        <Divider />
        <List>
        {[ { title: 'Collections', icon: LibIcon, href: '/collections' },
            { title: 'Playlists', icon: ListIcon, href: '/playlists' },
            { title: 'Online Content', icon: OnlineIcon, href: '/providers' }
          ].map((entry, index) => (
              <ListItem button key={entry.title} className={classes.listItem} component='a' href={entry.href}>
                <ListItemIcon><entry.icon /></ListItemIcon>
                <ListItemText primary={entry.title} />
              </ListItem>
        ))}
        </List>
        <Divider />
        <List>
          {[
            { title: 'Settings', icon: SettingsIcon, href: '/settings' },
            { title: 'Help',  icon: HelpIcon, href: '/help' }
          ].map((entry, index) => (
            <ListItem button key={entry.title}>
              <ListItemIcon><entry.icon /></ListItemIcon>
              <ListItemText primary={entry.title} />
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

