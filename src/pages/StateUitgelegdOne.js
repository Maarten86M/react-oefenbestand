import React from "react";
import "../App.css";

function StateUitlegdOne() {
    // useState geeft een array van 2 waardes terug. key van de state + functie om de waarde aan te passen.(setter functie)
    // wanneer er 2 waardes worden terugkomen moet je dit destructureren.
    // tussen de ( ) kan je een initiele waarde meegeven (beginwaarde bijvoorbeeld paars)
    const [color, setColor] = React.useState('paars');
    const [clicks, setClicks] = React.useState('0');

    return (
       <div>
           <h1>H3.2 State uitgelegd</h1>
           <p>react state, we kunnen de waarde , die boven is gemaakt in useState aanspreken in de h3.</p>
           <h3>Welke kleur is er aangeklikt: {color}</h3>
           <button
               type="button"
               className="purple"
               onClick={() => setColor('Paars')}
           >
               Paars
           </button>
           <button
               type="button"
               className="red"
               onClick={() => setColor('Rood')}
           >
               Rood
           </button>
           <button
               type="button"
               className="Pink"
               onClick={() => setColor('Roze')}
           >
               Roze
           </button>

           <h2>Hoevaak is er geklikt: {clicks}</h2>
           <button
               type="button"
               onClick={() => setClicks(+1)}
           >Klik hier om te tellen
           </button>
       </div>
    );
};
export default StateUitlegdOne;