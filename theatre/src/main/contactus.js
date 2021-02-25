

import React from 'react';
import './main.css'
import { Grid, Row, Col } from "react-bootstrap";


class Contactus extends React.Component {

    // const navStyle = {
    //     // col or: props.palette[0],
    // },

    render() {

        return (
            <div class="center ">
                <div class="buffer-top">
                    <Row class="buffer-top">
                        <Col s={12} md={12}><h3 class="buffer-top"> The City Theatre Team</h3></Col>
                        <Col s={12} md={6}> Director and General Manager - Andy Berkovsky </Col>
                        <Col s={12} md={6}> Production Team Leaders - Clay Avery and Jeff Hinkle </Col>
                        <Col s={12} md={6}> Advisory and Programming Committee - Tracy Hurd, </Col>
                        <Col s={12} md={6}> Cris Skinner, and Kevin Smith </Col>
                        <Col s={12} md={6}> Costume Designers - Lindsay McKenna, Bert Flanagan, </Col>
                        <Col s={12} md={6}> Ronni Prior, Scout Gutzmerson, Erin Schreck </Col>
                        <Col s={12} md={6}> Christina L. Manley, and Rosalie Oliveri </Col>
                        <Col s={12} md={6}> Publicity and Sound Design - Jeremy White </Col>
                        <Col s={12} md={6}> Show Photography - Aleks Ortynski </Col>
                        <Col s={12} md={6}> Scenic Painting - Jennifer Cunningham </Col>
                        <Col s={12} md={6}> Technical Production Assistants - John Kolkhorst, </Col>
                        <Col s={12} md={6}> Rod Mechem, Gene Berry, and Gwen Balboa </Col>
                        <Col s={12} md={6}> On the Road Venue Manager - Sammy Panzarino </Col>
                        <Col s={12} md={6}> Box and Concessions Coordinator - Kate Knapek </Col>
                        <Col s={12} md={6}> Show Management Team - Stephen Reynolds, </Col>
                        <Col s={12} md={6}> Connie Dasse, Ron Hughes, Elizabeth Stehl, </Col>
                        <Col s={12} md={6}> Linda Corley, Carol Dye, Valencia Lee, </Col>
                        <Col s={12} md={6}> and Sigrid Levi-Baum </Col>
                    </Row>
                    <Row class="buffer-top">
                        <Col s={{ span: 10, offset: 1 }} md={{ span: 8, offset: 2 }}><h3 class="buffer-top">Contact Us</h3></Col>
                        <Col s={{ span: 10, offset: 1 }} md={{ span: 8, offset: 2 }}>PO Box 181125</Col>
                        <Col s={{ span: 10, offset: 1 }} md={{ span: 8, offset: 2 }}>Austin, Texas 78718</Col>
                        <Col s={{ span: 10, offset: 1 }} md={{ span: 8, offset: 2 }}>Phone: 512-670-1100</Col>
                        <Col s={{ span: 10, offset: 1 }} md={{ span: 8, offset: 2 }}>info@citytheatreaustin.org</Col>

                    </ Row>
                </div>



            </div>

        )

    }
}

export default Contactus