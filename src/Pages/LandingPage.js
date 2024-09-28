/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { useState } from 'react';
import backgroundImage from '../Assets/background.webp';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
    const [showDialogBox, setDialogBox] = useState(false);
    const navigate = useNavigate();

    const OpenDialogBox = () => {
        setDialogBox(true);
    };

    const CloseDialogBox = () => {
        setDialogBox(false);
    };

    const handleNavigate = () => {
        navigate("/musicpage"); 
    };

    return (
        <Container css={fadeIn}>
            <Title>Welcome to Our Music App!</Title>
            <Subtitle onClick={OpenDialogBox}>"You can create, update, and delete songs into your Playlist."</Subtitle>
            <Button onClick={handleNavigate}>Get Started</Button>

            {showDialogBox && (
                <DialogBox onClick={CloseDialogBox}>
                    <DialogBoxContent>
                        <h2>Powered by Spotify API</h2>
                        <p>Your music experience is powered by Spotify API, providing seamless music integration.</p>
                        <CloseButton onClick={CloseDialogBox}>Close</CloseButton>
                    </DialogBoxContent>
                </DialogBox>
            )}
        </Container>
    );
};

export default LandingPage;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background: url(${backgroundImage}) no-repeat center center; 
    background-size: cover; 
    text-align: center;
    padding: 10px;
`;

const fadeIn = css`
    animation: fadeIn 5s ease-in-out;
    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;

const Title = styled.h1`
    font-size: 3rem;
    color: #FFFFFF;
    &:hover { 
        color: #FFD700;        
    }
`;

const Subtitle = styled.p`
    font-size: 1.5rem;
    color: #FFFFFF;  
    margin: 25px 1px;
    &:hover {
        cursor: pointer;
        font-size: 1.55rem;
    }
`;

const Button = styled.button` 
    padding: 10px 20px;
    font-size: 1rem;
    color: white;
    background-color: #007bff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 30px;
    transition: background-color 0.3s;

    &:hover {
        background-color: #0056b3;
    }
`;

const DialogBox = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999;
`;

const DialogBoxContent = styled.div`
    background: #D3D3D3;
    padding: 40px;
    border-radius: 8px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    text-align: center;
    margin: 20px;
`;

const CloseButton = styled.button`
    margin-top: 20px;
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
        background-color: #0056b3;
    }
`;
