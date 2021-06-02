import React from "react";
import './NavBar.css';
import {
    NavLink,

} from "react-router-dom";

function NavBar(props) {

    function searchHandle() {
        props.history.push(`/routeuitleg/${props.searchText}`);
        console.log("Wat is er ingevoerd?", props.searchText);
    }

    return (
        <>
            <nav>
                <ul className="simpleStyling">
                    {props.authenticated && (
                        <li>
                            <button
                                onClick={() => props.setAuthenticated(false)}
                            >Logout
                            </button>
                        </li>
                    )}
                    <li>
                        <NavLink to="/">
                            Home
                        </NavLink>
                    </li>
                    {!props.authenticated && (
                        <li>
                            <NavLink to="/login">
                                Login
                            </NavLink>
                        </li>
                    )}
                    {props.authenticated && (
                        <>
                            <li>
                                <NavLink to="/stateuitlegone">
                                    State Uitgelegd 1
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/stateuitlegtwo">
                                    State Uitgelegd 2
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/reactformhooks">
                                    React Form Hooks
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/controlledcomponents">
                                    ControlledComponents
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/controlledcomponentsform">
                                    ControlledComponentsForm
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/reacthookformrein">
                                    ReactHookFormRein
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/routeuitleg">
                                    Route uitleg
                                </NavLink>
                                <input
                                    value={props.searchText}
                                    onChange={(event) => props.setSearchText(event.target.value)}
                                />
                                <button onClick={searchHandle}>🔍</button>
                            </li>
                        </>
                    )}
                </ul>
            </nav>
        </>
    )
}

export default NavBar;