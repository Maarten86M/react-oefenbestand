
function UserForm(props) {
    return(
            <div>
                <label> Playername</label>
                <input value={props.name} onChange={(event) => props.setName(event.target.value)}/>
                <button onClick={() => props.seteditMode(false)}>submit</button>
                <select value={props.avatar} onChange={(event) => props.setAvatar(event.target.value)}>
                    <option>⌚</option>
                    <option>⏰</option>
                    <option>⛑</option>
                </select>
            </div>
    )
}

export default UserForm;