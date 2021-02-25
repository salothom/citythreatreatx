

import React from 'react';
import './main.css'

import { Grid, Row, Col } from "react-bootstrap";

class Tickets extends React.Component {

    // const navStyle = {
    //     // col or: props.palette[0],
    // },

    render() {

        return (
            <div class="from-edge">
                <Pricing />
                <Seasonpass />
                <Info />

            </div>

        )

    }
}

const Seasonpass = () => {
    return (
        <div class="season center colorbacktwo">
            <h3 class="buffer-top">Season Tickets</h3>
            <Row>
                <Col s={12} md={4}><h4 class="buffer-top">General Passes</h4>
                    <p>$300/Two General Seats</p></Col>
                <Col s={12} md={4}> <h4 class="buffer-top">Reserved Pass</h4>
                    <p>$450/Two Center Seats
        or your Choice of Seats.</p></Col>
                <Col s={12} md={4}><h4 class="buffer-top">Producer or
            Holiday Pass</h4>
                    <p>$160/12 Anytime Seats</p></Col>

            </Row>



        </div>
    )


}



const Info = () => {
    return (
        <div class="center">
            <div class="buffer-top">
                <h3>Performances Times</h3>
                <p>Thursday - Saturday 8: 00 p.m. and Sunday 3: 00 p.m.
Check show listing dates and times on our Now Playing page.</p>
                <p>
                    Box office opens one hour prior show time.
                    Seating begins twenty minutes before curtain.
</p> <p>Group discounts(10 +) available for all shows.</p>
            </div>
            <div class="buffer-top">
                <h3>The City Theatre Seating Policy</h3>
                <Row>
                    <Col s={{ span: 10, offset: 1 }} md={{ span: 8, offset: 2 }}>

                        <ul>
                            <li>We ask that you do not save seats for other patrons.</li>
                            <li>No late seating. </li>
                            <li>All General and Guaranteed Reserved Seats not
    purchased or claimed five minutes before curtain will be released.</li>
                        </ul>
                    </Col>
                </Row>
            </div>
            <div class="buffer-top">
                <h3> City Theatre Accessibility</h3>
                <p>All City Theatre venues are ADA accessible facilities.</p>
            </div>
            <div>
                <h3></h3>
                <p></p>
            </div>
        </div>






    )
}


const Pricing = () => {

    return (
        <Row>
            <Col md={12} lg={6}>
                <h3 class="center buffer-top">Regular Pricing</h3>
                <div class="d-none d-md-block d-lg-block d-xl-block">
                    <table class="">
                        <tr>
                            <th></th><th>Thursday</th><th>Friday</th><th>Saturday</th><th>Sunday</th>
                        </tr>
                        <tr>
                            <td>General admission</td><td>$10</td><td>$15</td><td>$15</td><td>$15</td>
                        </tr>
                        <tr>
                            <td>Reserved seating (2nd row)</td>
                            <td>$20</td>
                            <td>$25</td>
                            <td>$25</td>
                            <td>$25</td>
                        </tr>
                        <tr>
                            <td>Reserved seating (1st/3rd) </td>
                            <td>$15</td>
                            <td>$20</td>
                            <td>$20</td>
                            <td>$20</td>
                        </tr>
                        <tr>
                            <td>Group General admission</td>
                            <td>$10</td>
                            <td>$12</td>
                            <td>$12</td>
                            <td>$12</td>
                        </tr>
                        <tr>
                            <td>Group Reserved seating</td>
                            <td>$15</td>
                            <td>$20</td>
                            <td>$20</td>
                            <td>$20</td>
                        </tr>
                    </table>
                </div>

                <div class="d-lg-none d-md-none d-xl-none">
                    <table class="">
                        <tr>
                            <th></th><th>Thurs</th><th>Fri</th><th>Sat</th><th>Sun</th>
                        </tr>
                        <tr>
                            <td>General admission</td><td>$10</td><td>$15</td><td>$15</td><td>$15</td>
                        </tr>
                        <tr>
                            <td>Reserved seating (2nd row)</td>
                            <td>$20</td>
                            <td>$25</td>
                            <td>$25</td>
                            <td>$25</td>
                        </tr>
                        <tr>
                            <td>Reserved seating (1st/3rd) </td>
                            <td>$15</td>
                            <td>$20</td>
                            <td>$20</td>
                            <td>$20</td>
                        </tr>
                        <tr>
                            <td>Group General admission</td>
                            <td>$10</td>
                            <td>$12</td>
                            <td>$12</td>
                            <td>$12</td>
                        </tr>
                        <tr>
                            <td>Group Reserved seating</td>
                            <td>$15</td>
                            <td>$20</td>
                            <td>$20</td>
                            <td>$20</td>
                        </tr>
                    </table>
                </div>
            </Col>
                <Col md={12} lg={6}>


                    <h3 class="center buffer-top">Musical Pricing</h3>
                    <div class="d-none d-md-block d-lg-block d-xl-block">
                        <table class="">
                            <tr >
                                <th></th><th>Thursday</th><th>Friday</th><th>Saturday</th><th>Sunday</th>
                            </tr>
                            <tr>
                                <td>Musical General admission</td><td>$20</td><td>$25</td><td>$25</td><td>$25</td>
                            </tr>
                            <tr>
                                <td>Musical 2 Ticket Deal </td>
                                <td>N/A</td>
                                <td>$45</td>
                                <td>$45</td>
                                <td>$45</td>
                            </tr>
                            <tr>
                                <td>Musical 1st - 3rd Row Reserved Seating</td>
                                <td>$25</td>
                                <td>$30 - $35</td>
                                <td>$30 - $35</td>
                                <td>$30 - $35</td>
                            </tr>
                        </table></div>
                    <div class="d-lg-none d-md-none d-xl-none">
                        <table class="">
                            <tr >
                                <th></th><th>Thurs</th><th>Fri</th><th>Sat</th><th>Sun</th>
                            </tr>
                            <tr>
                                <td>Musical General admission</td><td>$20</td><td>$25</td><td>$25</td><td>$25</td>
                            </tr>
                            <tr>
                                <td>Musical 2 Ticket Deal </td>
                                <td>N/A</td>
                                <td>$45</td>
                                <td>$45</td>
                                <td>$45</td>
                            </tr>
                            <tr>
                                <td>Musical 1st - 3rd Row Reserved Seating</td>
                                <td>$25</td>
                                <td>$30 - $35</td>
                                <td>$30 - $35</td>
                                <td>$30 - $35</td>
                            </tr>
                        </table></div>


                </Col>
        </Row>
            )
        }
        
export default Tickets