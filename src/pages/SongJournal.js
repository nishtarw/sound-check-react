import React, { useState, useEffect } from "react";
import SongCard from "../components/SongCard";
import AddDialog from "../components/AddDialog";
import "../css/SongJournal.css";

const SongJournal = () => {
    const [songs, setSongs] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        // Fetch songs data from the server
        const fetchSongs = async () => {
            try {
                const response = await fetch("https://sound-check-server.onrender.com/api/songs");
                const data = await response.json();
                setSongs(data);
            } catch (error) {
                console.error("Error fetching songs:", error);
            }
        };

        fetchSongs();
    }, []);

    const handleAddReview = (newReview) => {
        setSongs((prevSongs) => [...prevSongs, newReview]); 
    };

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <main>
                <h2 className="main-heading">Our Song Reviews</h2>
                {/* Review Button */}
                <button className="add-review-btn" onClick={openModal}>
                    + Add Review
                </button>
                {/* Song Reviews Section */}
                <section className="song-reviews">
                    {songs.map((song, index) => (
                        <SongCard key={index} song={song} />
                    ))}
                </section>
                {/* Review Modal */}
                {isModalOpen && (
                    <AddDialog closeDialog={closeModal} addReview={handleAddReview} />
                )}
            </main>
        </>
    );
};

export default SongJournal;
