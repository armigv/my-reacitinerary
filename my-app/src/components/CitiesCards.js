import React from "react";
import { Link as LinkRouter } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import "./Css/citiesfather.css"

function Cards() {
  const [{ cities }, dispatch] = useStateValue();
  console.log(cities);

  return (
    
    <div className="wrapper">
      {cities.map((city) => (
        <div key={city._id} className="card__content-item">
          <div className="card">
            <div className="card__body">
              <img src={process.env.PUBLIC_URL + `/imagenes/cities/${city.img}`}  className="card__image" alt={city.name} />
              <h2 className="card__title">{city.name}</h2>
              <p className="card__description">{city.description}</p>
            </div>
            <LinkRouter to ={`/ciudad/${city._id}`}>
            <button className="card__btn">View Recipe</button>
            </LinkRouter>
          </div>
          
        </div>
      ))}
    </div>
  );
}

export default Cards;
