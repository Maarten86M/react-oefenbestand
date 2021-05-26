import {useState} from "react";
import UserForm from "./UserForm";
import UserScore from "./UserScore";

function User() {

    const [score, setScore] = useState(0);
    const [name, setName] = useState('Maarten');
    const [avatar, setAvatar] = useState('⛑');
    const [editMode, seteditMode] = useState(false);

    return (
        <div>
            {editMode &&
            <UserForm
                name={name}
                avatar={avatar}
                setName={setName}
                setAvatar={setAvatar}
                seteditMode={seteditMode}/>
            }
            <UserScore
                avatar={avatar}
                name={name}
                score={score}
                setScore={setScore}
                seteditMode={seteditMode}
            />
        </div>)
}

export default User;