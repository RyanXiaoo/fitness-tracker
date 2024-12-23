import React, { useState } from "react";
import "./CSS/App.css";
import "./CSS/navbar.css";
import "./CSS/home.css";
import "./CSS/card.css";
import "./CSS/newPage.css";
import "./CSS/page.css";
import "./CSS/addcard.css";
import Legs from "./components/leg";
import Chest from "./components/chest";
import NewPage from "./components/newPage";
import Page from "./components/page";
import AddCard from "./components/addcard";
import { Link, Router, Routes, Route, BrowserRouter } from "react-router-dom";

const App = () => {
    var [pages, setPages] = useState([
        {
            title: "Legs",
            link: "/legs",
            cards: [
                { title: "extensions", amount: 10000 },
                { title: "extensions", amount: 10000 },
                { title: "extensions", amount: 10000 },
            ],
        },
        {
            title: "Legs",
            link: "/legs",
            cards: [
                { title: "extensions", amount: 10000 },
                { title: "extensions", amount: 10000 },
                { title: "extensions", amount: 10000 },
            ],
        },
        {
            title: "Legs",
            link: "/legs",
            cards: [
                { title: "extensions", amount: 10000 },
                { title: "extensions", amount: 10000 },
                { title: "extensions", amount: 10000 },
            ],
        },
    ]);

    function changeAmount(pageIndex, cardIndex, newAmount) {
        setPages((prevPages) => {
            // Create a deep copy of the pages array
            const updatedPages = [...prevPages];
            // Update the specific card's amount
            updatedPages[pageIndex].cards[cardIndex].amount = newAmount;
            return updatedPages;
        });
    }

    function addCard(pageIndex, title, amount) {
        setPages((prevPages) => {
            const copyPages = prevPages.map((page, index) => {
                if (index === pageIndex) {
                    return {
                        ...page,
                        cards: [...page.cards, { title, amount }],
                    };
                }
                return page;
            });
            return copyPages;
        });
    }

    function makePage(pageTitle, exerciseTitle, exerciseAmount) {
        setPages((prevPages) => {
            const newPage = {
                title: pageTitle,
                link: "/" + pageTitle,
                cards: [{ title: exerciseTitle, amount: exerciseAmount }],
            };
            let copyPages = [...prevPages];
            copyPages.push(newPage);
            return copyPages;
        });
    }

    return (
        <div className="background">
            <BrowserRouter>
                <Nav pages={pages} layout="not" />
                <Routes>
                    <Route index element={<Home />} />
                    {pages.map((page, pageIndex) => (
                        <Route
                            key={pageIndex}
                            path={page.link}
                            element={
                                <Page
                                    cardsinfo={page.cards}
                                    pageIndex={pageIndex}
                                    changeAmount={changeAmount}
                                    addCard={addCard}
                                />
                            }
                        />
                    ))}
                    <Route
                        path="/new_page"
                        element={<NewPage makePage={makePage} />}
                    ></Route>
                </Routes>
                <Nav pages={pages} layout="fixed" />
            </BrowserRouter>
        </div>
    );
};

function Nav(props) {
    return (
        <div className={props.layout === "not" ? "navbar1" : "navbar"}>
            <div className="leftnav">
                <Link to="/" className="icon">
                    HOME
                </Link>
            </div>
            <div className="rightnav">
                {props.pages.map((page, index) => (
                    <Link key={index} to={page.link} className="icon">
                        {page.title}
                    </Link>
                ))}
                <Link to="/new_page" className="icon">
                    NEW PAGE
                </Link>
            </div>
        </div>
    );
}

function Home() {
    return (
        <div>
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
