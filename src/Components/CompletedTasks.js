import React from "react";

function CompletedTasks(props) {
  return (
    <div>
      <h1>Completed Tasks</h1>
      {props.tasks.map((task,index) => {
        return <p key={index}>{task.value}</p>;
      })}
    </div>
  );
}

export default CompletedTasks;
