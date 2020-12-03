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
                </Router>
            </>
        </div>
    );
}

export default App;
