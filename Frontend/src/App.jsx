// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import CascadingDropdown from "./components/CascadingDropdown";


function App() {
  return (
    <Router>
      <div className="App">
        <nav style={{ padding: "10px", background: "#f0f0f0" }}>
          <Link to="/login" style={{ marginRight: "10px" }}>Login</Link>
          <Link to="/register">Register</Link>
        </nav>

        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register />} />
          <Route path="/cascade" element={<CascadingDropdown/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
