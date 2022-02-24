import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useStateValue } from "../../StateProvider";
import axios from "axios";

export default function City() {
  const { itineraries, setItineraries } = useState([]);
  const [{ cities }, dispatch] = useStateValue();
  const { id } = useParams();
  const cityselecter = cities.filter((city) => city._id === id);

  useEffect(() => {
    cityselecter.map((city) =>
      axios
        .get(`http://localhost:4000/api/itineraries/${city.name}`)
        .then((response) => setItineraries(response.data.response.itineraries))
    );
  }, []);

  console.log(cityselecter);

  return <div></div>;
}
