import React from "react";

class Task extends React.Component {
    constructor() {
        super();
        this.state = {
            isDone: false,
            isDeleted: false,
        }
    }

    render() {
        return (
            <li key={this.props.index}>
                {`task: ${this.props.title} description: ${this.props.description}`}
                <button className="done-button" onClick={this.handleDone}>Done</button>
            </li>
        )
    }
}
export default Task