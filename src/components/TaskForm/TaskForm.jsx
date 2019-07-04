import React from "react";
// import "./TasksForm.css"
class TasksForm extends React.Component {
    constructor() {
        super();
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmitTask = this.handleSubmitTask.bind(this);
        this.state = {
            task: "",
            description: ""
        }
    }
    handleInputChange(e) {
        let inputValue = e.target.value;
        let stateKey = e.target.getAttribute("data-bind");
        this.setState({
            [stateKey]: inputValue,
        })
    }
    handleSubmitTask(e) {
        this.props.handleNewTask(Object.assign({},this.state));
    }
    render() {
        return (
            <div>
                <input className="task-input" data-bind="task" onChange={this.handleInputChange} type="text" placeholder="task:" />
                <input className="task-input" data-bind="description" onChange={this.handleInputChange} type="text" placeholder="discription:" />
                <button onClick={this.handleSubmitTask}>Submit task</button>
            </div>
        )
    }
}
export default TasksForm;