import React from "react";
import "./Css/box.css";
import { Link as LinkRouter } from "react-router-dom";
import { useStateValue } from "../StateProvider";

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Collapse } from '@material-ui/core';


const useStyles = makeStyles({
  root: {
    maxWidth: 645,
    background: 'rgba(0,0,0,0.5)',
    margin: '20px',
  },
  media: {
    height: 300,
  },
  title: {
    fontFamily: 'Nunito',
    fontWeight: 'bold',
    fontSize: '2rem',
    color: '#fff',
  },
  desc: {
    fontFamily: 'Nunito',
    fontSize: '1.1rem',
    color: '#ddd',
  },
});


function Cards(checked) {
  const [{ filterCity }, dispatch] = useStateValue();
  console.log(filterCity);

  const classes = useStyles();


  return (
    <div>
      <div className="grid">
        {filterCity?.map((city) => (
         <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})}>
         <Card className={classes.root}>
           <CardMedia
             className={classes.media}
             image={process.env.PUBLIC_URL + `/imagenes/cities/${city.img}`}
           />
           <CardContent>
             <Typography
               gutterBottom
               variant="h5"
               component="h1"
               className={classes.title}
             >
               {city.name}
             </Typography>
             <Typography
               variant="body2"
               color="textSecondary"
               component="p"
               className={classes.desc}
             >
               {city.description}
             </Typography>

             <LinkRouter to={`/ciudad/${city._id}`}>
          <button className="btn btn-primary">View more</button>
        </LinkRouter>

           </CardContent>
         </Card>
       </Collapse>
        ))}
      </div>
    </div>
  );
}

export default Cards;
