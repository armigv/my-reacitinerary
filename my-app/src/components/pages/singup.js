import axios from "axios";
import React from "react";

const Singup = () => {
  async function NewUser(e) {

    e.preventDefault() {

     const NuevoUsuario =    {firstname: e.target[0].firstname.value,
     lastname:e.target[2].lastname.value,
     email:e.target[4].email.value,
     password:e.target[6].password.value,
    
    },
     
    }

      console.log(Data)
    console.log(e)

    await axios.post("http://localhost:4000/api/signup", {NuevoUsuario})
    .then(response =>
      
      l
      )
  }
  
  return <div></div>;
};
export default Singup;
