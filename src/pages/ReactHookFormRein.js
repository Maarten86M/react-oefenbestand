import {useForm} from "react-hook-form";
import {useState} from "react";

function ReactHookFormRein() {
    const {register, handleSubmit, formState: {errors}} = useForm();

    const [succes, setSucces] = useState(false);

    function logOutput(data) {
        console.log(data);
        setSucces(true);
    }

    console.log("Wat zijn errors:", errors)

    return (
        <div className="App">
            <header className="App-header">

                {!succes ?
                    <form className="App-header" onSubmit={handleSubmit(logOutput)}>
                        <label htmlFor="name">Naam:</label>
                        <input
                            id="name"
                            type="text"
                            placeholder="Your name here..."
                            {...register('name', {required: {value: true, message: "Dit Naam veld is verplicht"}})}
                        />
                        {errors.name && <p>{errors.name.message}</p>}

                        <label htmlFor="postcode">Postcode:</label>
                        <input
                            id="postcode"
                            type="text"
                            placeholder="5022DD"
                            {...register("postcode", {
                                    required: {value: true, message: "Dit postcode veld is verplicht"},
                                    pattern: {
                                        value: /^[1-9][0-9]{3} ?(?!sa|sd|ss)[a-z]{2}$/i,
                                        message: "DIT IS GEEN GELDIGE POSTCODE",
                                    }
                                }
                            )}
                        />
                        {errors.postcode && <p>{errors.postcode.message}</p>}

                        <label htmlFor="email">Email:</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="you@you.com"
                            {...register('email', {
                                validate: (value) => {
                                    if (value.includes("@")) {
                                        return true;
                                    } else {
                                        return "Vul aub een email in";
                                    }
                                },
                            })}
                        />
                        {errors.email && <p>{errors.email.message}</p>}
                        <label htmlFor="xp">Years of Experience:</label>
                        <input
                            id="xp"
                            type="number"
                            placeholder='0'
                            {...register('xp')}
                        />
                        <input type="submit" disabled={
                            errors.name ||
                            errors.postcode ||
                            errors.email ||
                            errors.xp}/>
                    </form> : (<h1>Beste,Dank voor het inzenden van het formulier</h1>
                    )}
            </header>
        </div>
    )
}

export default ReactHookFormRein;