import React from "react"
 

const NavBar = () => {

return (
<div>
<header>
    <nav id="nav">
      <h2 className="logo">
        <img src="img/logo.png" height="38px" alt="Logo" />
        FRANCO PETSHOP
      </h2>
      <nav>
        <ul id="options">
          <li>
            <a href="#">Inicio</a>
          </li>
          <li>
            <a href="blog.html">Nuestro Blog</a>
          </li>
          <li>
            <a href="productos.html">Productos</a>
          </li>
          <li>
            <a href="contacto.html">Contacto</a>
          </li>
        </ul>
      </nav>
    </nav>
    <a href="./compra.html">
      <img src="img/carrito.png" height="38px" alt="Compras" id="verCarrito" />{" "}
    </a>
    <div className="menu" id="menu">
      <span />
      <span />
      <span />
    </div>

  </header>
)


</div>

)



} 
export default NavBar