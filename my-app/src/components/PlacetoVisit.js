import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageCard from './imageCard';
import useWindowPosition from './hook';
import places from './places';


const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
    },
  },
}));
export default function PlacetoVisit () {
  const classes = useStyles();
  const checked = useWindowPosition('headerr');
  return (
    <div className={classes.root} id="place-to-visit">
      <ImageCard place={places[1]} checked={checked} />
      <ImageCard place={places[0]} checked={checked} />
    </div>
  );
}