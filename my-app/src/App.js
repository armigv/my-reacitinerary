import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import { useStateValue } from "./StateProvider";
import { actionType } from "./Core/reducer";

import Footer from "./components/footer";
import Home from "./components/pages/home";
import Navbar from "./components/Navbar";
import Cities from "./components/pages/cities";
import City from "./components/pages/city";
import SignIn from "./components/pages/signin";
import SingUp from "./components/pages/singup";
import SignOut from "./components/pages/SignOut";

function App() {
  const [{ cities, itineraries }, dispatch] = useStateValue();

  useEffect(() => {
    axios.get("http://localhost:4000/api/datos").then((response) => {
      dispatch({
        type: actionType.CITIESDB,
        cities: response.data.response.cities,
      });

  

    });

    if (localStorage.getItem("token") !== null) {
      const token = localStorage.getItem("token")
      const user = axios.get("http://localhost:4000/api/signintoken", {
        headers: {
          "Authorization": "Bearer " + token
        }
      })

        .then(user => {
          if (user.data.success) {
            dispatch({
              type: actionType.USER,
              user: user.data,
            })
          } else {
            localStorage.removeItem("token")
          }
        })
    }



  }, []);

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/inicio" element={<Home />} />
        <Route path="/ciudades" element={<Cities />} />
        <Route path="/ciudad/:id" element={<City />} />
        <Route path="/iniciosesion" element={<SignIn />} />
        <Route path="/registro" element={<SingUp />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
