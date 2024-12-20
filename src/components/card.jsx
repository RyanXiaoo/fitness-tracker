const Card = (props) => {
    return (
        <div className="card">
            <div className="title">{props.title}</div>
            <div className="exercise">{props.amount}</div>
            <input
                type="number"
                onChange={(event) => {
                    props.setAmount(Number(event.target.value));
                }}
            />
        </div>
    );
};

export default Card;
