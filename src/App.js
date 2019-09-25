import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { Header } from './components/Layouts/Header';
import { Footer } from './components/Layouts/Footer';
import { Home } from './components/Home/Home';
import { AboutUs } from './components/AboutUs/AboutUs';
import { ContactUs } from './components/ContactUs/ContactUs';
import { NotFound } from './components/Layouts/NotFound';

function App() {
  return (
    <div className="App container">
      <Router>
        <Header/>
        <Switch>
            <Route exact path='/' component={ Home } />
            <Route exact path='/home' component={ Home } />
            <Route exact path='/about-us' component={ AboutUs } />
            <Route exact path='/contact-us' component={ ContactUs } />
            <Route exact path='*' component={ NotFound } />
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
