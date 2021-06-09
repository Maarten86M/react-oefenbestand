import React, {useEffect, useState} from "react";
import axios from "axios";

function DataFetchen() {

    const [universities, setUniversities] = useState(null);
    const [search, setSearch] = useState('');

    console.log(search, "zoekresultaat.")

    console.log("Wat is de state Universities", universities)

    useEffect(() => {
        console.log('On Mount')

        async function fetchUniversities() {
            const response = await axios.get(`http://universities.hipolabs.com/search?country=${search}`
            );
            console.log(response.data)
            setUniversities(response.data)
        }

        fetchUniversities()
    }, [search]);


    // normaal zet je in de return ook een key zoals hieronder, maar net deze api kan dat niet.
    // <div>
    //     {universities ? universities.map((uni) => {
    //         return <p key={uni.domains}>{uni.name}</p>
    //     }) : <h1>Loading</h1>}
    // </div>


    return (
        <div className="App">
            <header className="App-header">
                <h1>Data Fetchen</h1>
                <h3>Universities of {search}</h3>
                <input placeholder="Typ hier een land (en)" type="text" onKeyUp={(e) => setSearch(e.target.value)}/>

                <div>
                    {universities ? universities.map((uni) => {
                        return <p>{uni.name}</p>
                    }) : <h1>Loading</h1>}
                </div>
            </header>
        </div>
    )
}

export default DataFetchen;