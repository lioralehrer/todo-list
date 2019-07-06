import React from "react";
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import TasksList from "../TasksList/TasksList"
import TaskForm from "../TaskForm/TaskForm"
class Container extends React.Component {
    constructor() {
        super();
        this.state = {
            tasks: [],
            doneTasks: []
        };
        this.handleNewTask = this.handleNewTask.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
    }
    handleNewTask(task) {
        this.setState({
            tasks: [...this.state.tasks, task]
        })
    }
    handleDoneTask(task) {
        // move the task from the tasks list and put it to done list
        this.setState({
            doneTasks: [...this.state.doneTasks, task],
            task: [...this.state.tasks.reduce(task)]
        })
    }
    handleRemove(taskid) {
         console.log(this.state);
        let tasks = Object.assign([], this.state.tasks);
        tasks.splice(taskid, 1);
        console.log(tasks);
        this.setState({
            tasks: tasks
        })
    }

    render() {
        return (
            <div className="container">
                <Header />
                <TaskForm handleNewTask={this.handleNewTask} />
                <div className="row">
                    <div className="col-md-6 col-xs-6">
                        <h3>Todo</h3>
                        <TasksList tasks={this.state.tasks} handleDoneTask={this.handleDoneTask} handleRemove={this.handleRemove} />
                    </div>

                    <div className="col-md-6 col-xs-6">
                        <h3>Done</h3>
                        <TasksList tasks={this.state.doneTasks} />
                    </div>

                </div>

                <Footer />
            </div >
        )

    }
}

export default Container;