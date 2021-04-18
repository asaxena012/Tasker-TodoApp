import React, { useEffect, useRef } from "react";
import "./TodoDetail.css";
import closeBtn from "./close-icon.svg";
import { auth, firestore } from "./../../firebase";

const TodoDetail = ({ id, text, complete }) => {
  const todosRef = firestore.collection(`users/${auth.currentUser.uid}/todos`);

  const completeTodo = () => {
    todosRef.doc(id).set({ complete: !complete }, { merge: true });
  };

  const deleteTodo = () => {
    todosRef.doc(id).delete();
  };

  return (
    <div data-aos="fade-up">
      <div className={`todoDetail-container ${complete ? "done" : "undone"} `}>
        <p onClick={completeTodo}>{text}</p>
        <img className="close-btn" src={closeBtn} alt="" onClick={deleteTodo} />
      </div>
    </div>
  );
};

export default TodoDetail;
