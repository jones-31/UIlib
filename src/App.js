
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./Home.jsx";
// import About from "./About";
// import Contact from "./Contact";

import './App.css';
import './Layout.css';



function App() {
  return (  
    <Router>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        {/* <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} /> */}
      </Route>
    </Routes>
  </Router>
  );
}

export default App;
