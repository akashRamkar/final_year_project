import React from 'react'
import "./Navbar.css";

export default function Navbar() {
  return (
    <div>
     
     <nav class="navbar">
            <ul className="nav">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact us</a></li>
            </ul>
            <div class="search1">
                    <button class="btn1">Log in</button>
                    <button class="btn2">Sign up</button>
                </div>
        </nav>
    </div>
  )
}
