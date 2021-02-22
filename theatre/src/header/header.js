

import React from 'react';
import './header.css'

const Header = () => {

    const navStyle = {
        // color: props.palette[0],
    }

    return (
        <div class="desktop-nav">
            <div class="top-nav">
                <div class="logo">City Theatre Austin</div>
                <div class="navitems">
                    <a class="navbutton">About Us</a>
                    <a class="navbutton">Upcoming Shows</a>
                    <a class="navbutton">Classes</a>
                    <a class="navbutton">Auditions</a>
                    <a class="navbutton">Support Us</a>

                </div>
            </div>
        </div>

    )
}

export default Header