import { Outlet, Link } from "react-router-dom";
import '../css/layout.css'; // Ensure this path is correct

const Layout = () => {
  return (
    <>
      <div className="nav-container"> {/* This div is important for styling */}
        <nav>
          <ul>
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
