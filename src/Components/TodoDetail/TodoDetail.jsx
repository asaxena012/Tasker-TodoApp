import React from "react";
import "./TodoDetail.css";
import closeBtn from "./close-icon.svg";

const deleteTodo = () => {};

const TodoDetail = ({ text, done }) => {
  return (
    <div className={`todoDetail-container ${done ? "done" : "undone"}`}>
      {text}
      <img className="close-btn" src={closeBtn} alt="" onClick={deleteTodo} />
    </div>
  );
};

export default TodoDetail;
