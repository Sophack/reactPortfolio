import "../styles/styling.css";
import React from "react";
import { BrowserRouter } from "react-router-dom";


function Navbar() {
  return (
    <BrowserRouter>
      <nav>
        <div>
          <ul id="navbar">
            <li>
              <a className="active" href="index.html">
                Home
              </a>
            </li>
            <li><a href="#about">About</a></li>
            <li><a href="#port">Portfolio</a></li>
            <li><a href="#resume">Resume</a></li>
            <li><a href="#contact">Contact</a></li>
              <li>
               
              </li>
            
          </ul>
        </div>
      </nav>
    </BrowserRouter>
  );
}

export default Navbar;