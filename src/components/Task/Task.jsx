import React from "react";
import "./Task.css"
// import index from "react-html-id"

class Task extends React.Component {
    constructor() {
        super();
        // index.enableUniqueIds.bind(this)
        this.sendIsDone = this.sendIsDone.bind(this);
        this.sendIsRemoved = this.sendIsRemoved.bind(this);
        this.state = {
            isDone: false,
            isRemoved: false,
        }
    }
    sendIsDone() {
        var taskid = parseInt(this.props.taskid);
        this.props.handleDone(taskid);
    }

    sendIsRemoved() {
         var taskid = parseInt(this.props.taskid);
        this.props.handleRemove(taskid);
    }

    render() {
        return (
            <li taskid={this.props.taskid}>
                {`task: ${this.props.title} description: ${this.props.description}`}
                <button  className={this.props.hideDone} onClick={this.sendIsDone}>Done</button>
                <button   onClick={this.sendIsRemoved}>Remove</button>
                <button  className={this.props.hideRedo} onClick={this.sendRedo} >Redo</button>
            </li>
        )
    }
}
export default Task