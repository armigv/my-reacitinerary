import './App.css';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Footer from './components/footer';
import Home from './components/pages/home';
import Navbar from './components/Navbar';
import Cities from "./components/pages/cities"


function App() {
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
