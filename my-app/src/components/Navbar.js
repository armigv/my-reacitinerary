import React from "react"
import { Link as LinkRouter} from "react-router-dom"
 

const NavBar = () => {

return (
  
  <>
  
  <div className="container-fluid">
    <header>
      <LinkRouter to="/inicio">
        <h2 className="logo">
          <img src="img/logo.png" height="38px" alt="Logo" />
          My Itinerary
        </h2>
      </LinkRouter>

      <ul id="options">
        <li className="nav-item">
          <LinkRouter className="nav-link" to="/inicio">

          </LinkRouter>
        </li>

        <li className="nav-item">

          <LinkRouter className="nav-link" to="/iudades">
          </LinkRouter>
        </li>
      </ul>
    </header>
    </div><div className="menu" id="menu">
      <span />
      <span />
      <span />
    </div></>
  )
}
export default NavBar