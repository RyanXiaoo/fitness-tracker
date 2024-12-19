import React from "react";
import "./CSS/App.css";
import "./CSS/navbar.css";
import "./CSS/home.css";
import "./CSS/card.css";
import { useState, useEffect } from "react";

const App = () => {
    const [page, setPage] = useState("home");

    const renderPage = () => {
        if (page === "home") {
            return <Home setPage={setPage} />;
        } else if (page === "legs") {
            return <Legs setPage={setPage} />;
        }
    };

    return <div className="background">{renderPage()}</div>;
};

function Nav({ setPage }) {
    return (
        <div className="navbar">
            <div className="leftnav">
                <button className="icon" onClick={() => setPage("home")}>
                    HOME
                </button>
            </div>
            <div className="rightnav">
                <button onClick={() => setPage("legs")} className="icon">
                    LEGS
                </button>
                <button className="icon">CHEST</button>
                <button className="icon">BACK</button>
                <button className="icon">OTHER</button>
            </div>
        </div>
    );
}

function Home({ setPage }) {
    return (
        <div>
            <Nav setPage={setPage} />
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

function Legs({ setPage }) {
    return (
        <div>
            <Nav setPage={setPage} />
            <div className="container1">
                <div className="leg1">
                    <img src="/images/leg1.png" alt="" />
                </div>
                <div className="container2">
                    <div className="card"></div>
                </div>
                <div className="leg2">
                    <img src="/images/leg2.png" alt="" />
                </div>
            </div>
        </div>
    );
}

export default App;
