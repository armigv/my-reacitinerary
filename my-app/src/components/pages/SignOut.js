import React from "react";

import { Link as LinkRouter } from "react-router-dom";
import { useStateValue } from "../../StateProvider";
import { actionType } from "../../Core/reducer";
import { Nav, NavDropdown } from "react-bootstrap";

import axios from "axios";

const SignOut = () => {
  const [{ user }, dispatch] = useStateValue();
  async function cerrarSesion() {
    const email = user.datosUser.email;
    await axios
      .post("http://localhost:4000/api/signOut", { email })
      .then(response => {
        console.log(response.data.response);
        dispatch({
            type:actionType.USER,
            user:null
        })
    })
  }

  return (

<div>

{/* <div className="nav-link active hover-underline-animation" aria-current="page" to="/singIn">Sing In </div>
<div className="nav-link active hover-underline-animation" aria-current="page" to="/singIn">Sing Out </div> */}

{
    !user ?<div className="nav-link active hover-underline-animation" aria-current="page" >
        <LinkRouter to='/iniciarsesion' className="nav-link-iniciarsesion">
    </LinkRouter>
    </div>
    :
    <div className="nav-link active hover-underline-animation " aria-current="page" onClick={cerrarSesion}><img className="logueado" src=""/> </div>
}

</div>
)


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
