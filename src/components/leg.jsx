import { useState } from "react";
import { Card } from "./card.jsx";

function calculateLegSize(squat, extension, deadlift) {
    return Math.min(squat + extension + deadlift, 2500);
}

function Legs({ setPage }) {
    const [squatAmount, setSquatAmount] = useState(0);
    const [extensionsAmount, setExtensionAmount] = useState(0);
    const [deadliftAmount, setDeadliftAmount] = useState(0);

    return (
        <div className="container1">
            <div className="leg">
                <img
                    src="/images/leg1.png"
                    className="leg-image"
                    alt=""
                    style={{
                        height: calculateLegSize(
                            squatAmount,
                            extensionsAmount,
                            deadliftAmount
                        ),
                    }}
                />
            </div>
            <div className="container2">
                <Card
                    title="Squats"
                    amount={squatAmount}
                    setAmount={setSquatAmount}
                />
                <div className="card">
                    <div className="title">Extensions</div>
                    <div className="exercise">{extensionsAmount}</div>
                    <input
                        type="number"
                        onChange={(event) => {
                            setExtensionAmount(Number(event.target.value));
                        }}
                    />
                </div>
                <div className="card">
                    <div className="title">Squats</div>
                    <div className="squat">0</div>
                    <input
                        type="number"
                        onChange={(event) => {
                            setSquatAmount(Number(event.target.value));
                        }}
                    />
                </div>
            </div>
            <div className="leg">
                <img
                    src="/images/leg2.png"
                    className="leg-image"
                    alt=""
                    style={{
                        left: 0,
                        height: calculateLegSize(
                            squatAmount,
                            extensionsAmount,
                            deadliftAmount
                        ),
                    }}
                />
            </div>
        </div>
    );
}

export default Legs;
