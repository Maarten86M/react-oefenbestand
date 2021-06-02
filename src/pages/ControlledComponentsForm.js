import {useState} from "react";

function ControlledComponentsForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [xp, setXp] = useState(0);
    const [emailError, setEmailError] = useState('');
    const [nameError, setNameError] = useState('')

    function handleSubmit(event) { // checks worden hier ingevuld
        event.preventDefault();
        if (!email.includes('@')) {
            setEmailError("Vul aub een email in.");
            return; // stopt de submit!
        }
        if (!name) {
            setNameError("Vul aub een naam in");
            return;
        }
        console.log("dit is ingevuld:", name, email, xp);
    }

    return (
        <div className="App">
            <header className="App-header">
                <form className="App-header" onSubmit={handleSubmit}>
                    <label htmlFor="name">Naam:</label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Your name here..."
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    />
                    <p>{nameError}</p>
                    <label htmlFor="email">Email:</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="you@you.com"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                    <p>{emailError}</p>
                    <label htmlFor="xp">Years of Experience:</label>
                    <input
                        id="xp"
                        name="xp"
                        type="number"
                        placeholder='0'
                        value={xp}
                        onChange={(event) => setXp(event.target.value)}
                    />
                    <input type="submit"/>
                </form>
            </header>
        </div>
    )
}

export default ControlledComponentsForm;