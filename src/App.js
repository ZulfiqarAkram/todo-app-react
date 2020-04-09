import React from "react";
import "./App.css";
import NavBar from "./components/navbar";
import AddItem from "./components/addItem";

function App() {
  return (
    <div>
      <NavBar />
      <main className="container">
        <AddItem />
      </main>
    </div>
  );
}

export default App;
