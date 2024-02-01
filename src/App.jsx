import React from "react";
import { Routes, Route } from "react-router-dom";
import VerticalNavbar from "./components/VerticalNavbar";
import Navbar from "./pages/Navbar";
import Projects from "./pages/Projects";
import Task from "./pages/Task";

function App() {
  return (
    <>
      <Navbar />
      <div className="flex">
        <VerticalNavbar />
        <div className="w-full">
          <Routes>
            <Route path="/" element={<Projects />} />
            <Route path="/task" element={<Task />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
