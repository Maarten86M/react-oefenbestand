import React from "react";
import '../App.css';

function StateUitlegdTwo() {

    const [messageValue, setMessageValue] = React.useState('');
    const [termsAndConditionsValue, toggleTermsAndConditions] = React.useState(false);

    function sendForm() {
        console.log(`Het bericht: "${messageValue}" is succesvol verzonden.`);
        toggleTermsAndConditions(true);
    }

    return (
        <div>
            <h1>H3.3 State controlled component </h1>
            <div className="form-container">
                <h2>Contactformulier</h2>
                <form action="">
                    <label htmlFor="form-message">
                        <input
                            type="text"
                            placeholder="Typ hier jouw bericht"
                            name="message"
                            className={messageValue.length > 20 ? 'input-error' : ''}
                            value={messageValue}
                            onChange={(e) => setMessageValue(e.target.value)}
                        />
                        {messageValue.length > 20 && <p className="error-message">Dit bericht is te lang!</p>}
                    </label>
                    <label htmlFor="form-terms-and-conditions">
                        <input
                            type="checkbox"
                            id="form-terms-and-conditions"
                            name="terms-and-conditions"
                            checked={termsAndConditionsValue}
                            onChange={() => toggleTermsAndConditions(!termsAndConditionsValue)}
                        /> ik ga akkoord
                    </label>
                </form>
                <button
                    type="submit"
                    disabled={!termsAndConditionsValue}
                    onClick={sendForm}
                >
                    Verstuur
                </button>

            </div>

        </div>

    );
};

export default StateUitlegdTwo;
