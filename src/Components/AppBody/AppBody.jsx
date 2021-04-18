import React from "react";
import { auth, firestore } from "../../firebase";
import TodoDetail from "../TodoDetail/TodoDetail";
import "./AppBody.css";
import { useCollectionData } from "react-firebase-hooks/firestore";
import firebase from "./../../firebase";
import LoaderTasker from "../LoaderTasker/LoaderTasker";

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

  const todoComps = todos?.map((todo) => {
    return <TodoDetail {...todo} />;
  });

  const emptyTodoStyle = {
    margin: "50px 0px",
    fontFamily: "inherit",
    fontSize: "18px",
  };

  return (
    <div className="appBody-container">
      <p className="appbody-header animate__animated animate__fadeIn">
        Welcome to tasker, {displayName.split(" ")[0]}
      </p>
      <input
        className="task-input animate__animated animate__fadeIn"
        type="text"
        placeholder="What's next?"
        onChange={(e) => setCurTodo(e.target.value)}
        onKeyUp={(e) => {
          if (e.key == "Enter") {
            addTask();
          }
        }}
      />
      <button className="btn-add" onClick={addTask}>
        Add task
      </button>
      <div className="todos-container">
        {todos?.length ? (
          todoComps
        ) : (
          // <LoaderTasker text="Wow so empty? Add a task and get started" />
          <div style={emptyTodoStyle} data-aos="fade-up">
            Wow so empty? Add a task and get started
          </div>
        )}
      </div>
      <button
        className="btn-signout"
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
