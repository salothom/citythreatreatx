

import React from 'react';
import './header.css'
import { Grid, Row, Col } from "react-bootstrap";

const Header = () => {

    const navStyle = {
        // color: props.palette[0],
    }

    return (
        <div class="desktop-nav">
            <Row>
                <Col s={12} md={3} class="">City Theatre Austin</Col>
                <Col s={12} md={9}  class="navitems">
                    <a class="navbutton">About Us</a>
                    <a class="navbutton">Upcoming Shows</a>
                    <a class="navbutton">Classes</a>
                    <a class="navbutton">Auditions</a>
                    <a class="navbutton">Support Us</a>

                </Col>
            </Row>
        </div>

    )
}

export default Header