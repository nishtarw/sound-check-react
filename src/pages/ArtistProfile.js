import React, { useState, useEffect } from 'react';
import ArtistCard from '../components/ArtistCard';

const ArtistProfile = () => {
  const [artistData, setArtistData] = useState([]);
  const [loading, setLoading] = useState(true);  // To show loading state while fetching

  useEffect(() => {
    // Fetch data from your server
    fetch('http://localhost:5000/api/artists')  // Replace with your actual API endpoint
      .then(response => response.json())  // Parse the response to JSON
      .then(data => {
        setArtistData(data);  // Set the data from the server
        setLoading(false);  // Hide loading indicator after data is fetched
      })
      .catch(error => {
        console.error('Error fetching artist data:', error);
        setLoading(false);  // Hide loading in case of error
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;  // Display loading message until data is fetched
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
