import React from "react";
import "./App.css";
import Navbar from "./../Navbar/Navbar";
import Footer from "./../Footer/Footer";
import LoginBlob from "./../LoginBlob/LoginBlob";
import AppBody from "./../AppBody/AppBody";

class App extends React.Component {
  state = {
    loggedIn: false,
  };

  render() {
    return (
      <div className="app-container">
        <Navbar loggedIn={this.state.loggedIn} />
        {this.state.loggedIn ? <AppBody /> : <LoginBlob />}
        <Footer />
      </div>
    );
  }
}

export default App;
