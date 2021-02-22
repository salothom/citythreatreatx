

import React from 'react';
import './footer.css'

const Footer = () => {

  const navStyle = {
    // color: props.palette[0],
  }

  return (
    <div>
      <div class="footer">
        <div class=" footerleft">
          <h3>Get Involved</h3>
          <a>Auditions</a>
          <a>Support Us</a>
          <a>Mailing List</a>
          <a>Classes</a>

        </div>
        <div class=" footerleft">
          <h3>What's Showing</h3>
          <a>About City Theatre</a>
          <a>Show Season</a>
          <a>Past Seasons</a>

        </div>
        <div class=" footerleft">
          <h3>Come See a Show</h3>
          <a>Tickets</a>
          <a>Season Tickets</a>
          <a>Booking</a>

          <a>Home</a>
          <a>Contact Us</a>

        </div>
      </div>
    </div>

  )
}

export default Footer