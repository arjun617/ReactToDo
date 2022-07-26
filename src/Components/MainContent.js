import ActiveTasks from "./ActiveTasks";
import CompletedTasks from "./CompletedTasks";
import { React, Component } from "react";

class MainContent extends Component {
  constructor(props) {
    super(props);
    this.markTaskAsCompleted = this.markTaskAsCompleted.bind(this);
    this.deleteActiveTask = this.deleteActiveTask.bind(this);
    this.updateActiveTask = this.updateActiveTask.bind(this);
    this.addTask = this.addTask.bind(this);
    this.state = {
      activeTasks: [
        { id: 1, value: "Task 1" },
        { id: 2, value: "Task 2" },
      ],
      completedTasks: [
        { id: 1, value: "Task 3" },
        { id: 2, value: "Task 4" },
      ],
    };
  }

  markTaskAsCompleted(id) {
    var completedTask = this.state.activeTasks.filter((item) => item.id === id);
    if (completedTask[0].value) {
      this.setState({
        completedTasks: [...this.state.completedTasks, completedTask[0]],
      });
      this.deleteActiveTask(id);
    }
    else{
      alert("Cannot mark empty task as completed")
    }
  }

  deleteActiveTask(id) {
    var updatedActiveTasks = this.state.activeTasks.filter(
      (item) => item.id !== id
    );
    this.setState({ activeTasks: updatedActiveTasks });
  }

  updateActiveTask(id, value) {
    var updatedActiveTasks = this.state.activeTasks.map((obj) => {
      if (obj.id === id) {
        return { ...obj, value: value };
      }
      return obj;
    });
    this.setState({ activeTasks: updatedActiveTasks });
  }

  addTask() {
    this.setState({
      activeTasks: [
        ...this.state.activeTasks,
        { id: this.state.activeTasks.length + 1, value: "" },
      ],
    });
  }

  render() {
    if (this.props.setActiveTasksPage) {
      return (
        <main className="main">
          <ActiveTasks
            addTask={this.addTask}
            editTask={this.updateActiveTask}
            markTaskAsCompleted={this.markTaskAsCompleted}
            deleteActiveTask={this.deleteActiveTask}
            tasks={this.state.activeTasks}
          />
        </main>
      );
    } else {
      return (
        <main className="main">
          <CompletedTasks tasks={this.state.completedTasks} />
        </main>
      );
    }
  }
}

export default MainContent;
