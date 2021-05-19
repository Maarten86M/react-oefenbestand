import './App.css';

// hoe maak je van iets een component
// 1. begin de HTML gewoon uit te schrijven. (Maak eerst wat je wil).
// 2. Als je tevreden bent met de pagina kun je een component refactoren, opschonen.
//  - [ ] kopier een component met alle data erin.
//  - [ ] Zet het in een ander JavaScript bestand.
//  - [ ] Maak een component functie.
//  - [ ] Die component functie returnd JSX.
//  - [ ] importeer je component functie in APP (of andere pagina waar je hem wil gebruiken).
//  - [ ] gebruik je component functie met JSX Syntax.

function App() {
    return (
        <div className="App">
            <h2>Nature</h2>
            <img src="https://source.unsplash.com/1600x900/?nature,water" />

            <h2>Cheese</h2>
            <img src="https://source.unsplash.com/1600x900/?cheese" />

            <h2>Cars</h2>
            <img src="https://source.unsplash.com/1600x900/?cars" />

            <h2>Animals</h2>
            <img src="https://source.unsplash.com/1600x900/?animals" />
        </div>
    );
}

export default App;
