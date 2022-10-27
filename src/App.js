import React from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import GlobalStyle from "./GlobalStyles";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";
import Scroll from "./Components/ImgScroll";

function App() {
  
  return (
    <Router>
      <GlobalStyle />
      <Navbar  />
      <About />
      <Projects />
      <Scroll />
      <Footer />
    </Router>
  );
}

export default App;