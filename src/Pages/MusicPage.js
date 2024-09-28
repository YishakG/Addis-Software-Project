/** @jsxImportSource @emotion/react */
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MusicCard from "../Component/musicCard";
import { Link } from "react-router-dom";
import backgroundImage from '../Assets/background.webp';
import styled from '@emotion/styled';
import image from "../Assets/notfound.jpg";
const MusicPage = () => {
    const dispatch = useDispatch(); 
    const musicList = useSelector((state) => state.music.musicList);
    const count = useSelector((state) => state.music.count);
    const [query, setQuery] = useState('');

    const handleSearch = () => {
        if (!query) return;
        dispatch({ type: 'music/search', payload: query });
    };

    return (
        <Container>
            <SearchContainer>
                <Header>Music Page</Header>
                <SearchInputWrapper>
                    <SearchInput
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search for music"
                    />
                    <SearchButton onClick={handleSearch}>Search</SearchButton>
                </SearchInputWrapper>
                <LinkContainer>
                    <StyledLink to="/playlist">My Playlist</StyledLink>
                    <CartCount>{count}</CartCount>
                </LinkContainer>
            </SearchContainer>
            <MusicList>
                {musicList.map((item,index) => (
                    <MusicCard
                    key={item?.data?.uri || index} 
                    coverImage={item?.data?.albumOfTrack?.coverArt?.sources?.[0]?.url || image }
                    artistName={item?.data?.artists?.items?.[0]?.profile?.name || 'Unknown Artist'}
                    trackName={item?.data?.name || 'Unknown Track'}
                    duration={item?.data?.duration?.totalMilliseconds || 0} 
                    spotifyUrl={item?.data?.uri || '#'} 
                />
                
                ))}
            </MusicList>
        </Container>
    );
};

export default MusicPage;

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
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    width: 100%;
    max-width: 1200px;
    margin-bottom: 40px;

    @media (max-width: 600px) {
        flex-direction: column;
        align-items: flex-start;
        padding: 15px;
    }
`;

const Header = styled.h2`
    font-size: 2rem;
    color: #FFFFFF;
    text-align: left; 
    flex-basis: 25%; 
    margin-top: 8px;

    @media (max-width: 600px) {
        font-size: 1.5rem;
        flex-basis: 100%;
    }
`;

const SearchInputWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-basis: 50%; 

    @media (max-width: 600px) {
        flex-basis: 100%;
        margin-top: 10px;
    }
`;

const SearchInput = styled.input`
    padding: 10px;
    width: 70%; 
    font-size: 1rem;
    border: 2px solid #007bff;
    border-radius: 5px;
    margin-right: 10px;
    margin-left: 10px;

    &:focus {
        outline: none;
        border-color: #0056b3;
    }

    @media (max-width: 600px) {
        width: 167px;
        margin-right: 8px;
        margin-bottom: 0;
    }
`;

const SearchButton = styled.button`
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
    margin-left: 10px; 
    margin-bottom: 10px;
    margin-top: 10px;

    &:hover {
        background-color: #0056b3;
    }

    @media (max-width: 600px) {
        width: 100%;
        margin-top: 10px;
    }
`;
const LinkContainer = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    flex-basis: 25%;
    justify-content: flex-end;
    

    @media (max-width: 600px) {
        flex-basis: 100%;
        justify-content: flex-start;
        margin-top: 10px;
        margin-left: 10px
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
`;

const CartCount = styled.div`
    background-color: red;
    color: white;
    font-size: 0.9rem;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: -10px;
    right: 20px;
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
