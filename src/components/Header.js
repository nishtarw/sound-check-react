// src/components/Header.js
import React from 'react';
import '../css/home.css'; // Create a CSS file for header styles if needed

const Header = () => {
  return (
    <header>
      <div className="logo-and-title">
        <h1>The Sound Check</h1>
      </div>
      <div className="hamburger" id="hamburger">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </header>
  );
};

export default Header;