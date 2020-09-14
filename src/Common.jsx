import React from 'react';
import { NavLink } from 'react-router-dom';

const Common = (props) =>{
  return(
    <React.Fragment>
      <section id="header" className="d-flex align-items-center">
      <div className="container-fluid">
            <div className="row">
                <div className="col-10 mx-auto">
                    <div className="row">
                    <div className="col-md-6 col-12 mt-5 pt-lg-0 d-flex flex-column justify-content-center">
                        <h1> 
                            {props.name} 
                            <strong className="brand-name"> LINDOS</strong>
                         </h1>
                        <h2 className="my-3">We are the team of talented developer making websites</h2>
                        <div className="mt-3">
                            <NavLink to={props.visit} className="btn btn-get-started"> {props.btname} ... </NavLink>
                        </div>
                    </div>
                    <div className="col-md-6 col-12 my-5  header-img">
                        <img src={props.imgsrc} className="img-fluid animated float-right" alt="img"/>
                    </div>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Common;
