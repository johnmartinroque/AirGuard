import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import Database from "./screens/Database";
import Header from "./components/Header";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Router>
        <Header />
        <main className="flex-grow px-4 sm:px-6 lg:px-8 py-6 mb-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/database" element={<Database />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
