import './App.css';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Footer from './components/footer';
import City from './components/pages/city';
import Home from './components/pages/home';
import Navbar from './components/Navbar';



function App() {
  return (
    <BrowserRouter>
    <Navbar/>

   <Routes>
    <Route path="/inicio" element= {<Home/>}/>
    <Route path= "/ciudades" element= {<City/>}/>
    </Routes>

    <Footer/>
    </BrowserRouter>
  )
}

export default App;
