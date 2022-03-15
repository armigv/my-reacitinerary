import React from "react";

import { Link as LinkRouter } from "react-router-dom";
import { useStateValue } from "../../StateProvider";
import { Nav, NavDropdown } from "react-bootstrap";

import axios from "axios";

const SignOut = () => {
  const [{ user }, dispatch] = useStateValue();
  async function cerrarSesion() {
    const email = user.datosUser.email;
    await axios
      .post("http://localhost:4000/api/signOut", { email })
      .then((response) => console.log(response));
  }

  return (
    <Nav>
      <NavDropdown >
     <NavDropdown.Item onClick={() => cerrarSesion()}>
       
          Sign Out
        </NavDropdown.Item>
        
      
      </NavDropdown>
    </Nav>
  );
};

export default SignOut;
