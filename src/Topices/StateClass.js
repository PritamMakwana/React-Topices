import { Component } from "react";

class StateClass extends Component {

    constructor() {
        super();
        this.state = {
            data: "admin"
        }
    }

    changeData() {
        if (this.state.data === "admin") {
            this.setState({ data: "user" });
        } else {
            this.setState({ data: "admin" });
        }
    }

    render() {
        return (
            <>
                <h2>2.state in class component in react</h2>
                <p>this is change :- {this.state.data}</p>
                <button onClick={()=>this.changeData()}>changeData</button>
            </>
        );
    }
}

export default StateClass;