import React from "react";
import '../App.css'
import User from "../User";
import ClassVsFunctionComponents from "../ClassVSFunctionComponents";

function ControlledComponents() {
    return (
        <div className="App">
            <header className="App-header">
                <ClassVsFunctionComponents matchNumer={3} />
                <User/>
                <User/>
                <User/>
                <User/>
            </header>
        </div>
    )
}

export default ControlledComponents;