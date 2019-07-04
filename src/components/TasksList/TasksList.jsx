import React from "react";
import "./TasksList.css"
import Task from "../Task/Task"
class TasksList extends React.Component {
    constructor() {
        super();
    }


    render() {
        if (this.props.tasks && this.props.tasks.length > 0) {
            return (
                <ul>
                    {this.props.tasks.map((obj, index) =>
                    <Task title={obj.task} description={obj.description} key={index} />)}
                </ul>
            )
        }
        return <div>Waiting for your Task ....</div>

    }

}

export default TasksList;