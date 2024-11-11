import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import '../css/layout.css';

const Layout = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen((prevState) => !prevState);
  };

  return (
    <>
      <div className="nav-container">
        {/* Hamburger Icon (only visible on small screens) */}
        <div className="hamburger" onClick={toggleNav}>
          <div></div>
          <div></div>
          <div></div>
        </div>

        {/* Main Navigation Menu */}
        <nav>
          <ul className={`nav-links ${isNavOpen ? "active" : ""}`}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/ArtistProfile">Artist Profile</Link>
            </li>
            <li>
              <Link to="/SongJournal">Song Journal</Link>
            </li>
            <li>
              <Link to="/MusicalQuiz">Musical Quiz</Link>
            </li>
            <li>
              <Link to="/AboutUs">About Us</Link>
            </li>
          </ul>
        </nav>
      </div>

      <Outlet />
    </>
  );
};

export default Layout;
