import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
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

      <Outlet />
    </>
  );
};

export default Layout;
