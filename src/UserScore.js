function UserScore(props) {

    function changeScore(number) {
        props.setScore(props.score + number)
    }

    // function Increment() {
    //     if (props.name === "Maarten") {
    //         props.setScore(props.score + 5)
    //     } else {
    //         props.setScore(props.score + 1);
    //     }
    // }

    return (
        <div>
            {props.avatar} - {props.name}: {props.score}
            <button onClick={() => changeScore(+1)}>+
            </button>
            <button onClick={() => changeScore(-1)}>-</button>
            <button onClick={() => props.seteditMode(true)}>🖊</button>
            {props.score >= 10 && <p>Je bent de winnaar!</p>}
        </div>
    )
}

export default UserScore;