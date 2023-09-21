import React, { useRef, useEffect, useState } from "react";
import Banner from "../images/SP-Banner.png";
import Card from "react-bootstrap/Card";
import FS from "../images/Family Services.png";
import ES from "../images/Educational Services.png";
import CMS from "../images/Church and Ministry Services_Special Pathways.png";
import SETF from "../images/Services for Equine Therapy Facilities_Special Pathways.png";
import Container from "react-bootstrap/Container";

export default function Home() {
    const [visibleServices, setVisibleServices] = useState({
      family: false,
      educational: false,
      church: false,
      equine: false,
    });
  
    const toggleServiceVisibility = (service) => {
      const updatedServices = { ...visibleServices };
      updatedServices[service] = !updatedServices[service];
      setVisibleServices(updatedServices);
    };
  
    // Function to check if a service is open
    const isServiceOpen = (service) => visibleServices[service];

  return (
    <div className="homePage">
      <div className="mb-3 description">
        <Card>
          <Card.Body>
            <Card.Title>A Full Service Experience</Card.Title>
            <Card.Text>
              At Special Pathways, LLC, our goal is to provide individualized
              consulting services that will best fit the needs of those with a
              disability and those who serve them. Whether you are a teacher,
              administrator, church, family member, or other service provider,
              we are here to help you. We aim to fill your need to its fullest
              potential so that you can continue to serve those with special
              needs with ease.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <Container>
        <div
          className="row servicesCards"
          style={{ display: "flex", flexWrap: "wrap" }}
        >
          <div className="col-lg-3 col-md-6 col-sm-6 mb-3 equal-height-card">
            <a href="/Services#family" onClick={() => toggleServiceVisibility("family")}>
            <Card>
              <Card.Img variant="top" src={FS} />
              <Card.Body>
                <Card.Title>Family Services</Card.Title>
              </Card.Body>
            </Card>
            </a>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 mb-3 equal-height-card">
            <a href="/Services#educational" onClick={() => toggleServiceVisibility("educational")}>
            <Card>
              <Card.Img variant="top" src={ES} />
              <Card.Body>
                <Card.Title>Educational Services</Card.Title>
              </Card.Body>
            </Card>
            </a>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 mb-3 equal-height-card">
          <a href="/Services#church" onClick={() => toggleServiceVisibility("church")}>
            <Card>
              <Card.Img variant="top" src={CMS} />
              <Card.Body>
                <Card.Title>Church and Ministry Services</Card.Title>
              </Card.Body>
            </Card>
            </a>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 mb-3 equal-height-card">
          <a href="/Services#equine" onClick={() => toggleServiceVisibility("equine")}>
            <Card>
              <Card.Img variant="top" src={SETF} />
              <Card.Body>
                <Card.Title>Services for Equine Therapy Facilities</Card.Title>
              </Card.Body>
            </Card>
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
}