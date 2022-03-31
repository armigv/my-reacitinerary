import React from "react";
import "./Css/box.css"
import { Link as LinkRouter } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import "./Css/citiesfather.css";

function Cards() {
  const [{ cities }, dispatch] = useStateValue();
  console.log(cities);

  return (
    <div>
      <div className="grid">
    {cities.map((city) => (
    <div className="container">
       
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="box">
            <div className="card" style={{ border: "width:18rem;" }} >
              <img
                src={process.env.PUBLIC_URL + `/imagenes/cities/${city.img}`}
                className="card-img-top"
                alt={city.name}
              />
              <div className="card-body">
                <div key={city._id} className="card-content-item">
                  <h2 className="card-title">{city.name}</h2>
                  <p className="card-text">{city.description}</p>
                </div>
                <LinkRouter to={`/ciudad/${city._id}`}>
                  <button className="btn btn-primary">View Recipe</button>
                </LinkRouter>
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

export default Cards;
