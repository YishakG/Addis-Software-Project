import React from 'react';
import { useDispatch } from 'react-redux';
import { addMusic } from '../redux/Features/musicSlice';


const MusicCard = ({ coverImage, artistName, trackName, duration, spotifyUrl }) => {
    
    const formatDuration = (milliseconds) => {
        const minutes = Math.floor(milliseconds / 60000);
        const seconds = Math.floor((milliseconds % 60000) / 1000);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`; 
    };
    const dispatch = useDispatch();
    const trackID = spotifyUrl.split(':')[2];
    const URL = `https://open.spotify.com/track/${trackID}`;
    
    const AddMusic = () => {
        const musicDetails = {
            coverImage,
            artistName,
            trackName,
            duration,
            spotifyUrl: URL, 
        };
        dispatch(addMusic(musicDetails));
        alert(`${trackName} has been added successfully!`);
    }

    return (
        <div className="music-card" style={styles.card}>
            <img src={coverImage} alt={trackName} style={styles.coverImage} />
            <div style={styles.content}>
                <h3 style={styles.trackName}>{trackName}</h3>
                <p style={styles.artistName}>{artistName}</p>
                <p style={styles.duration}>{formatDuration(duration)}</p>
                <a href={URL} target="_blank" rel="noopener noreferrer" style={styles.link}>
                    Listen on Spotify
                </a>
                <button onClick={AddMusic} style={styles.button}>Add to Playlist</button>
            </div>
        </div>
    );
};


const styles = {
    card: {
        borderRadius: '16px',
        overflow: 'hidden',
        padding: '16px',
        margin: '16px',
        maxWidth: '250px',
        textAlign: 'center',
        boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)', 
        background: 'linear-gradient(135deg, #e0eafc, #cfdef3)', 
        transition: 'transform 0.3s ease, box-shadow 0.3s ease', 
    },
    cardHover: {
        transform: 'scale(1.05)',
        boxShadow: '0 12px 24px rgba(0, 0, 0, 0.25)',
    },
    coverImage: {
        width: '100%',
        height: 'auto',
        borderRadius: '8px',
        marginBottom: '12px',
    },
    content: {
        marginTop: '12px',
        color: '#333',
    },
    trackName: {
        fontSize: '1.4em',
        fontWeight: '600',
        margin: '0.5em 0',
        color: '#333',
    },
    artistName: {
        fontSize: '1.1em',
        color: '#555',
        marginBottom: '10px',
    },
    duration: {
        fontSize: '0.9em',
        color: '#888',
        marginBottom: '12px',
    },
    link: {
        display: 'inline-block',
        padding: '8px 16px',
        margin: '10px 0',
        backgroundColor: '#1db954',
        color: '#fff',
        textDecoration: 'none',
        borderRadius: '24px',
        transition: 'background-color 0.3s ease',
    },
    linkHover: {
        backgroundColor: '#17a24b',
    },
    button: {
        padding: '10px 16px',
        backgroundColor: '#ff6b6b',
        color: '#fff',
        border: 'none',
        borderRadius: '24px',
        cursor: 'pointer',
        fontSize: '1rem',
        transition: 'background-color 0.3s ease',
    },
    buttonHover: {
        backgroundColor: '#e55b5b',
    },
};

export default MusicCard;
