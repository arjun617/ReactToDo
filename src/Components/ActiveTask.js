import "./ComponentStyle.css";
import { React, useState } from "react";

function ActiveTask(props) {
  const [disabled, setDisabled] = useState(true);
  const [title, setTitle] = useState(props.title);
  const inputid = "task"+props.id;
  const editid = "edit"+props.id;
  const completeid = "completed"+props.id;
  const deleteid = "delete"+props.id;

  function editTask() {
    setDisabled(false);
  }

  function onChangeInput(event){
    setTitle(event.target.value);
  }

  function onFocusOut(event){
    console.log("Task Edited");
    props.editTask(props.id,event.target.value)
    setDisabled(true);
  }

  return (
    <div className="task">
      <span>
        <input
          type="text"
          id = {inputid}
          value={title}
          onChange = {onChangeInput}
          disabled={disabled ? "disabled":""}
          onBlur = {onFocusOut}
        ></input>
        <span>
          <button id = {completeid} onClick={() => props.markTaskAsCompleted(props.id)}>Mark As Completed</button>
          <button id = {editid} onClick={editTask}>Edit</button>
          <button id = {deleteid} onClick={()=>{props.deleteActiveTask(props.id)}}>Delete</button>
        </span>
      </span>
    </div>
  );
}

export default ActiveTask;
