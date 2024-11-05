// SongJournal.js
import React from 'react';
import SongCard from '../components/SongCard'; // Importing the SongCard component
import '../css/SongJournal.css'; // Optional: Import CSS for styling
import theweekndImage from '../images/theweeknd3.jpg';
import szaImage from '../images/sza.jpg';
import casImage from '../images/cas.jpg';


const songs = [
    {
        title: "Faith",
        artist: "The Weeknd",
        review: "Giving this song a 8/10. This song by The Weeknd is definitely one of my favorites from the album...",
        otherReviews: [
            { user: "Louiss", review: "I love this album so much, I agree, I can literally feel his lyrics." },
            { user: "Jes444", review: "5/10. I feel like it's kinda basic, I don't see what you guys are talking about." },
        ],
        image: theweekndImage,
    },
    {
        title: "Normal Girl",
        artist: "SZA",
        review: "Giving this song a 7/10. I love the concept of the song because it feels relatable...",
        otherReviews: [
            { user: "Mayajs34", review: "10/10 for me. I've never heard something more relatable." },
        ],
        image: szaImage,
    },
    {
        title: "Cry",
        artist: "Cigarettes After Sex",
        review: "10/10. This is my go-to crying song. It features the most beautiful instrumentation...",
        otherReviews: [
            { user: "mikeR334", review: "I cry to this song every day." },
            { user: "burgers50", review: "1/10, all their songs sound the same." },
        ],
        image: casImage,
    },
];

const SongJournal = () => {
  return (
      <>
         
          <main>
              <h2 className="main-heading">Our Song Reviews</h2>
              <section className="song-reviews">
                  {songs.map((song, index) => (
                      <SongCard key={index} song={song} />
                  ))}
              </section>
          </main>
      </>
  );
};

export default SongJournal;
