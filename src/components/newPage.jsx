import { useState } from "react";

const NewPage = (props) => {
    let [pageTitle, setPageTitle] = useState("");
    let [exerciseTitle, setExerciseTitle] = useState("");
    let [exerciseAmount, setExerciseAmount] = useState(0);

    return (
        <div className="centerForm">
            <form
                onSubmit={(event) => {
                    event.preventDefault();
                    props.makePage(
                        pageTitle,
                        exerciseTitle.toUpperCase(),
                        exerciseAmount.toUpperCase()
                    );
                }}
                className="form"
            >
                <label className="label_form" for="title">
                    What is the title of your new page?
                </label>
                <input
                    className="inputBox"
                    type="text"
                    id="title"
                    name="title"
                    onChange={(event) => {
                        setPageTitle(event.target.value);
                    }}
                />
                <label className="label_form" for="exercise1">
                    What exercise would you like to store
                </label>
                <input
                    className="inputBox"
                    type="text"
                    id="ex1"
                    name="exercise"
                    onChange={(event) => {
                        setExerciseTitle(event.target.value);
                    }}
                />
                <label className="label_form" for="amount1">
                    How much weight is lifted?
                </label>
                <input
                    className="inputBox"
                    type="number"
                    id="amount1"
                    name="amount1"
                    onChange={(event) => setExerciseAmount(event.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default NewPage;
