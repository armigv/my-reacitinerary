import React from "react";
import { Link as LinkRouter } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav className="nav">
        <div className="container-fluid">
          <header>
            <LinkRouter to="/inicio">
              <h2 className="logo">
                <img src="img/logo.png" height="38px" alt="Logo" />
                My Itinerary
              </h2>
            </LinkRouter>

            <ul id="options">
              <LinkRouter className="nav-link" to="/inicio">
                <li className="nav-item">
                  <h2 className="Home">Home</h2>
                </li>
              </LinkRouter>

              <LinkRouter className="nav-link" to="/ciudades">
                <li className="nav-item">
                  <h2 className="Cities">Cities</h2>
                </li>
              </LinkRouter>


              <LinkRouter className="nav-link" to="/iniciosesion">
                <li className="nav-item">
                  <h2 className="SignIn">SignIn</h2>
                </li>
              </LinkRouter>

              <LinkRouter className="nav-link" to="/registro">
                <li className="nav-item">
                  <h2 className="SignUp">SignUp</h2>
                </li>
              </LinkRouter>

            </ul>
          </header>
          {/* </div><div className="menu" id="menu">
      <span />
      <span />
      <span /> */}
        </div>
      </nav>
    </>
  );
};
export default NavBar;
