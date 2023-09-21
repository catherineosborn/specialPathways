import React from "react";

export default function Contact() {
    return(
        <div className="contactPage">
        <br/>
        <h1>Contact Us</h1>
        <br/>
        <hr />
        <br/>
        <h2>
        Call or email for more information: {" "}<br/>
        <a href="tel:502-501-4032" className="contactLink">(502) 501-4032</a> or{" "}
        <a href="mailto:hannah@specialpathwaysllc.com" className="contactLink">hannah@specialpathwaysllc.com</a>
        </h2>
        <br/>
        <hr />
        <br/>
        <h2>Company Hours:</h2>
        <br/>
        <h4>Monday through Friday: 8am - 5pm</h4>
        <br/>
        <h4>Weekends: Only by Appointment</h4>
        <br/>
        <br/>
        </div>
    );
}