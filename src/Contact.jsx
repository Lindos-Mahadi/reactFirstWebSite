import React, { useState } from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Contact = () =>{
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    msg: "",
  });
  
  const inputEvent = (event) => {
    const {name, value} = event.target;
    setData((preVal) => { 
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const formSubmit = (e) =>{
    e.preventDefault();
    alert(`My name is: ${data.fullname}. My mobile number is: ${data.phone}.My email address is: ${data.email} and My message is: ${data.msg}`);
  };

  return(
    <React.Fragment>
      <div className="my-5">
        <h1 className="text-center">Welcome Contact Page !</h1>
      </div>
      <div className="container contact_div">
            <div className="row">
                <div className="col-md-6 col-10 mx-auto">
                  <form action="" onSubmit={formSubmit}>
                    <div className="mb-3">
                      <label for="name">Full Name</label>
                      <input type="text" className="form-control" id="name" 
                        name="fullname"
                        value={data.fullname}
                        onChange={inputEvent}
                        placeholder="Enter Your Name" required/>
                    </div> 
                    <div className="mb-3">
                      <label for="email">Enter Your E-mail</label>
                      <input type="email" className="form-control" id="email"
                        name="email"
                        value={data.email}
                        onChange={inputEvent}
                        placeholder="name@example.com"
                        autoComplete="off" required />
                    </div>
                    <div className="mb-3">
                      <label for="phone">Enter Phone Number</label>
                      <input type="phone" className="form-control" id="phone" 
                        name="phone"
                        value={data.phone}
                        onChange={inputEvent}
                        placeholder="Mobile Number" required />
                    </div>
                    <div className="mb-3">
                      <label for="message" className="form-label">Message Here...</label>
                      <textarea className="form-control" id="message" rows="3"
                        name="msg"
                        value={data.msg}
                        onChange={inputEvent} >
                       </textarea>
                    </div>
                    <div class="col-12">
                      <button class="btn btn-outline-primary" type="submit">Submit form</button>
                    </div>
                  </form>
                </div>
            </div>
        </div>
    </React.Fragment>
  );
};

export default Contact;
