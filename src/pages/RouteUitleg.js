import React from 'react';
import {useParams} from "react-router-dom";

// UITLEG OVER DYNAMISCHE ROUTE, DUS DOORMIDDEL VAN INVOER IN BIJV EEN INPUT
//useParams

// in Navbar hebben we een functie geschreven die laat zien wat we hebben ingevoerd in de input.


function RouteUitleg() {
    const params = useParams();
    console.log("Welke params heeft RouteUitleg", params);
    return (
        <div>
            <h3>{params.imageName}</h3>
            <img src={`https://source.unsplash.com/1600x900/?${params.imageName}`}
                 alt={params.imageName}/>
        </div>
    )
};

export default RouteUitleg;