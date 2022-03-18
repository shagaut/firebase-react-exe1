import Register from "./auth/Register";
import "./css/App.css";
import Home from "./Tasks/TaskManager";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./auth/Login";
import Reset from "./auth/Reset";

function App() {
  return (
    <div className="app">
      <Home />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/reset" element={<Reset />} />
          <Route exact path="/Login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
