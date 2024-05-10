import Demo from "./Demo";

import { useState } from "react";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Box1 from "./component/Box1";
import Card from "./component/Card";
import Box2 from "./component/Box2";
import {Routes, Route } from "react-router-dom";
import About from "./component/About";
// import Carousel from "./component/Carousel";


const App=()=>{

  // const [value,setValue]=useState(true);
  return(
<>
<div className="">
    <Navbar />
    <Routes>
      <Route />
      <Route />
      <Route path="/home" element={<Box1 />} />
      <Route path='/about' element={<About />} />
    </Routes>
    
    
    <Box1 />
    <Box2 />
    <div className= " flex-wrap bg-teal-100 ">

      
    <Card   />
    <Card />
    <Card />
    <br />
    <Card />
    <Card />
  

    </div>

    <Footer />
    </div>
    </>
  );
}
export default App;