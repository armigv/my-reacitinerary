import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, IconButton, Toolbar, Collapse } from '@material-ui/core';
// import SortIcon from '@material-ui/icons/Sort';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import { Link as Scroll } from 'react-scroll';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    fontFamily: 'Nunito',
  },
  appbar: {
    background: 'none',
    margin:"45px",
    
  },
  appbarWrapper: {
    width: '80%',
    margin: '10px',
  },
  appbarTitle: {
    flexGrow: '1',
  },
  icon: {
    color: '#fff',
    fontSize: '2rem',
  },
  colorText: {
    color: '#5AFF3D',
  },
  container: {
    textAlign: 'center',
  },
  title: {
    color: '#fff',
    fontSize: '4.5rem',
  },
  goDown: {
    color: '#5AFF3D',
    fontSize: '4rem',
  },
}));
export default function Header() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);
  return (
    <div className={classes.root} id="headerr">
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar className={classes.appbarWrapper}>
          <h1 className={classes.appbarTitle}>
            My<span className={classes.colorText}> OwnTrip.</span>
          </h1>
          <IconButton>
            {/* <SortIcon className={classes.icon} /> */}
          </IconButton>
        </Toolbar>
      </AppBar>

      <Collapse
        in={checked}
        {...(checked ? { timeout: 1000 } : {})}
        collapsedSize={50}
      >
        <div className={classes.container}>
          <h1 className={classes.title}>
            Welcome to <br />
            My<span className={classes.colorText}>OwnTrip.</span>
          </h1>
          {/* <Scroll to="place-to-visit" smooth={true}> */}
            <IconButton>
              {/* <ExpandMoreIcon className={classes.goDown} /> */}
            </IconButton>
          {/* </Scroll> */}
        </div>
      </Collapse>
    </div>
  );
}