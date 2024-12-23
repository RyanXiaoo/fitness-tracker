import { useState } from "react";
import Card from "./card";

const AddCard = (props) => {
    var [cardTitle, setCardTitle] = useState("");
    var [cardAmount, setCardAmount] = useState(0);

    console.log(typeof props.addcard);

    return (
        <form
            className="addcard"
            onSubmit={(event) => {
                event.preventDefault();
                props.addcard(props.pageIndex, cardTitle, cardAmount);
            }}
        >
            <label htmlFor="title">Exercise Name</label>
            <input
                type="text"
                id="title"
                name="title"
                value={cardTitle}
                onChange={(event) => setCardTitle(event.target.value)}
            />
            <label htmlFor="amount">Enter amount lifted</label>
            <input
                type="number"
                id="amount"
                name="amount"
                value={cardAmount}
                onChange={(event) => setCardAmount(event.target.value)}
            />
            <button type="submit">Submit</button>
        </form>
    );
};

export default AddCard;
