import React, {useState} from "react";

function Login(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    function handleSubmit() {
        // Normaal werkt dit met een token vanuit de backend.
        // Normaal is deze vergelijking bij de server!

        // Door deze vergelijking gaan we in app.js doorgeven tot welke pagina's we toegang hebben.
        if (email === "test@test.nl" && password === "test") {
            console.log("ingelogd!!!!!!");
            props.setAuthenticated(true);
        } else {
            console.log("Helaas geen goed wachtwoord.");
        }
    }

    console.log("Ben ik nu ingelogd?:", props.authenticated);
    return (
        <>
            <label>Email</label>
            <input
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                type="email"/>
            <label>Password</label>
            <input
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                type="password"
            />
            <button onClick={handleSubmit}>Login</button>
        </>
    )
}

export default Login;