/** @jsxImportSource @emotion/react */
import { useSelector } from "react-redux";
import PlaylistCard from "../Component/playlistCard";
import { Link } from "react-router-dom";
import backgroundImage from '../Assets/background.webp';
import styled from '@emotion/styled';

const Playlist = () => {
    const PlayList = useSelector((state) => state.music.Playlist);

    return (
        <Container>
            <SearchContainer>
                <Header>My Playlist</Header>
                <LinkContainer>
                    <StyledLink to="/musicpage">Music Page</StyledLink>
                </LinkContainer>
            </SearchContainer>

            <MusicList>
                {PlayList.length > 0 ? (
                    PlayList.map((item, index) => (
                        <PlaylistCard
                            key={item.spotifyUrl || index}
                            coverImage={item.coverImage}
                            artistName={item.artistName}
                            trackName={item.trackName}
                            duration={item.duration}
                            spotifyUrl={item.spotifyUrl}
                        />
                    ))
                ) : (
                    <NoSongsMessage>Your playlist is empty. Add some music to get started!</NoSongsMessage>
                )}
            </MusicList>
        </Container>
    );
};

export default Playlist;

const Container = styled.div`
    padding: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f0f0f0;
    min-height: 100vh;
    background: url(${backgroundImage}) no-repeat center center;
    background-size: cover;
`;

const SearchContainer = styled.div`
    display: flex;
    justify-content: space-between;  
    align-items: center;
    padding: 20px;
    background-color: transparent; 
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    width: 100%;
    max-width: 1200px;
    margin-bottom: 40px;

    @media (max-width: 600px) {
        flex-direction: column;
        align-items: flex-start;
        padding: 10px;
    }
`;

const Header = styled.h2`
    font-size: 2rem;
    color: #FFFFFF;
    padding-left: 20%;
    text-align: center; 
    flex-basis: 75%; 

    @media (max-width: 600px) {
        font-size: 1.5rem;
        padding-left: 0;
        text-align: left;
    }
`;

const LinkContainer = styled.div`
    display: flex;
    align-items: center;
    flex-basis: 25%; 
    justify-content: flex-end; 

    @media (max-width: 600px) {
        justify-content: flex-start;
        margin-top: 10px;
        flex-basis: 100%;
    }
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: #333;
    background-color: #FFFFFF;
    font-size: 1.2rem;
    margin-right: 10px;
    padding: 8px 16px; 
    border-radius: 5px; 
    border: 1px solid #ddd;
    transition: background-color 0.3s ease, color 0.3s ease; 

    &:hover {
        text-decoration: underline;
        background-color: #333; 
        color: #FFFFFF;
    }

    &:active {
        background-color: #ddd; 
        color: #1db954;
    }

    @media (max-width: 600px) {
        font-size: 1rem; 
        padding: 6px 12px; 
    }
`;

const MusicList = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    width: 100%;
    max-width: 1200px;

    @media (max-width: 600px) {
        grid-template-columns: 1fr; 
        gap: 10px; 
    }
`;

const NoSongsMessage = styled.p`
    font-size: 1.2em;
    color: #FFFFFF;
    text-align: center;
    width: 100%;
`;
