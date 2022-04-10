<div className="dropdown">
  <button
    data-toggle="dropdown"
    aria-haspopup="true"
    aria-expanded="false"
    type="button"
    className="btn btn bg-transparent"
  >
    <img
      src={imgCompassLog}
      width="40"
      height="40"
      alt="ícono de Logueo SignIn y SignUp"
    />
  </button>
  <div className="dropdown-menu dropdown-menu-right">
    {" "}
    {!user ? (
      <Linkrouter className="dropdown-item" to="/cardSignIn">
        Sign In
      </Linkrouter>
    ) : (
      <div className="dropdown-item" onClick={() => cerrarCesion()}>
        <Linkrouter className="dropdown-item" to="/">
          Sign Out
        </Linkrouter>
      </div>
    )}{" "}
    <div className="dropdown-divider"></div>
    <Linkrouter className="dropdown-item" to="/cardSignUp">
      Sign Up
    </Linkrouter>
  </div>
</div>;
