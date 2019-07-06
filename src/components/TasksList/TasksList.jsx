import React from "react";
import "./TasksList.css"
import Task from "../Task/Task"
class TasksList extends React.Component {
    constructor() {
        super();
        this.handleDone = this.handleDone.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
    }
    handleRemove(taskid) {
        // console.log(taskid);
        this.props.handleRemove(taskid);
        // let updatedList = this.props.tasks.filter((obj) => { return (obj.taskid !== taskid) });
        // this.props.tasks = updatedList;
        // this.props.removeItem(taskid);
    }
    handleDone() {
        console.log();
        // let updatedList = this.props.tasks.filter((obj) => { return (obj.taskId !== taskId) });
        // this.props.tasks = updatedList;
       
    }


    render() {
        if (this.props.tasks && this.props.tasks.length > 0) {
            return (
                <ul>
                    {this.props.tasks.map((obj, index) =>
                        <Task title={obj.task} description={obj.description} taskid={index} key={index}
                            handleDone={this.handleDone} handleRemove={this.handleRemove} />)}
                </ul>
            )
        }
        return <div>Waiting for your Task ....</div>

    }

}

export default TasksList;