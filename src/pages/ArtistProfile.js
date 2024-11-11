import React, { useState, useEffect } from 'react';
import ArtistCard from '../components/ArtistCard';

const ArtistProfile = () => {
  const [artistData, setArtistData] = useState([]);
  const [loading, setLoading] = useState(true);  

  useEffect(() => {
    
    fetch('https://sound-check-server.onrender.com')  
      .then(response => response.json())  
      .then(data => {
        setArtistData(data);  
        setLoading(false);  
      })
      .catch(error => {
        console.error('Error fetching artist data:', error);
        setLoading(false);  
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>; 
  }

  return (
    <div className="artist-profiles">
      <h1 className="centered-heading">Artist Profile</h1>
      <div className="artist-grid">
        {artistData.map((artist) => (
          <ArtistCard key={artist._id} artist={artist} />
        ))}
      </div>
    </div>
  );
};

export default ArtistProfile;
