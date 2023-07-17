import React from "react";
import "../css/NewsMain.css";
import "../css/Contact.css"

function ContactUs() {
    
  
  return (
    <>
      <div className="news-container1">
        <hr className="hr"></hr>
        <img src={require('../images/contact.jpg')} style={{marginLeft:"50px"}} className="contactimg1"/>
        <img src={require('../images/contactm.jpg')} style={{marginLeft:"-5px"}} className="contactimg2"/>
      </div>
    </>
  );
}

export default ContactUs;
