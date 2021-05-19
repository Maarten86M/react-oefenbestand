import './App.css';
import ImageCard from "./ImageCard";
import PageHeader from "./PageHeader";
import TextContent from "./TextContent";

// hoe maak je van iets een component
// 1. begin de HTML gewoon uit te schrijven. (Maak eerst wat je wil).
// 2. Als je tevreden bent met de pagina kun je een component refactoren, opschonen.
//  - [x] kopier een component met alle data erin.
//  - [x] Zet het in een ander JavaScript bestand.
//  - [x] Maak een component functie.
//  - [x] Die component functie returned JSX.
//  - [x] Optioneel: voeg een div toe als je component uit meerdere tags bestaat.
//  - [x] Exporteer je component functie. -> export default imageCard
//  - [x] importeer je component functie in APP (of andere pagina waar je hem wil gebruiken).
//  - [x]- import imageCard from "./ImageCard";
//  - [x] gebruik je component functie met JSX Syntax.
//  3. is je component af, maar "gehardcoded", alles heeft dezelfde waarde.
//  gebruik props om ht component dynamisch te maken.
//  - [x] voeg een atribuut toe in de JSX. (Je mag zelf een naam kiezen).
//  - [x] Geef het atributt een waarde.
//  - [x] in de component functie gebruik maken van de props , die is doorgegeven.
//      - [x] props toevoegen als parameter van de component functie.
//      - [x] De juiste prop eruit halen en gebruiken in je component.(subject bijv).
//  - [x] interpoleren in JSX


function App() {
    return (
        <div className="App">
            <PageHeader pageTitle={"Image Gallery"}/>
            <PageHeader pageTitle="About"/>
            <PageHeader pageTitle="Contact"/>

            <TextContent>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, perferendis?
            </TextContent>

            <TextContent>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, perferendis?
            </TextContent>

            <ImageCard subject={"nature"}/>
            <ImageCard subject={"travel"}/>
            <ImageCard subject={"cheese"}/>
            <ImageCard subject={"cars"}/>
        </div>
    );
}

export default App;
