// onderstaand is een class component

import React from "react";

class ClassVSFunctionComponents extends React.Component {
    constructor() {
        super();
    }

    state = {matchNumer: 3};

    render() {
        return <h1>Match # {this.state.matchNumer}{" "}
            <button
                onClick={() =>
                    this.setState({matchNumer: this.state.matchNumer + 1})
                }
            > ++
            </button>

            <button
                onClick={() =>
                    this.setState({matchNumer: this.state.matchNumer - 1})
                }
            > --
            </button>

        </h1>;

    }
}

// function component.
// zoals je ziet is het onderstaande minder code.
// Een class component kan geen props gebruiken Een functie component wel.
// vooral midner code. En geen THIS keyword.

function ClassVSFunctionComponentEASY(props) {
    return <h1>Match #{props.matchNumer}</h1>
}

export default ClassVSFunctionComponents;