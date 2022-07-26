import React from "react";
import ActiveTask from "./ActiveTask";

function ActiveTasks(props) {
  return (
    <div>
      <h1>Active Tasks</h1>
      {props.tasks.map((task) => {
        return <ActiveTask editTask = {props.editTask} markTaskAsCompleted = {props.markTaskAsCompleted} deleteActiveTask = {props.deleteActiveTask} key = {task.id} id={task.id} title = {task.value}></ActiveTask>
      })}
      <button onClick={props.addTask}>Add Task</button>
    </div>
  );
}

export default ActiveTasks;
