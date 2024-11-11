// src/pages/Home.js
import React from 'react';
import '../css/home.css'; // Import your CSS file if you have one

// Import images
import theWeekndImage1 from '../images/theweeknd.jpg';
import theWeekndImage2 from '../images/theweeknd2.jpeg';

const Home = () => {
  return (
    <div>
    
    {/* log in*/}
    <section className="auth-links">
          <a href="#">Log in</a>
        </section>
      
      {/* Main Content */}
      <main>
      
        <div className="featured-artist">
     
        <h2 className="centered-heading">Discover your next favorite artist</h2>
        </div>

        <section className="latest-featured-artist">
          <div className="artist-placeholder">
            <img src={theWeekndImage1} alt="The Weeknd" className="artists-image" />
            <p className="small-text">
              Image by <a href="https://flickr.com/photos/128375980@N04/44778856382">Nicolas Padovani</a> on <a href="https://creativecommons.org/licenses/by/2.0/">Creative Commons BY 2.0</a>.
            </p>
          </div>
          <div className="featured-artist-info">
            <h3>Latest Featured Artist: The Weeknd</h3>
            <p>The Weeknd, born Abel Tesfaye, is the latest featured artist, known for his incredible blend of R&B, pop, and hip-hop. Since he burst onto the scene, he has captivated audiences with his angelic vocals and unforgettable songs. From chart-toppers like "Blinding Lights" to "One of the Girls," as well as some of his more underrated tracks, he truly resonates with fans worldwide. His upcoming album, "Hurry Up Tomorrow," is generating a lot of excitement, and fans, including myself, can't wait for its release. Recently, he performed a few songs from the yet-to-be-released album in Brazil, in front of a massive crowd of 70,000 fans. We all love The Weeknd!</p>
            <div className="iframe-container">
            </div>
          </div>
          <div className="artist-placeholder">
            <img src={theWeekndImage2} alt="The Weeknd" className="artists-image" />
            <p className="small-text">
              Image by <a href="https://500px.com/photo/253662129/the-weeknd-by-pedro-mora">Pedro Mora</a> on <a href="https://500px.com">500px</a>.
            </p>
          </div>
        </section>

        {/* Listener's Choice Section */}
        <section className="listeners-choice">
          <h2>Listener's Choice</h2>
          <p>Vote for your favorite song or artist of the month! Your choices will help us highlight the top picks on our homepage.</p>
          <form className="choice-form">
            <label htmlFor="song-artist">Select your choice:</label>
            <select id="song-artist" name="song-artist">
              <option value="song1">Bruno Mars</option>
              <option value="song2">Don Toliver</option>
              <option value="song3">Taylor Swift</option>
              <option value="song4">Kali Uchis</option>
            </select>
            <button type="submit">Submit</button>
          </form>
        </section>
      </main>
    </div>
  );
};

export default Home;
