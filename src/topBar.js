import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, IconButton, Typography, List, Drawer, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { Menu, Room,ChevronLeft } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  list: {
    width: 250,
  },
  bar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: 250,
    flexShrink: 0,
  },
}));

export default function TopBar() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);


    return (
      <div>
        <AppBar position="static" className={classes.bar}>
          <Toolbar>
            <IconButton 
            edge="start" 
            className={classes.menuButton} 
            color="inherit" 
            aria-label="menu"
            onClick={()=> setOpen(!open)}>
              <Menu />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Bus App
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer 
        anchor='left' 
        open={open} 
        onClose={()=> setOpen(false)}
        className={classes.drawer}>
          <div
          role="presentation"
          className={classes.list}
          >
            <List>
              <ListItem button onClick={()=>setOpen(false)}>
                <ChevronLeft /> 
              </ListItem>
              <ListItem button>
                <ListItemIcon> <Room /> </ListItemIcon>
                <ListItemText> Bus Map </ListItemText>
              </ListItem>
            </List>
          </div>
        </Drawer>
      </div>
    );
}
