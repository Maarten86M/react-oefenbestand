import React, {useState} from "react";
import {
    Switch,
    Route,
    useHistory,
    Redirect
} from "react-router-dom";
import './App.css';
import ImageCard from "./ImageCard";
import PageHeader from "./PageHeader";
import TextContent from "./TextContent";
import StateUitlegdTwo from "./pages/StateUitgelegdTwo";
import StateUitlegdOne from "./pages/StateUitgelegdOne";
import ReactFormHooks from "./pages/ReactHookForm";
import ControlledComponents from "./pages/ControlledComponents";
import ReactHookFormRein from "./pages/ReactHookFormRein";
import ControlledComponentsForm from "./pages/ControlledComponentsForm";
import NavBar from "./components/NavBar";
import FourZeroFour from "./pages/404";
import RouteUitleg from "./pages/RouteUitleg";
import Home from "./pages/Home";
import Login from "./pages/Login";
import UseState from "./pages/UseState";
import UseEffect from "./pages/UseEffect";
import DataFetchen from "./pages/DataFetchen";

function App() {

    const history = useHistory();
    const [authenticated, setAuthenticated] = useState(false);

    // console.log("Wat is History?", history);
    const [searchText, setSearchText] = useState("");

    return (
        <div className="App">
            {/*<PageHeader pageTitle={"Image Gallery"}/>*/}
            {/*<PageHeader pageTitle="About"/>*/}
            {/*<PageHeader pageTitle="Contact"/>*/}
            {/*<TextContent>*/}
            {/*    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, perferendis?*/}
            {/*</TextContent>*/}
            {/*<ImageCard subject={"nature"}/>*/}
            {/*<ImageCard subject={"travel"}/>*/}

            <NavBar
                // we geven de useState mee als callback prop, zodat we ze kunnen gebruiken in RouteUitleg.js
                searchText={searchText}
                setSearchText={setSearchText}
                history={history}
                authenticated={authenticated}
                setAuthenticated={setAuthenticated}
            />
            <Switch>


                {/*Exact zeg dat hij bij precies een / in de url deze pagina laat zien.*/}
                <Route exact path="/">
                    <Home/>
                </Route>

                <Route path="/login">
                    <Login
                        authenticated={authenticated}
                        setAuthenticated={setAuthenticated}
                    />
                </Route>

                <Route path="/stateuitlegone">
                    {authenticated ? <StateUitlegdOne/> : <Redirect to="/login"/>}
                </Route>

                <Route path="/stateuitlegtwo">
                    {authenticated ? <StateUitlegdTwo/> : <Redirect to="/login"/>}
                </Route>

                <Route path="/reactformhooks">
                    {authenticated ? <ReactFormHooks/> : <Redirect to="/login"/>}
                </Route>

                <Route path="/controlledcomponents">
                    {authenticated ? <ControlledComponents/> : <Redirect to="/login"/>}
                </Route>

                <Route path="/controlledcomponentsform">
                    {authenticated ? <ControlledComponentsForm/> : <Redirect to="/login"/>}
                </Route>

                <Route path="/reacthookformrein">
                    {authenticated ? <ReactHookFormRein/> : <Redirect to="/login"/>}
                </Route>

                {/*<Route exact path="/routeuitleg/:imageName">*/}
                {/*    <RouteUitleg/>*/}
                {/*</Route>*/}

                <Route path="/usestate">
                    <UseState />
                </Route>

                <Route path="/useeffect">
                    <UseEffect />
                </Route>

                <Route path="/datafetchen">
                    <DataFetchen/>
                </Route>

                {/*wanneer er nu iets ingevoerd wordt wat niet klopt pakt hij automatisch de 404 pagina*/}
                <Route path="/">
                    <FourZeroFour/>
                </Route>
            </Switch>

        </div>
    );
}

export default App;
