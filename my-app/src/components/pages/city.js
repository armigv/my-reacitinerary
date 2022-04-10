import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useStateValue } from "../../StateProvider";
import {actionType} from "../../Core/reducer";
import axios from "axios";

export default function City() {
  const [itineraries,setItineraries] =useState([])
  const [{cities},dispath] =useStateValue() 
  const { id } = useParams();
  const cityselecter = cities.filter((city) => city._id === id);

 useEffect(() => {
  // console.log(cityselecter);
  cityselecter.map((city) =>

    axios
      .get(`http://localhost:4000/api/itinerarie/${city.name}`)
.then((response) => setItineraries(response.data.response.itineraries))       
      
  ) 
}, []);
console.log(cityselecter)
console.log(itineraries)

  return (
    <div>
    <div className="grid">
      {itineraries.map((itineraries) => (
        <div className="container">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="box">
              <div className="card" style={{ border: "width:18rem;" }}>
                <img
                  src={
                    process.env.PUBLIC_URL + `/imagenes/itineraries/${itineraries.img}`
                  }
                  className="card-img-top"
                  alt={itineraries.name}
                />
                <div className="card-body">
                  <div key={itineraries._id} className="card-content-item">
                    <h2 className="card-title">{itineraries.place}</h2>
                    
                    <p className="card-text">{itineraries.description}</p>
                  </div>
                  

                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>

    
  );
}
