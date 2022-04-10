import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useStateValue } from "../../StateProvider";
import {actionType} from "../../Core/reducer";
import axios from "axios";

export default function City() {
  const [{cities,itineraries},dispath] =useStateValue() 
  const { id } = useParams();
  // const cityselecter = cities.filter(city => city._id === id);

//  console.log(itineraries)
 useEffect(() => {
  // console.log(cityselecter);
  
    axios
      .get(`http://localhost:4000/api/itinerarie/${id}`)
      .then(response =>console.log(response))
       
      
  
}, []);

  // console.log(cityselecter);
  console.log(itineraries);

  return (
    // <div className="container">
    //   {cityselecter.map((city) => (
        <div>
          <h1 className="headerCity">{id}</h1>
         
        </div>
    //   ))}
    // </div>
  );
}
