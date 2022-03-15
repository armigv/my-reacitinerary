import React from "react";
import axios from "axios";
import { useStateValue } from "../StateProvider"

export default function comments() {
  const [{ user }, dispatch] = useStateValue();

  const submitComment= (event)=> {

    event.prevenDefault()

    const dataComments = {
        itinerarie:props.itinerary
message: event.target[0].value
user:user.datosUser.id


    }
  }

  return <div>comments</div>;
}
