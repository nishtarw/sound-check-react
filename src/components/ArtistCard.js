import React, { useState } from 'react';
import '../css/ArtistProfile.css';

const ArtistCard = ({ artist }) => {
    const [visibleSection, setVisibleSection] = useState('bio'); 
    const [isVisible, setIsVisible] = useState(false); 

    const navigate = (direction) => {
        const sections = ['bio', 'discography', 'events'];
        const currentIndex = sections.indexOf(visibleSection);
        const newIndex = (currentIndex + direction + sections.length) % sections.length;
        setVisibleSection(sections[newIndex]);
    };

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div className="artist-card">
            <img src={artist.image} alt={artist.name} className="artist-image" />
            <div className="artist-info">
                <h2 className="artist-name">{artist.name}</h2>
                <p className="artist-genre"><strong>Genre:</strong> {artist.genre}</p>
                <p className="artist-country"><strong>Country:</strong> {artist.country}</p>
                
                <div className="artist-bio-container">
                    <button onClick={toggleVisibility} className="toggle-button">
                        {isVisible ? 'Hide Information' : 'Show Information'}
                    </button>
                    {isVisible && (
                        <>
                            {visibleSection === 'bio' && (
                                <>
                                    <h3 className="current-section">Biography</h3>
                                    <p className="artist-bio">{artist.biography}</p>
                                </>
                            )}
                            {visibleSection === 'discography' && (
                                <>
                                    <h3 className="current-section">Discography</h3>
                                    <ul>
                                        {artist.discography.map((album, index) => (
                                            <li key={index}>{album}</li>
                                        ))}
                                    </ul>
                                </>
                            )}
                            {visibleSection === 'events' && (
                                <>
                                    <h3 className="current-section">Upcoming Events</h3>
                                    <p>{artist.upcomingEvents}</p>
                                </>
                            )}
                            {}
                            <div className="nav-arrows">
                                <button onClick={() => navigate(-1)}>← Previous</button>
                                <button onClick={() => navigate(1)}>Next →</button>
                            </div>
                        </>
                    )}
                </div>
            </div>
            <p className="image-credit">{artist.image_credit}</p>
        </div>
    );
};

export default ArtistCard;
