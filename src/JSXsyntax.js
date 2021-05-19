import './App.css';

function returnSomething(){
    return "Hier geeft hij iets terug";
}

// 1 component
function JSXsyntax() {
    const userName ='Rein'
    const magDit = false;
    const arrayOne = [" hallo ", "doei", " bla"];
    const objectOne = {name: "Maarten", age: 34}
    return (
        <div className="App">
            <h1>Hallo {userName}</h1>
            <h1>hallo{magDit ? " JSX is Noice" : " JSX is not Noice"}</h1>
            <h1>Hallo {arrayOne}</h1>
            <h1>Hallo {objectOne.name}</h1>
            <h1>Hallo {returnSomething()}</h1>
        </div>
    );
}

export default JSXsyntax;
