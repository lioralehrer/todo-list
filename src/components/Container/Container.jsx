import React from "react";
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
class Container extends React.Component {
    // constructor() {
    //     super();

    //     this.state = {
    //         tasks: []
    //     };
    //     this.handleNewTask = this.handleNewTask.bind(this);
    // }

    // handleNewTask(task) {
    //     this.setState({
    //         tasks: [...this.state.tasks, task]
    //     })
    // }

    render() {
        return (
            <div className="container">
                <Header />
                {/* <TaskForm handleNewTask={this.hadleNewTask} />
                <div className="row">
                    <div className="col-md-6 col-xs-6">
                        <h3>Todo</h3>
                        <TasksList tasks={this.state.tasks} />
                    </div>

                    <div className="col-md-6 col-xs-6">
                        <h3>Done</h3>
                        <TasksList tasks={this.state.tasks} />
                    </div>

                </div> */}

                <Footer />
            </div >
        )

    }
}

export default Container;