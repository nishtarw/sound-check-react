import React, { useState, useEffect } from "react";
import SongCard from "../components/SongCard";
import AddDialog from "../components/AddDialog";
import EditDialog from "../components/EditDialog";
import DeleteDialog from "../components/DeleteDialog";
import "../css/SongJournal.css";

const SongJournal = () => {
  const [songs, setSongs] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [songToEdit, setSongToEdit] = useState(null);
  const [songToDelete, setSongToDelete] = useState(null);

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
    setSongs((prevSongs) => [...prevSongs, newReview]); // Add the new review to the state
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const openEditDialog = (song) => {
    setSongToEdit(song);
    setIsEditDialogOpen(true);
  };

  const closeEditDialog = () => {
    setIsEditDialogOpen(false);
    setSongToEdit(null);
  };

  const openDeleteDialog = (song) => {
    setSongToDelete(song);
    setIsDeleteDialogOpen(true);
  };

  const closeDeleteDialog = () => {
    setIsDeleteDialogOpen(false);
    setSongToDelete(null);
  };

  // Update the song review after it's edited
  const updateReview = (updatedReview) => {
    setSongs((prevSongs) =>
      prevSongs.map((song) =>
        song._id === updatedReview._id ? updatedReview : song
      )
    );
  };

  // Remove the song after it's deleted
  const removeReview = (songId) => {
    setSongs((prevSongs) => prevSongs.filter((song) => song._id !== songId)); // Remove the review from state
  };

  return (
    <main>
      <h2 className="main-heading">Our Song Reviews</h2>
      <button className="add-review-btn" onClick={openModal}>
        + Add Review
      </button>
      <section className="song-reviews">
        {songs.map((song) => (
          <SongCard
            key={song._id} // Changed from song.id to song._id
            song={song}
            openEditDialog={openEditDialog}
            openDeleteDialog={openDeleteDialog}
          />
        ))}
      </section>

      {/* Add Review Modal */}
      {isModalOpen && <AddDialog closeDialog={closeModal} addReview={handleAddReview} />}
      
      {/* Edit Review Modal */}
      {isEditDialogOpen && songToEdit && (
        <EditDialog
          closeDialog={closeEditDialog}
          _id={songToEdit._id} // Changed from songToEdit.id to songToEdit._id
          songName={songToEdit.title}
          artistName={songToEdit.artist}
          reviewText={songToEdit.review}
          img={songToEdit.image}
          updateReview={updateReview} // Pass the function to update the review
        />
      )}

      {/* Delete Review Modal */}
      {isDeleteDialogOpen && songToDelete && (
        <DeleteDialog
          closeDialog={closeDeleteDialog}
          _id={songToDelete._id} // Changed from songToDelete.id to songToDelete._id
          songName={songToDelete.title}
          artistName={songToDelete.artist}
          removeReview={removeReview}
        />
      )}
    </main>
  );
};

export default SongJournal;
