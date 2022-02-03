import React, { useEffect} from 'react'

import './App.css';
import "./Css/css.css";
import "./Css/citiesfather.scss";
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Footer from './components/footer';
import Home from './components/pages/home';
import Navbar from './components/Navbar';
import Cities from "./components/pages/cities"
import axios from "axios"


function App() {


async function test () {
  
  axios.get("http://localhost:4000/api/datos")
.then(response =>console.log(response))
  
}



  useEffect(() => {
test()
});



  return (
    <BrowserRouter>
    <Navbar/>

   <Routes>
    <Route path="/inicio" element= {<Home/>}/>
    <Route path= "/ciudades" element= {<Cities/>}/>
    <Route path= "*" element= {<Home/>}/>
    </Routes>

    <Footer/>
    </BrowserRouter>
  )
}

export default App;
