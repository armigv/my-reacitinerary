
import axios from "axios"

import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Footer from './components/footer';
import Home from './components/pages/home';
import Navbar from './components/Navbar';
import Cities from "./components/pages/cities"



function App() {
  const data=[];

  axios
    .get("http://localhost:4000/api/datos")
    .then(response => {
      data.push(...response.data.response.cities)
    })
  
  console.log(data);

  return (
    <BrowserRouter>
    <Navbar/>

   <Routes>
   <Route path= "/" element= {<Home/>}/>
   <Route path= "/inicio" element= {<Home/>}/>
    <Route path= "/ciudades" element= {<Cities data={data}/>}/>
    
    
    </Routes>

    <Footer/>
    </BrowserRouter>
  )
}

export default App;
