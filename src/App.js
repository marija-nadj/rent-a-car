import React from 'react';
import logo from './logo.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
import { Switch, Route } from 'react-router-dom';
import Contacts from './components/pages/Contacts';
import Home from './components/pages/Home';
import Terms from "./components/pages/Terms";
import Details from "./components/pages/Details";
import PageNotFound from './components/pages/PageNotFound';

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/terms" component={Terms}/>
        <Route path="/contacts" component={Contacts}/>
        <Route path="/details" component={Details}/>
        <Route component={PageNotFound}/>
        </Switch>
      <Footer />
    </div>
  );
}

export default App;
