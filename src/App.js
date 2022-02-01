  
import React from 'react';
import './components/Meal.css';
import MealFetch from './components/MealFecth';
// import MealPics from './components/MealPics';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Nav from './components/Nav';
import Contact from './components/Contact';
import Footer from './components/Footer';
import About from './components/About';
// import  images from 'images/logo.png ';



function App() {
  return (
   < BrowserRouter>
    <div className="App">
     
    <Nav />
    <Footer />
    {/* <img src={logo.png} alt="image" /> */}
      <Routes>
     
        <Route  path="/" element={<MealFetch/>}/>
        <Route  path='Home' element={<MealFetch/>} />
        <Route  path="about" element={<About/>}/>
        <Route path="contact" element={<Contact />}/>
      
      </Routes>
     
    </div>
    </BrowserRouter>
  ); 
}

export default App;








