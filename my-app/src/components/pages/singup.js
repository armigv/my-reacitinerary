import axios from "axios";
import React from "react";




import { makeStyles } from "@material-ui/core/styles";

import { GoogleLogin } from "react-google-login";

import {
  Grid,
  Paper,
  Avatar,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";

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


  const useStyles = makeStyles((theme) => ({
    root: {
      backgroundImage: "url('https://images.pexels.com/photos/46148/aircraft-jet-landing-cloud-46148.jpeg?auto=compress&cs=tinysrgb&h=650&w=940')"
    }
    
  }));

  const classes = useStyles();


  
  const paperStyle = { padding: "30px 20px", width: 300, margin: "20px auto" };
  const headerStyle = { margin: 0 };
  const avatarStyle = { backgroundColor: "#1bbd7e" };

  return (
    <div className={classes.root}>
    <Grid>
      <Paper elevation={20} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
          </Avatar>
          <h2 style={headerStyle}>Sign Up</h2>
          <Typography variant="caption" gutterBottom>
            Please fill this form to create an account !
          </Typography>
        </Grid>
        <form noValidate onSubmit={NewUser}>
          <TextField
            fullWidth
            label="FirstName"
            placeholder="Enter your FirstName"
            required
          />
          <TextField
            fullWidth
            label="LastName"
            placeholder="Enter your LastName"
            required
          />

          <TextField
            fullWidth
            label="Email"
            placeholder="Enter your email"
            required
          />
          <TextField
            fullWidth
            label="Password"
            placeholder="Enter your password"
            required
          />
          <FormControlLabel
            control={<Checkbox name="checkedA" />}
            label="I accept the terms and conditions."
            required
          />
          <Button type="submit" variant="contained" color="primary">
            Sign up
          </Button>
        </form>

        <GoogleLogin
          clientId="978439282429-ogtgijbrqbrom1gq2p7enhv5l6iool4k.apps.googleusercontent.com"
          buttonText="SignUP Google"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
        />
      </Paper>
    </Grid>
    </div>
  );
};
export default SingUp;
// 978439282429-ogtgijbrqbrom1gq2p7enhv5l6iool4k.apps.googleusercontent.com
