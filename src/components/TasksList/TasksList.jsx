import React from "react";
import "./TasksList.css"
import Task from "../Task/Task"
class TasksList extends React.Component {
    constructor() {
        super();
        this.handleDone = this.handleDone.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this.handleRedo= this.handleRedo.bind(this);
    }
    handleRemove(taskid) {
        this.props.handleRemove(taskid);
    }
    handleDone(taskid) {
      this.props.handleDone(taskid);
    }
    handleRedo(taskid){
        this.props.handleRedo(taskid);
    }    

    render() {
        if (this.props.tasks && this.props.tasks.length > 0) {
            return (
                <ul >
                    {this.props.tasks.map((obj, index) =>
                        <Task title={obj.task} description={obj.description} taskid={index} key={index}
                            handleDone={this.handleDone} handleRemove={this.handleRemove} 
                            hideDone={this.props.hidedone} hideRedo={this.props.hideredo}
                            handleRedo={this.props.handleRedo}/>)}
                </ul>
            )
        }
        return <div>Waiting for your Task ....</div>

    }

}

export default TasksList;