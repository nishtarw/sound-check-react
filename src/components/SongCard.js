import React from 'react';
import '../css/SongJournal.css';

const SongCard = ({ song, openEditDialog, openDeleteDialog }) => {
  return (
    <div className="review-card">
      <img 
        src={`https://sound-check-server.onrender.com${song.image}`} 
        alt={`${song.title} - ${song.artist}`} 
        className="song-image" 
      />

      <p className="small-text">Originally reviewed on Nov 12, 2018. Licensed under CC BY 2.0.</p>
      <div className="review-header">
        <span className="song-title">Song Title: {song.title}</span>
        <span className="artist">Artist: {song.artist}</span>
      </div>
      <div className="review-content">
        <h3>My Review</h3>
        <p>{song.review}</p>
      </div>

      {/* Edit and Delete buttons */}
      <div className="song-actions">
        <button onClick={() => openEditDialog(song)}>Edit</button>
        <button onClick={() => openDeleteDialog(song)}>Delete</button>
      </div>
    </div>
  );
};

export default SongCard;
