import React from "react";
import Header from "../Header";
import PlacetoVisit from "../PlacetoVisit";
import  {  CssBaseline  }  from  '@material-ui/core' ;
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/bg.jpg'})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
}));

function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      < CssBaseline/>
      <Header />
      <PlacetoVisit/>
      
    </div>
  );
}
export default Home;
