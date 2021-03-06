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
        - JSX syntax word vertaald naar React.createElement()

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
        - Props gebruiken (zie onderstaand, hoe maak je iets van components)
            - 1. pass props (doorgeven) --><ImageCard subject={"nature"}/>
            - 2. Consume Props (invullen) --> function ImageCard(props){ // interpolate here!
            - Props Children
                - <TextContent> (of andere naam) zie TextContent.js
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, perferendis?
                  </TextContent>
                - <p> {props.children} </p>
            - Callback prop
                - props die een functie is die de state van een parrent kan veranderen. 
        -   Verkorte manieren van opschrijven
            - props destructuring (zie voorbeeld hieronder)

        - Conditioneel renderen:
            - {score === 10 && <p> Nice won<p/>}
            - {score === 10 ? <p> Uitkomst 1</p> : <p> uitkomst 2 </p>}

    Voorbeeld van props destructuring: alleen toepassen als je zeker weet dat het goed is. 
```javascript
function PageHeader ({pageTitle} ){
    return <h1>{pageTitle}</h1>;
}

export default PageHeader;
```

    - State 
        - Dynamische waarde bijhouden in een component. 
        - useState importeren.
        - const [score, setScore] = useState(0);
        - score = getter (huidige waarde van de state)
        - setScore = setter (functie)
        - beginwaarde (0)
        - gebruiken = () => setScore(score +1)

    - event listeners / handlers 
        - <botton onClick{ () => setScore(score+1) } />

    - Function components / class components 

### Herbruikbaar component maken.
    - .js bestand.
    - import / export
    - component functie maken.
    - callback props.
    - waar je je component geef "props" door:(zie voorbeeld hieronder)

```javascript
import Product from './Product'
            <Product tittle={"cheese"} />
            <Product tittle={"Wine"} />   
```

```javascript
export default function Product (props) {
                    return <h1> {props.tittle} </h1>
                        }
```

### Forms 
    - Waar voldoet een goed werkend formulier aan?
        - inputvelden
            - label (wat moet er worden ingevuld
            - placeholder 
        - verstuurbutton
        - form validatie
            - wat vult de gebruikker in
            - voldoet dit aan de eisen
            - constraints
                - max
                - min
                - required
                - pattern
        - Feedback
            - validatie (foutmeldingen)
            - succes
                - aanvraag ontvangen
            - in behandeling
                - spinner
                - knopje grijs (disabled)
        - Bonus : in te vullen met alleen keyboard 
            - efficiency 
            - mensen met een visuele beperking. 

    - Controlled Components
        -input value={name} onChange={() => setName(event.target.value)/>
        - 
    - useForm (react hook forms)

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


### Router

    Waarom React Router?
    - Links (die deelbaar zijn)
    - Back knop
    - Redirecten

    Setup:
    - npm install react-router-dom
    - <Router> om je hele app heen zetten (buitenste component). 
    - <Switch> 
            - 1 pagina tegelijk te zien. 
            - pas op de volgorde maakt uit!
            - lukt het niet met volgorde (exact toevoegen).
    - <Route path="/about"> bepaald welk component moet worden weergegeven op welk "pad" /about -> <about/>
    - <Link to="/bla"> click hier </Link> veranderd het pad in de adresbalk


    Static Routing:
    - Meerde pagina's in je app
    - Hoe voeg je een pagina toe: 
        -1. Js File met een component & Export
        -2. Importeer in App.js
        -3. zet een Route om je component heen. 
        -4. Zet link in de navigatiebalk, zodat we de pagina kunnen gebruiken.

    Dynamic Routing:
    - Routes waarbij een deel van het pad variabel of dynamisch is. 
    - voorbeeld github.com/mjackson
    - github.com/:username
        <Route path="/user/:username/">
        <Profile />
        </Route>
    - const params = useParams();
    - params.username

    Private Routing 
    - Appart in state bijhouden is iemand ingelogd
    - links kan je wel of niet laten zien met een conditional render
        tweede voorbeelden hieronder:

```javascript
{!props.authenticated && (
                        <li>
                            <NavLink to="/login">
                                Login
                            </NavLink>
                        </li>
                    )}
```
    
```javascript
{props.authenticated && (
                        <li>
                            <button
                                onClick={() => props.setAuthenticated(false)}
                            >Logout
                            </button>
                        </li>
                    )}
```
    Maar ook: Ternary:

```javascript
{authenticated ? <StateUitlegdOne/> : <Redirect to="/login"/>}
```

    vervolg:
    - <Redirect to /> gebruik een redirect om mensen naar de juiste pagina weg te sturen als ze bijv niet zijn ingelogd.


    Redirects: 
    - history / useHistory -> history.push("/url waar je iemand heen wil sturen./"

    History Rein voor extra verduidelijking: 
    - https://github.githistory.xyz/Reinoptland/routing-topics/blob/main/src/App.js
    - https://github.com/Reinoptland/routing-topics


### Component Life Cycle
    - Mounting
        - useEffect(() => {}, []), alleen on mount uitgevoerd. 
        - useState(initialState instellen).
    - Update(updation) 
        - setCount(4) (setter aanroepen)->update Cycle. 
        - useEffect (() => {} . [count]), haak in op veranderingen van de count variabele.
    - Unmounting
        - useEffect(() -> { return () =>{ //cleanup }},[])
    - Hoe werkt het onder de moterkap. 
        - virtial dom ->DOM -> wat je ziet in de browser. 
        - React update de pagina automatisch (Component Life Cycle)
    - WAT MAG WEL WAT MAG NIET
        - State bijhouden in een gewone variabele. 
        - getElementbyId('user').innertext="Rein"
            - react update de dom automatisch 
            - dont fight react!

### Data Fetchen. 
    - Hoe maak je een request in een component. 
    - Hoe zet je een array met objecten om in JXS? 
    - Zoekveld.
    - wat heb je nodig: 
        - Async / await
        - try & Catch
        - axios
        - api url 

### Fetching to do list
    1. install dependencies, axios

    Fetching: 
    2. Import useEffect 
    3. Set a useEffect to trigger onMount. 
    4. Write an async function to fetch data. 
    5. Call it in your useEffect.
    6. Check the data (console log)

    Trigger a rerender.
    7. Make a state to store the data.
    8. when you get a respone in useEffect, setState (store the data). 
    
    Present the data in the new update cycle.
    "[{},{},{}} => [<h1>tekst</h1>,<h1>tekst2</h1>,<h1>tekst3</h1>"
    9. Conditional schrijven, wat if we don't have data. 
    10. Movies.map -> data laten zien. 