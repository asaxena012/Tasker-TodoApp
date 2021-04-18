import React from "react";
import "./App.css";
import Navbar from "./../Navbar/Navbar";
import Footer from "./../Footer/Footer";
import LoginBlob from "./../LoginBlob/LoginBlob";
import AppBody from "./../AppBody/AppBody";
import { auth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import firebase from "firebase";
import LoaderTasker from "../LoaderTasker/LoaderTasker";

const signInWithGoogle = () => {
  //Create instance of Google Authentication Provider
  const provider = new firebase.auth.GoogleAuthProvider();

  //Use firebase auth feature to sign in with popup using provider
  auth.signInWithPopup(provider);
};

const App = () => {
  const [user, loading] = useAuthState(auth);

  const nonLoadingComp = user ? (
    <AppBody displayName={user?.displayName} />
  ) : (
    <LoginBlob signInWithGoogle={signInWithGoogle} />
  );

  return (
    <div className="app-container">
      <Navbar loggedIn={user} />
      {loading ? <LoaderTasker text={"Loading your todos"} /> : nonLoadingComp}
      <Footer />
    </div>
  );
};

export default App;
