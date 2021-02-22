import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';

import reportWebVitals from './reportWebVitals';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

import Header from './header/header';
import Footer from './footer/footer';
import Aboutus from './main/aboutus';
import Contactus from './main/contactus';
import Tickets from './main/tickets';



const routing = (
  <div>
    <Header />
    <Router>
      <div>
        <Route path="/" component={App} />
        <Route path="/about" component={Aboutus} />
        <Route path="/contact" component={Contactus} />
        <Route path="/tickets" component={Tickets} />
      </div>
    </Router>
    <Footer />
  </div>

)



ReactDOM.render(
  routing
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
