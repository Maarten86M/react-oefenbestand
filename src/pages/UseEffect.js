import React,{useState, useEffect} from 'react';

function UseEffect() {

    const [count, setCount] = useState(0);
    console.log("Wat is Count?",count) // Hier logt hij de up to date state.

    //2 argumenten,
    //1e. callback -> wat wil je doen.
    //2e. dependency array[] -> wanneer wil je dit doen.

    useEffect(() => {
        console.log("Leeg dependency")
    },[]);


    useEffect(() => {
        console.log("Voer dit uit wanneer count veranderd.")
    },[count]);

    useEffect(() => {
        if (count > 10){
            setCount(0)
        }
    },[count]);

// voorbeeld met unmounting.
    useEffect(() => {
        console.log("leeg dependency array, mounting")
        return () => {
            console.log("Do Cleanup here, Do This on Unmount, dus bijvoorbeeld bij verlaten van de pagina.")
            // voorbeeld is hier een formulier opslaan wanneer het niet helemaal is ingevuld bij verlaten.
        };
    },[]);

    useEffect(() => {
        if (count > 10){
            setCount(0)
        }
        return () => {
            console.log("voer dit uit voor count veranderd!!!!")
        }// voor een nieuwe update voert hij eerst deze functie uit.
    },[count]);


    function addOne() {
        // elke keer wanneer een setter wordt uitgevoerd word dit component gerenderd, onder de moterkap voer app() uit.
        setCount(count +1);

        // Hier heb je nog niet de waarde van de volgende state. (dus hij blijft nog 0 terwijl je al wel geklikt hebt).
        // console.log("na het klikken", count)
    }

    function setToZero() {
        setCount(0) // na de tweede keer state op nul, wordt de echte dom niet geupdate.
    }

    return (
        <div className="App">
            <header className="App-header">

                <h1>useEffect</h1>
                <p>{count}</p>
                <button onClick={addOne}>+</button>
                <button onClick={setToZero}>0</button>
            </header>
        </div>

    )
}

export default UseEffect;