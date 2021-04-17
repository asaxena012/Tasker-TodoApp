import React from "react";
import { auth } from "../../firebase";
import TodoDetail from "../TodoDetail/TodoDetail";
import "./AppBody.css";

const AppBody = ({ displayName }) => {
  return (
    <div className="appBody-container">
      <p className="appbody-header">
        Welcome to tasker, {displayName.split(" ")[0]}
      </p>
      <input className="task-input" type="text" placeholder="What's next?" />
      <button className="btn-add">Add task</button>
      <div className="todos-container">
        <TodoDetail
          text="Read Rich Dad Poor Dad - 15mins and concentrate like never before"
          done={false}
        />
        <TodoDetail text="Section 7 React till 6pm" done={true} />
        <TodoDetail text="Walk 5pm to 6pm" done={false} />
      </div>
      <button
        className="btn-add"
        onClick={() => {
          auth.signOut();
        }}
      >
        Sign out
      </button>
    </div>
  );
};

export default AppBody;
