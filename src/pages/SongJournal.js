// SongJournal.js
import React, { useState, useEffect } from 'react';
import SongCard from '../components/SongCard';
import '../css/SongJournal.css';

const SongJournal = () => {
    const [songs, setSongs] = useState([]); 

    useEffect(() => {
        // Fetch songs data from the server
        const fetchSongs = async () => {
            try {
                const response = await fetch('https://sound-check-server.onrender.com'); 
                const data = await response.json(); 
                setSongs(data); 
            } catch (error) {
                console.error('Error fetching songs:', error);
            }
        };

        fetchSongs(); 
    }, []);

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
