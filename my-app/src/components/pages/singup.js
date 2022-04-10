import axios from "axios";
import React from "react";

import { GoogleLogin } from "react-google-login";

import {
  Grid,
  Paper,
  Avatar,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Checkbox from "@material-ui/core/Checkbox";

const SingUp = () => {
  const responseGoogle = async (response) => {
    console.log(response);
    const NuevoUsuario = {
      firstname: response.profileObj.givenName,
      lastname: response.profileObj.familyName,
      email: response.profileObj.email,
      password: response.googleId + "aB",
      from: "google",
    };

    await axios
      .post("http://localhost:4000/api/signUp", { NuevoUsuario })
      .then((response) => displayMessages(response.data));

    function displayMessages(data) {
      console.log(data);
      alert(data.message);
    }
  };

  async function NewUser(event) {
    event.preventDefault();
    const NuevoUsuario = {
      firstname: event.target[0].value,
      lastname: event.target[1].value,
      email: event.target[2].value,
      password: event.target[3].value,
      from: "signUp",
    };
    console.log(NuevoUsuario);
    console.log();
    await axios
      .post("http://localhost:4000/api/signUp", { NuevoUsuario })
      .then((response) => displayMessages(response.data));

    function displayMessages(data) {
      alert(data.message);
      console.log(data);
    }
  }
  const paperStyle = { padding: "30px 20px", width: 300, margin: "20px auto" };
  const headerStyle = { margin: 0 };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const marginTop = { marginTop: 5 };

  return (
    <div className="form-content-right">
      <form className="form" noValidate onSubmit={NewUser}>
        <h1>SIGN UP</h1>
        <div className="form-inputs">
          <label className="form-label">Firstname</label>
          <input
            className="form-input"
            type="text"
            name="firstname"
            placeholder="Enter firstname"
            // value={values.firstname}
            // onChange={handleChange}
          />
        </div>
        <div className="form-inputs">
          <label className="form-label">Lastname</label>
          <input
            className="form-input"
            type="text"
            name="lastname"
            placeholder="Enter lastname"
            // value={values.lastname}
            // onChange={handleChange}
          />
        </div>

        <div className="form-inputs">
          <label className="form-label">Email</label>
          <input
            className="form-input"
            type="email"
            name="email"
            placeholder="Enter your email"
            // value={values.email}
            // onChange={handleChange}
          />
        </div>
        <div className="form-inputs">
          <label className="form-label">Password</label>
          <input
            className="form-input"
            type="password"
            name="password"
            placeholder="
          Enter your password"
            // value={values.password}
            // onChange={handleChange}
          />
        </div>

        <button className="form-input-btn" type="submit">
          SIGN UP
        </button>

        <GoogleLogin
          clientId="978439282429-ogtgijbrqbrom1gq2p7enhv5l6iool4k.apps.googleusercontent.com"
          buttonText="SignUP Google"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
        />
      </form>
    </div>
  );
};
export default SingUp;
// 978439282429-ogtgijbrqbrom1gq2p7enhv5l6iool4k.apps.googleusercontent.com
