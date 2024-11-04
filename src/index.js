import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import ArtistProfile from "./pages/ArtistProfile";
import SongJournal from "./pages/SongJournal";
import MusicalQuiz from "./pages/MusicalQuiz";
import AboutUs from "./pages/AboutUs";
import NoPage from "./pages/NoPage";

export default function App() {
  return (
    <BrowserRouter>
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
