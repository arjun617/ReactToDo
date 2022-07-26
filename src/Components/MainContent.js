import ActiveTasks from "./ActiveTasks";
import CompletedTasks from "./CompletedTasks";
import { React, Component } from "react";

class MainContent extends Component {
  constructor(props) {
    super(props);
    this.markTaskAsCompleted = this.markTaskAsCompleted.bind(this);
    this.deleteActiveTask = this.deleteActiveTask.bind(this);
    this.updateActiveTask = this.updateActiveTask.bind(this);
    this.state = {
      activeTasks : [
        { id: 1, value: "Task 1" },
        { id: 2, value: "Task 2" },
      ],
      completedTasks : [
        { id: 1, value: "Task 3" },
        { id: 2, value: "Task 4" },
      ]
    }
  }

  markTaskAsCompleted(id) {
    var completedTask = this.state.activeTasks.filter((item) => item.id === id);
    this.setState({ completedTasks: [...this.state.completedTasks, completedTask[0]] })
    this.deleteActiveTask(id);
  }

  deleteActiveTask(id){
    var updatedActiveTasks = this.state.activeTasks.filter((item) => item.id !== id);
    this.setState({ activeTasks: updatedActiveTasks })
  }

  updateActiveTask(id, value){
    var updatedActiveTasks = this.state.activeTasks.map(obj=>{
      if(obj.id === id){
        return {...obj,value:value}
      }
      return obj
    });
    this.setState({ activeTasks: updatedActiveTasks })
  }

  render() {
    if (this.props.setActiveTasksPage) {
      return (
        <main className="main">
          <ActiveTasks editTask = {this.updateActiveTask} markTaskAsCompleted = {this.markTaskAsCompleted} deleteActiveTask = {this.deleteActiveTask} tasks={this.state.activeTasks} />
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
