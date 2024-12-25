import { useState } from "react";

const AddCard = (props) => {
    const [cardTitle, setCardTitle] = useState("");
    const [cardAmount, setCardAmount] = useState(0);

    console.log(typeof props.addcard);

    const handleSubmit = (event) => {
        event.preventDefault();
        props.addcard(
            props.pageIndex,
            cardTitle.toUpperCase(),
            Number(cardAmount) // Ensure it's a number
        );
        // Optionally, reset the form fields after submission
        setCardTitle("");
        setCardAmount(0);
    };

    return (
        <div className="addcard">
            <form onSubmit={handleSubmit}>
                <div className="flip-card-inner">
                    <div className="flip-front-card">
                        <h2 className="addCardMainTitle">ADD</h2>
                        <h2 className="addCardMainTitle">A</h2>
                        <h2 className="addCardMainTitle">NEW</h2>
                        <h2 className="addCardMainTitle">EXERCISE</h2>
                    </div>

                    <div className="flip-back-card">
                        <label className="addCardTitle" htmlFor="title">
                            Enter exercise name:
                        </label>
                        <input
                            className="inputField"
                            type="text"
                            id="title"
                            name="title"
                            value={cardTitle}
                            onChange={(event) =>
                                setCardTitle(event.target.value)
                            }
                            required
                        />
                        <label className="addCardTitle" htmlFor="amount">
                            Enter amount lifted
                        </label>
                        <input
                            className="inputField"
                            type="number"
                            id="amount"
                            name="amount"
                            value={cardAmount}
                            onChange={(event) =>
                                setCardAmount(+event.target.value)
                            } // Convert to number
                            required
                            min="0"
                        />

                        {/* Corrected className */}
                        <button className="submitNew" type="submit">
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddCard;
