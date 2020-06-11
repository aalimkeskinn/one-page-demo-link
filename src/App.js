import React, {Component} from "react";

import Navbar from "./components/Navbar";
import Main from "./sections/Main";
import About from "./sections/About";
import Contact from "./sections/Contact";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
      <Navbar/>
      <Main/>
      <About/>
      <Contact/>
      </div>
    );
      
    
  }



}

export default App;