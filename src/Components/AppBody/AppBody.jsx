import React from "react";
import TodoDetail from "../TodoDetail/TodoDetail";
import "./AppBody.css";

const AppBody = () => {
  return (
    <div className="appBody-container">
      <p className="appbody-header">Welcome to tasker, Aditya</p>
      <input className="task-input" type="text" placeholder="Enter new task" />
      <button className="btn-add">Add task</button>
      <div className="todos-container">
        <TodoDetail
          text="Read Rich Dad Poor Dad - 15mins and concentrate like never before"
          done={false}
        />
        <TodoDetail text="Section 7 React till 6pm" done={true} />
        <TodoDetail text="Walk 5pm to 6pm" done={false} />
      </div>
    </div>
  );
};

export default AppBody;
