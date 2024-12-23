import Card from "./card";
import AddCard from "./addcard";
import { useState } from "react";

const Page = (props) => {
    return (
        <div className="container1">
            <AddCard addcard={props.addCard} pageIndex={props.pageIndex} />
            <div className="container2">
                {props.cardsinfo.map((card, cardIndex) => (
                    <Card
                        key={cardIndex}
                        title={card.title}
                        amount={card.amount}
                        setAmount={(newAmount) =>
                            props.changeAmount(
                                props.pageIndex,
                                cardIndex,
                                newAmount
                            )
                        }
                    />
                ))}
            </div>
        </div>
    );
};

export default Page;
