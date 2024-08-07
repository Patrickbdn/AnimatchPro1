// import logo from './logo.svg';
import React, { FunctionComponent } from "react";
import "./App.css";
import LoginForm from "./component/LoginPage/LoginForm";
import SignupForm from "./component/LoginPage/SignupForm";
import Header from "./component/Header";
import NavBar from "./component/NavBar/NavBar";
import HomePage from "./component/HomePage/HomePage";
import Footer from "./component/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
