import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Hist from "./components/Hist";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="hist" element={<Hist />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
