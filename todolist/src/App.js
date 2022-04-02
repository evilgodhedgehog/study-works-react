import * as React from 'react';
import Home from "./pages/Home";
import { Routes, Router, Link} from "react-router-dom";

function App() {
  return (
    <Routes>
      <Router path="/">
        <Home />
      </Router> 
    </Routes>
  )
}

export default App;
