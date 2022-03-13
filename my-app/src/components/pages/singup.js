import axios from "axios";
import React from "react";

import { GoogleLogin } from 'react-google-login';

import { Grid, Paper, Avatar, Typography, TextField, Button } from '@material-ui/core'
// import Radio from '@material-ui/core/Radio';
// import RadioGroup from '@material-ui/core/RadioGroup';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import FormControl from '@material-ui/core/FormControl';
// import FormLabel from '@material-ui/core/FormLabel';
// import Checkbox from '@material-ui/core/Checkbox';


const SingUp = () => {

  const responseGoogle = async (response) => {
    console.log(response);
    const NuevoUsuario = {
      firstname: response.profileObj.givenName,
      lastname: response.profileObj.familyName,
      email: response.profileObj.email,
      password:response.googleId + "aB",
      from:"Google"
    }

    await axios.post("http://localhost:4000/api/signUp",{NuevoUsuario} )
    .then(response=> displayMessages(response.data))


      function displayMessages(data){
        if(data.success==="falseVAL"){
    
          console.log(data)
         console.log(data.response.error.details)

        alert(data.response.error.details.map(error=>error.message))
        }else if(data.success==="trueUE"){
        
          console.log(data)
        }
       }


  }
  
  async function NewUser(event) {
    event.preventDefault();
    const NuevoUsuario = {
      firstname: event.target[0].value,
      lastname: event.target[1].value,
      email: event.target[2].value,
      password: event.target[3].value,
      google:false
    }
console.log(NuevoUsuario)
console.log()
    await axios.post("http://localhost:4000/api/signUp",{NuevoUsuario} )
    .then(response=> displayMessages(response.data))


      function displayMessages(data){
        if(data.success==="falseVAL"){
    
          console.log(data)
         console.log(data.response.error.details)

        alert(data.response.error.details.map(error=>error.message))
        }else if(data.success==="trueUE"){
        
          console.log(data)
        }
       }
  }
  const paperStyle = { padding: '30px 20px', width: 300, margin: "20px auto" }
  const headerStyle = { margin: 0 }
  const avatarStyle = { backgroundColor: '#1bbd7e' }
  const marginTop = { marginTop: 5 }
  return (
      <Grid>
          <Paper elevation={20} style={paperStyle}>
              <Grid align='center'>
                  <Avatar style={avatarStyle}>
                  </Avatar>
                  <h2 style={headerStyle}>Sign Up</h2>
                  <Typography variant='caption' gutterBottom>Please fill this form to create an account !</Typography>
              </Grid>
              <form onSubmit={NewUser}>
                  <TextField fullWidth label='Name' placeholder="Enter your name" />
                  <TextField fullWidth label='Last Name' placeholder="Enter your Last name" />
                  <TextField fullWidth label='Email' placeholder="Enter your email" />
                  {/* <FormControl component="fieldset"  style={marginTop}>
                      <FormLabel component="legend">Gender</FormLabel>
                      <RadioGroup aria-label="gender" name="gender" style={{ display: 'initial' }}>
                          <FormControlLabel value="female" control={<Radio />} label="Female" />
                          <FormControlLabel value="male" control={<Radio />} label="Male" />
                      </RadioGroup>
                  </FormControl> */}
                  {/* <TextField fullWidth label='Phone Number' placeholder="Enter your phone number" /> */}
                  <TextField fullWidth label='Password' placeholder="Enter your password"/>
                  {/* <TextField fullWidth label='Confirm Password' placeholder="Confirm your password"/> */}
                  {/* <FormControlLabel
                      control={<Checkbox name="checkedA" />}
                      label="I accept the terms and conditions."
                  /> */}
                  <Button type='submit' variant='contained' color='primary'>Sign up</Button>
              </form>
              <GoogleLogin
    clientId="978439282429-ogtgijbrqbrom1gq2p7enhv5l6iool4k.apps.googleusercontent.com"
    buttonText="SignUP Google"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  />
          </Paper>
      </Grid>
  )
};
export default SingUp;
// 978439282429-ogtgijbrqbrom1gq2p7enhv5l6iool4k.apps.googleusercontent.com