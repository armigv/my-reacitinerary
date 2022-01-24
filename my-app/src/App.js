import './App.css';

import Footer from './components/footer';
import City from './components/pages/city';
import Home from './components/pages/home';
import Navbar from './components/Navbar';



function App() {
  return (
    <>
    <Navbar/>
    
    <Home/>
    <City/>
    <Footer/>
    </>
  )
}

export default App;
