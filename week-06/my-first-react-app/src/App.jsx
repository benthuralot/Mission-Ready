import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  const message1 = "Hey you";
  const message2 = "What's going on";
  return (
    <>
      <Header></Header>
      <p>This is some HTML after the header.</p>
      <Footer></Footer>
    </>
  );
}

export default App;
