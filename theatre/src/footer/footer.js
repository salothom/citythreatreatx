

import React from 'react';
import './footer.css'
import { Grid, Row, Col } from "react-bootstrap";


const Footer = () => {

  const navStyle = {
    // color: props.palette[0],
  }

  return (
    <div class="footer">
      <Row >
        <Col s={12} md={4} class="footerleft">
          <Row>
            <Col s={12} md={12} > <h3>Get Involved</h3></Col>
            <Col s={12} md={12} ><a class="footlink">Auditions</a></Col>
            <Col s={12} md={12} ><a class="footlink">Support Us</a></Col>
            <Col s={12} md={12} > <a class="footlink">Mailing List</a></Col>
            <Col s={12} md={12} ><a class="footlink">Classes</a></Col>
          </Row>
        </Col>
        <Col s={12} md={4} class="footerleft">
          <Row>
            <Col s={12} md={12} ><h3>What's Showing</h3></Col>
            <Col s={6} md={12} > <a class="footlink">About City Theatre</a></Col>
            <Col s={6} md={12} > <a class="footlink">Show Season</a></Col>
            <Col s={6} md={12} ><a class="footlink">Past Seasons</a></Col>
          </Row>
        </Col>
        <Col s={12} md={4} class="footerleft">
          <Row>
            <Col s={12} md={12} ><h3>Come See a Show</h3></Col>
            <Col s={4} md={12} ><a class="footlink">Tickets</a></Col>
            <Col s={4} md={12} ><a class="footlink">Season Tickets</a></Col>
            <Col s={4} md={12} ><a class="footlink">Booking</a></Col>
            <Col s={4} md={12} ><a class="footlink">Home</a></Col>
            <Col s={4} md={12} ><a class="footlink">Contact Us</a></Col>
          </Row>


        </Col>
      </Row>
    </div>

  )
}

export default Footer