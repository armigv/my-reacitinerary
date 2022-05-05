import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useStateValue } from "../../StateProvider";
import { actionType } from "../../Core/reducer";
import axios from "axios";
import Coments from "../comments";
import { TextField } from "@material-ui/core";
import { Button } from "react-bootstrap";
import SendIcon from "@mui/icons-material/Send";
import Likes from "../likes"

export default function City(props) {
  const [itineraries, setItineraries] = useState([]);
  const [{ cities }, dispath] = useStateValue();
  const { id } = useParams();
  const cityselecter = cities.filter((city) => city._id == id);
  const itineselecter = itineraries.filter(
    (itine) => itine.about === itine.about
  );

  useEffect(() => {
    // console.log(cityselecter);
    cityselecter.map((city) =>
      axios
        .get(`http://localhost:4000/api/itinerarie/${city.name}`)
        .then((response) => setItineraries(response.data.response.itineraries))
    );
  }, []);
  console.log(cityselecter);
  console.log(itineraries);

  return (
    <div>
      <div className="grid">
        {cityselecter.map((header) => (
          <div className="container">
            <div className="row row-cols-1 row-cols-md-3 g-4">
              <div className="box">
                <div className="card-header">
                  <img
                    src={
                      process.env.PUBLIC_URL + `/imagenes/cities/${header.img}`
                    }
                    className="card-img-top"
                    alt={header.name}
                  />
                  <div className="card-body">
                    <div key={header._id} className="card-content-item">
                      <h2 className="card-title">{header.name}</h2>
                      <p className="card-text">{header.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {itineselecter.map((itinerary) => (
            <div className="box">
              <div className="card-header" style={{ border: "width:18rem;" }}>
                <div className="card-body">
                  <div key={itinerary._id} className="card-content-item">
                    <p className="card-text">{itinerary.about}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid">
        <div className="container">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {itineraries.map((itineraries) => (
              <div className="box">
                <div
                  className="card-itineraries"
                  style={{ border: "width:18rem;" }}
                >
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      `/imagenes/itineraries/${itineraries.img}`
                    }
                    className="card-img-top"
                    alt={itineraries.name}
                  />
                  <div className="card-body">
                    <div key={itineraries._id} className="card-content-item">
                      <h2 className="card-title">{itineraries.place}</h2>
                      <div className="like-style">
              <Likes dislikelike={itineraries.likes} id={itineraries._id}/>
              </div>
                      <p className="card-text">{itineraries.description}</p>
                      <p className="card-text" style={{ alignitems: "right;" }}>
                        {itineraries.price}
                      </p>

                      <div className="card-comments">
                        <Coments itinerario={itineraries._id} />
                      </div>
                      
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
