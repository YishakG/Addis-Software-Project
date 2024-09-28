// src/App.js
import React from 'react'; 
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import MusicPage from './Pages/MusicPage';
import Playlist from './Pages/Playlist';
import LandingPage from './Pages/LandingPage';
const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage/>} ></Route>
        <Route path='/musicpage' element={<MusicPage/>} ></Route>
        <Route path='/playlist' element={<Playlist/>} ></Route>
        
      </Routes>
    </Router>
    </>
  );
};

export default App;
