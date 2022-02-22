import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Home from "./Components/Home/Home"
import Footer from "./Components/Footer/Footer"
import AboutUs from './Components/AboutUs/AboutUs';
import Services from "./Components/Services/Services"
import "bootstrap/dist/css/bootstrap.min.css"
import Formulario from './Components/Formulario/Formulario'
import Divider from './Components/Divider';




function App() {
  return (
    <div className='background-image-cover'>
    <div className="background-image">
      
      <NavBar/> 
      <Home/>
      <AboutUs/>
      <Services/>
      
      <Formulario/>
      <Footer></Footer>
    </div>
    </div>
  );
}

export default App;
