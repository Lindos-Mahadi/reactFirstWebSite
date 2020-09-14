import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Common from './Common';
import web from "../src/img/about.jpg";

const About = () =>{
  return(
    <React.Fragment>
      <Common 
        name="Welcome to About page"
        imgsrc={web}  
        visit="/contact" 
        btname="Contact Now" />
    </React.Fragment>
  );
};

export default About;
