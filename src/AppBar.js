import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    minHeight: '0px',
    backgroundColor: '#fff',
    color: '#fff'
  },
  title: {
    flexGrow: 4,
    paddingLeft: '250px'
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root} >
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            App de Vanguardia
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}