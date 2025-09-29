import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import Database from "./screens/Database";
import Header from "./components/Header";
function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/database" element={<Database />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
