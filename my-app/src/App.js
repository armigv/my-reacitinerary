import './App.css';

import Footer from './components/footer';
import City from './components/pages/city';
import Home from './components/pages/home';
import Navbar from './components/Navbar';
import Carousel from './components/carousel';



function App() {
  return (
    <>
    <Navbar/>
    <Carousel/>
    <Home/>
    <City/>
    <Footer/>
    </>
  )
}

export default App;
