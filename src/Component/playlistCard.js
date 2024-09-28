import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeMusic, updateMusic } from '../redux/Features/musicSlice';

const PlaylistCard = ({ coverImage, artistName, trackName, duration, spotifyUrl }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [updatedTrackName, setUpdatedTrackName] = useState(trackName);
    const [updatedArtistName, setUpdatedArtistName] = useState(artistName);
    const dispatch = useDispatch();

    const formatDuration = (milliseconds) => {
        const minutes = Math.floor(milliseconds / 60000);
        const seconds = Math.floor((milliseconds % 60000) / 1000);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    const remove = () => {
        const musicDetails = { coverImage, artistName, trackName, duration, spotifyUrl };
        dispatch(removeMusic(musicDetails));
        alert(`${trackName} has been removed successfully!`);
    };

    const update = (e) => {
        e.preventDefault();
        const updatedMusicDetails = { coverImage, artistName: updatedArtistName, trackName: updatedTrackName, duration, spotifyUrl };
        dispatch(updateMusic(updatedMusicDetails));
        alert(`${trackName} has been updated successfully!`);
        setIsEditing(false);
    };

    return (
        <div className="playlist-card" style={styles.card}>
            <img src={coverImage} alt={trackName} style={styles.coverImage} />
            <div style={styles.content}>
                {isEditing ? (
                    <form onSubmit={update} style={styles.form}>
                        <input
                            type="text"
                            value={updatedTrackName}
                            onChange={(e) => setUpdatedTrackName(e.target.value)}
                            style={styles.input}
                        />
                        <input
                            type="text"
                            value={updatedArtistName}
                            onChange={(e) => setUpdatedArtistName(e.target.value)}
                            style={styles.input}
                        />
                        <div style={styles.buttonContainer}>
                            <button type="submit" style={styles.saveButton}>Save</button>
                            <button type="button" onClick={() => setIsEditing(false)} style={styles.cancelButton}>Cancel</button>
                        </div>
                    </form>
                ) : (
                    <>
                        <h3 style={styles.trackName}>{trackName}</h3>
                        <p style={styles.artistName}>{artistName}</p>
                        <p style={styles.duration}>{formatDuration(duration)}</p>
                        <a href={spotifyUrl} target="_blank" rel="noopener noreferrer" style={styles.spotifyLink}>
                            Listen on Spotify
                        </a>
                        <div style={styles.buttonContainer}>
                            <button onClick={remove} style={styles.removeButton}>Remove</button>
                            <button onClick={() => setIsEditing(true)} style={styles.editButton}>Update</button>
                        </div>
                    </>
                )}
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
    spotifyLink: {
        display: 'inline-block',
        padding: '8px 16px',
        margin: '10px 0',
        backgroundColor: '#1db954',
        color: '#fff',
        textDecoration: 'none',
        borderRadius: '24px',
        transition: 'background-color 0.3s ease',
    },
    input: {
        display: 'block',
        width: '90%',
        padding: '10px',
        margin: '8px auto',
        borderRadius: '8px',
        border: '1px solid #ced4da',
        fontSize: '1em',
    },
    buttonContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '16px',
    },
    saveButton: {
        padding: '8px 16px',
        backgroundColor: '#1db954',
        color: '#fff',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        fontWeight: 'bold',
        transition: 'background-color 0.3s ease',
    },
    cancelButton: {
        padding: '8px 16px',
        backgroundColor: '#f44336',
        color: '#fff',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        fontWeight: 'bold',
        transition: 'background-color 0.3s ease',
    },
    removeButton: {
        padding: '8px 12px',
        backgroundColor: '#f44336',
        color: '#fff',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        fontWeight: 'bold',
        transition: 'background-color 0.3s ease',
    },
    editButton: {
        padding: '8px 12px',
        backgroundColor: '#ffc107',
        color: '#212529',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        fontWeight: 'bold',
        transition: 'background-color 0.3s ease',
    }
};

export default PlaylistCard;
