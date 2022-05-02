import React from "react";
import axios from "axios";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  Link,
} from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

import { GoogleLogin } from "react-google-login";
import { useStateValue } from "../../StateProvider";
import { actionType } from "../../Core/reducer";

const SignIn = () => {
  const [{ user }, dispatch] = useStateValue();

  const responseGoogle = (response) => {
    const userData = {
      email: response.profileObj.email,
      password: response.googleId + "aB",
      from: "google",
    };

    axios
      .post("http://localhost:4000/api/signIn", { userData })
      .then((response) => displayMessages(response.data));

    function displayMessages(data) {
      console.log(data);

      if (!data.success) {
        alert(data.response.message);
      } else {
        localStorage.setItem("token", data.response.response.token);

        alert(data.response.message);

        dispatch({
          type: actionType.USER,
          user: data.response,
        });
      }
    }
    console.log(response);
  };

  async function loginUser(event) {
    console.log(event);
    event.preventDefault();
    const userData = {
      email: event.target[0].value,
      password: event.target[1].value,
    };
    console.log(userData);
    await axios
      .post("http://localhost:4000/api/signIn", { userData })
      .then((response) => displayMessages(response.data));
    function displayMessages(data) {
      console.log(data);

      if (!data.success) {
        alert(data.response.message);
      } else {
        localStorage.setItem("token", data.response.response.token);

        alert(data.response.message);
        dispatch({
          type: actionType.USER,
          user: data.response,
        });
      }
    }
  }

  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 280,
    margin: "20px auto",
  };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const btnstyle = { margin: "8px 0" };

  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}></Avatar>
          <h2>Sign In</h2>
        </Grid>
        <form noValidate onSubmit={loginUser}>
          <TextField
            label="Username"
            placeholder="Enter username"
            fullWidth
            required
          />
          <TextField
            label="Password"
            placeholder="Enter password"
            type="password"
            fullWidth
            required
          />
          <FormControlLabel
            control={<Checkbox name="checkedB" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            color="primary"
            variant="contained"
            style={btnstyle}
            fullWidth
          >
            Sign in
          </Button>
          <Typography>
            <Link href="#">Forgot password ?</Link>
          </Typography>
          <Typography>
            {" "}
            Do you have an account ?<Link href="#">Sign Up</Link>
          </Typography>
        </form>
        <GoogleLogin
          clientId="978439282429-ogtgijbrqbrom1gq2p7enhv5l6iool4k.apps.googleusercontent.com"
          buttonText="SignIn Google"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
        />
      </Paper>
    </Grid>
  );
};
export default SignIn;
