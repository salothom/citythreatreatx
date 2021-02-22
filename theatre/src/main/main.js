

import React from 'react';
import '../App.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

import Aboutus from './aboutus';
import Contactus from './contactus';

const Main = () => {

    const navStyle = {
        // col or: props.palette[0],
    }

    return (
        <Router>
        <div>
          <Route path="/" component={Aboutus} />
          <Route path="/about" component={Aboutus} />
          <Route path="/contact" component={Contactus} />
        </div>
      </Router>

    )
}

export default Main