import React,{useState} from 'react';

function UseState() {

    const [count, setCount] = useState(0);
    console.log("Wat is Count?",count) // Hier logt hij de up to date state.
    
    function addOne() {
        // elke keer wanneer een setter wordt uitgevoerd word dit component gerenderd, onder de moterkap voer app() uit.
        setCount(count +1);

        // Hier heb je nog niet de waarde van de volgende state. (dus hij blijft nog 0 terwijl je al wel geklikt hebt).
        console.log("na het klikken", count)
    }

    function setToZero() {
        setCount(0) // na de tweede keer state op nul, wordt de echte dom niet geupdate.
    }

    return (
        <div className="App">
            <header className="App-header">

                <h1>useState</h1>
                <p>{count}</p>
                <button onClick={addOne}>+</button>
                <button onClick={setToZero}>0</button>
            </header>
        </div>

    )
}

export default UseState;