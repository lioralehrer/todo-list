import React from "react";
import "./TasksList.css"

class TasksList extends React.Component {
    render() {
        if (this.props.tasks && this.props.tasks.length > 0) {
            return (
                <ul>
                    {this.props.tasks.map((obj, index) =>
                        <li key={index}>{`task: ${obj.task} description: ${obj.description}`}</li>)}
                </ul>
            )
        }
        return <div>Waiting for your Task ....</div>

    }

}

export default TasksList;