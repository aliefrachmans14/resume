import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import Do from "./components/Do";
import Cards from "./components/Cards";
import Timelines from "./components/Timelines";
import Portfolios from "./components/Portfolios";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WaveDown from "./components/WaveDown";
import WaveUp from "./components/WaveUp";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Home from './components/pages/Home';
// import Services from "./components/pages/Services";
// import Products from "./components/pages/Products";
// import SignUp from "./components/pages/SignUp";

function App() {
    return (
        <div className="App">
            <>
                <Router>
                    <Navbar />
                    <Header /><WaveDown />
                    <Do />
                    <WaveUp /><Cards /><WaveDown />
                    <Timelines />
                    <WaveUp /><Portfolios />
                    <Contact />
                    <Footer />
                    {/* <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/services" component={Services} />
            <Route path="/products" component={Products} />
            <Route path="/sign-up" component={SignUp} />
          </Switch> */}
                </Router>
            </>
        </div>
    );
}

export default App;
