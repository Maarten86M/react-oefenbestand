# React uitleg

### Wat is React?
    - Client side Rending Library.
    - JavaScript Library. 

### Waar gebruik je het voor? 
    - Dynamische websites / webapplicaties. 
    - Single Page Applicaties 
        - 1 HTML file -> daara doet JS de rest. 
        - Je houdt controle over wat de gebruiker ziet. 
    - Opdelen van je website in herbruikbare componenten. 
        - voordeel: Efficiëntie
        - voordeel: consistentie (sites ademen de zelfde style)

### Hoe werkt het? 
    - 1 HTML bestand
    - 1 JavaScript "bundle"
        - alle javascript bestanden
        - gebundeld
    - Maak je eigen custom HTML Componenten (<SearchBar/>)
    - Maak eigen custom HTMl attributen: noem je properties a.k.a. props

### Create react app
    opzetten: 
    1. npx create-react-app naam-van-je-project. 
    2. alle instellingen worden automatisch gedaan / aangemaakt. 
    3. npm start --> runnen van je app. 
        wat gebeurd er onder de moterkap: 
        - start een dev server
        - bundles scripts
        - transplies de JavaScript (Babel)
        - JSX syntax word vertaald naar React.createElement

    Wat zit er in: 
    - package.json / package.lock 
        - houd de dependencies bij. 
    - gitignore
        - zorgt er voor at je geen onnodige files commit. 
        - bijv node modules. 
    - Readme.md 
        - documentatie
    - public: 
        - index.html (single page) 
            - icoontje -> favicon.ico
            - root -> <div id="root"><div> -> hier komt de react app in.
            - Je hele react app wordt als ware automatisch toegevoegd aan deze html pagina. 
            - <noscript>You need to enable JavaScript to run this app.</noscript>
                - geeft een melding wanneer je JavaScript niet aanstaat in de browser.
            - config bestandjes 
    - src (source, broncode van je React app)
        - Css
        - Testbestand App.test.js
        - index.js (hier begint je APP)
            - importeert de library -> import React from 'react';
            - importeert de DOM -> import ReactDOM from 'react-dom';
            - importeert de css -> import './index.css';
            - importeert de App component -> import App from './App';
            - importeert de reportWebVitals, performance website -> import reportWebVitals from './reportWebVitals';
            - ReactDOM.render (zie onderstaand)

```javascript
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
```
    Bovenstaand wordt de reactDom render aangeroepen. Dit start je React app.
    en daarin zit je react app. De React app komt dan op --> document.getElementById('root').
    Dus dit wil zeggen dat de app komt in de 'root' van de index.html (public).
    !! Dit staat standaard ingesteld, hier hoef je weinig mee te doen!! 

    (vervolg src map)
        - App.js 
            - importeert logo -> import logo from './logo.svg';
            - importeert css -> import './App.css';
            - function APP ( )  (zie onderstaand script)
```javascript
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
```
                - begin scherm van de applicatie: 
                - Het is JavaScript, maar sommige lijken html Syntax

### Syntax 

    - JSX (zie JSX Syntax bestand)
        - lijkt op HTML
        - sluittag verplicht />
        - className i.p.v. class
        - interpolation : ergens in plakken
            - {userName} curly brases
            - welke waarde mag je ergens in plakken { interpolation } :
                - Moet een expression zijn(een waarde of iets wat een nieuwe waarde oplevert)
                - number -> 42 + 22 
                - string -> "hello" + " world"
                - boolean -> mag, wordt niet weergegeven. -> je kan een ternary gebruiken voor een iets conditioneels
                        <h1>hallo{magDit ? " JSX is Noice" : " JSX is not Noice"}</h1>
                - undefined -> mag, wordt niet weergegeven.
                - null -> mag, wordt niet weergegeven.
                - array
                - object.name (maar geen heel object).
            - Wat mag je niet interpoleren (inplakken). 
                - if Statement.
                - object (heel object) (are not valid as a React child)
        - JSX schrijven in JSX (nested)
            - bijv: 
                <div>
                <h2>test tekst</h2>
                </div>
                
### Hoe maak je van iets een component. 
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