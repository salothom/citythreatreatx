

import React from 'react';
import './main.css'

class Tickets extends React.Component {

    // const navStyle = {
    //     // col or: props.palette[0],
    // },

    render() {

        return (
            <div>
                <Pricing />
                <Seasonpass />
                <Info />

            </div>

        )

    }
}

const Seasonpass = () => {
    return (
        <div>
            <h3>Season Tickets</h3>
            <h4>General Passes</h4>
            <p>$300/Two General Seats</p>
            <h4>Reserved Pass</h4>
            <p>$450/Two Center Seats
        or your Choice of Seats.</p>
            <h4>Producer or
            Holiday Pass</h4>
            <p>$160/12 Anytime Seats</p>
        </div>
    )


}



const Info = () => {
    return (
        <div>
            <div>
                <h3>Performances Times</h3>
                <p>Thursday - Saturday 8: 00 p.m. and Sunday 3: 00 p.m.
Check show listing dates and times on our Now Playing page.</p>
                <p>
                    Box office opens one hour prior show time.
                    Seating begins twenty minutes before curtain.
</p> <p>Group discounts(10 +) available for all shows.</p>
            </div>
            <div>
                <h3>The City Theatre Seating Policy</h3>
                <ul>
                    <li>We ask that you do not save seats for other patrons.</li>
                    <li>No late seating. </li>
                    <li>All General and Guaranteed Reserved Seats not
    purchased or claimed five minutes before curtain will be released.</li>
                </ul>
            </div>
            <div>
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
        <div>
            <h3>Regular Pricing</h3>
            <table>
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

            <h3>Musical Pricing</h3>
            <table>
                <tr>
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
            </table>

        </div>
    )
}

export default Tickets