import React, { useState } from "react";

import { Link as LinkRouter } from "react-router-dom";
import { useStateValue } from "../../StateProvider";
import { actionType } from "../../Core/reducer";
import { Nav, NavDropdown } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import Logo from "../../img/fire-exit-sign-emergency-exit-1638502.jpg";
import "../../App.css";
import axios from "axios";

const SignOut = () => {
  const [{ user }, dispatch] = useStateValue();

  async function cerrarSesion() {

    
    const email = user.response.email;

    await axios
      .post("http://localhost:4000/api/signOut", { email })
      .then((response) => {
        console.log(response.data.message);
        if (response.data.success) {
          localStorage.removeItem("token", response.data.message);
          alert(response.data.message);
          dispatch({
            type: actionType.USER,
            user: null,
          });
        }
      });
  }

  return (
    <div>
      {/* <div className="nav-link active hover-underline-animation" aria-current="page" to="/singIn">Sing In </div>
<div className="nav-link active hover-underline-animation" aria-current="page" to="/singIn">Sing Out </div> */}

      {!user ? (
        <div
          className="nav-link active hover-underline-animation"
          aria-current="page"
        >
          <LinkRouter to="/iniciosesion" className="nav-link-iniciosesion">
            <FaUserCircle />
          </LinkRouter>
        </div>
      ) : (
        <div
          className="nav-link active hover-underline-animation "
          aria-current="page"
          onClick={cerrarSesion}
        >
          <img className="logueado" src={Logo} />{" "}
        </div>
      )}
    </div>
  );

  //     <Nav>
  //       {
  //       <NavDropdown >
  //      <NavDropdown.Item onClick={() => cerrarSesion()}>

  //           Sign Out
  //         </NavDropdown.Item>

  //       </NavDropdown>
  // }
  //     </Nav>
};

export default SignOut;
