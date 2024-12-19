import React from "react";
import "./CSS/App.css";
import "./CSS/navbar.css";
import "./CSS/home.css";
import { useState, useEffect } from "react";

const App = () => {
    return (
        <div className="background">
            <Home />
        </div>
    );
};

function Nav() {
    return (
        <div className="navbar">
            <div className="leftnav">
                <button className="icon">HOME</button>
            </div>
            <div className="rightnav">
                <button className="icon">LEGS</button>
                <button className="icon">CHEST</button>
                <button className="icon">BACK</button>
                <button className="icon">OTHER</button>
            </div>
        </div>
    );
}

function Home() {
    return (
        <div>
            <Nav />
            <div className="body1">
                <div className="home-text">TRACK YOUR PROGRESS HERE</div>
                <img
                    src="/images/buffguy.jpg"
                    alt="Buff Guy"
                    className="animation"
                />
            </div>
        </div>
    );
}

export default App;
