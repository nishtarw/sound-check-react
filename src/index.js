import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import ArtistProfile from "./pages/ArtistProfile";
import SongJournal from "./pages/SongJournal";
import MusicalQuiz from "./pages/MusicalQuiz";
import AboutUs from "./pages/AboutUs";
import NoPage from "./pages/NoPage";

export default function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Header /> {/* Place Header here to show it above Layout */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="ArtistProfile" element={<ArtistProfile />} />
          <Route path="SongJournal" element={<SongJournal />} />
          <Route path="MusicalQuiz" element={<MusicalQuiz />} />
          <Route path="AboutUs" element={<AboutUs />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
