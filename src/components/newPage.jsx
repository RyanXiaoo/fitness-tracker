import { useState } from "react";

const make_new_page = (event) => {};

const NewPage = (props) => {
    var [page, setPage] = useState();
    var [card, setCard] = useState();

    return (
        <div className="centerForm">
            <form onSubmit={make_new_page} className="form">
                <label className="label_form" for="title">
                    What is the title of your new page?
                </label>
                <input
                    className="inputBox"
                    type="text"
                    id="title"
                    name="title"
                />
                <label className="label_form" for="exercise1">
                    What exercise would you like to store
                </label>
                <input
                    className="inputBox"
                    type="text"
                    id="ex1"
                    name="exercise"
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default NewPage;
