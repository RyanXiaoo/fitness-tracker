import { useState } from "react";

const Card = (props) => {
    const [inputValue, setInputValue] = useState("");

    return (
        <div className="card">
            <div className="title">{props.title}</div>
            <div className="exercise">{props.amount} lbs</div>
            <input
                type="number"
                className="change-amount"
                value={inputValue}
                onChange={(event) => setInputValue(event.target.value)}
            />
            <div className="submit-container">
                <button
                    className="submit"
                    onClick={() => {
                        props.setAmount(Number(inputValue));
                        setInputValue("");
                    }}
                >
                    {" "}
                    SUBMIT
                </button>
            </div>
        </div>
    );
};

export default Card;
