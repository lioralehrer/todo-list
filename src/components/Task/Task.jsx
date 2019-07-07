import React from "react";
import "./Task.css"

class Task extends React.Component {
    constructor() {
        super();
        this.sendIsDone = this.sendIsDone.bind(this);
        this.sendIsRemoved = this.sendIsRemoved.bind(this);
        this.sendRedo = this.sendRedo.bind(this);
      
    }
    sendIsDone() {
        var taskid = parseInt(this.props.taskid);
        this.props.handleDone(taskid);
    }

    sendIsRemoved() {
        var taskid = parseInt(this.props.taskid);
        this.props.handleRemove(taskid);
    }
    sendRedo() {
        var taskid = parseInt(this.props.taskid);
        this.props.handleRedo(taskid);
    }

    render() {
        return (
            <li  taskid={this.props.taskid} className="glyphicon glyphicon-pencil" >
                {`task: ${this.props.title} description: ${this.props.description}`}
                <button className={this.props.hideDone}  onClick={this.sendIsDone}>Done</button>
                <button onClick={this.sendIsRemoved}  ><span className="glyphicon glyphicon-trash"></span></button>
                <button className={this.props.hideRedo}  onClick={this.sendRedo} >Redo</button>
            </li>
        )
    }
}
export default Task;