import React from "react";
import './App.css';
import ImageCard from "./ImageCard";
import PageHeader from "./PageHeader";
import TextContent from "./TextContent";
import StateUitlegdTwo from "./StateUitgelegdTwo";
import StateUitlegdOne from "./StateUitgelegdOne";

function App() {

    return (
        <div className="App">
            <PageHeader pageTitle={"Image Gallery"}/>
            <PageHeader pageTitle="About"/>
            <PageHeader pageTitle="Contact"/>

            <TextContent>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, perferendis?
            </TextContent>


            <ImageCard subject={"nature"}/>
            <ImageCard subject={"travel"}/>

            <StateUitlegdOne/>
            <StateUitlegdTwo/>

        </div>
    );
}

export default App;
