// SongJournal.js
import React, { useState, useEffect } from 'react';
import SongCard from '../components/SongCard';
import '../css/SongJournal.css';

const SongJournal = () => {
    const [songs, setSongs] = useState([]); // State to store fetched songs

    useEffect(() => {
        // Fetch songs data from the server
        const fetchSongs = async () => {
            try {
                const response = await fetch('https://sound-check-server.onrender.com'); // Fetch from the backend
                const data = await response.json(); // Parse the JSON response
                setSongs(data); // Set the fetched data to state
            } catch (error) {
                console.error('Error fetching songs:', error);
            }
        };

        fetchSongs(); // Call the fetch function when the component mounts
    }, []);

    return (
        <>
            <main>
                <h2 className="main-heading">Our Song Reviews</h2>
                <section className="song-reviews">
                    {songs.map((song, index) => (
                        <SongCard key={index} song={song} /> // Pass the song data to SongCard
                    ))}
                </section>
            </main>
        </>
    );
};

export default SongJournal;
