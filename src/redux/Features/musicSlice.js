import { createSlice } from "@reduxjs/toolkit";

const musicSlice = createSlice({
    name: 'music',
    initialState : {
        musicList: [],
        Playlist: JSON.parse(localStorage.getItem('playlist')) || [],
        count: JSON.parse(localStorage.getItem('playlist'))?.length || 0, 
    },
    reducers: {
        setMusic (state,action) {
            state.musicList = action.payload
        },
        addMusic (state,action) {
            state.Playlist = [...state.Playlist,action.payload]
            state.count = state.Playlist.length
            localStorage.setItem('playlist', JSON.stringify(state.Playlist));
        },
        removeMusic (state,action) {
            state.Playlist = state.Playlist.filter(
                (track) => track.spotifyUrl !== action.payload.spotifyUrl
            );
            state.count = state.Playlist.length
            localStorage.setItem('playlist', JSON.stringify(state.Playlist)); 
        },
        updateMusic: (state, action) => {
            const index = state.Playlist.findIndex(song => song.spotifyUrl === action.payload.spotifyUrl);
            if (index !== -1) {
                state.Playlist[index] = action.payload; 
            }
            localStorage.setItem('playlist', JSON.stringify(state.Playlist)); 
        },
    }
});
export const { setMusic , addMusic , removeMusic , updateMusic } = musicSlice.actions;

export default musicSlice.reducer;