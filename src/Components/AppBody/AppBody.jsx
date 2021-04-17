import React from "react";
import { auth, firestore } from "../../firebase";
import TodoDetail from "../TodoDetail/TodoDetail";
import "./AppBody.css";
import { useCollectionData } from "react-firebase-hooks/firestore";
import firebase from "./../../firebase";

const AppBody = ({ displayName }) => {
  //Current todo (input)
  const [curTodo, setCurTodo] = React.useState("");

  //Todos Array from firestore
  const todosRef = firestore.collection(`users/${auth.currentUser.uid}/todos`);
  const [todos] = useCollectionData(todosRef, { idField: "id" });

  // Add Task
  const addTask = () => {
    if (!curTodo) return;

    document.querySelector(".task-input").value = "";

    todosRef.add({
      text: curTodo,
      complete: false,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setCurTodo("");
  };

  return (
    <div className="appBody-container">
      <p className="appbody-header">
        Welcome to tasker, {displayName.split(" ")[0]}
      </p>
      <input
        className="task-input"
        type="text"
        placeholder="What's next?"
        onChange={(e) => setCurTodo(e.target.value)}
      />
      <button className="btn-add" onClick={addTask}>
        Add task
      </button>
      <div className="todos-container">
        {todos?.map((todo) => {
          return <TodoDetail {...todo} />;
        })}
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
