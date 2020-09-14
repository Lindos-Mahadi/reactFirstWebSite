import React from 'react';
import { NavLink } from 'react-router-dom';
import web from "../src/img/rockets.png";
import Common from './Common';

const Home = () =>{
  return(
    <React.Fragment>
      <Common 
        name="Grow your bussiness with"
        imgsrc={web}  
        visit="/contact" 
        btname="Get Started" />
    </React.Fragment>
  );
};

export default Home;
