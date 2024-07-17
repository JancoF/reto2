import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';

import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import NewVideoForm from './components/NewVideoForm/NewVideoForm';
import styled from 'styled-components';
import { VideoProvider } from './videoContext';
import EditVideoModal from './components/EditVideoModal/EditVideoModal';

const AppContainer = styled.div`
  background-color: #191919;
  min-height: 100vh;
`;

function App() {
  return (
    <VideoProvider>
      <Router>
        <AppContainer>
          <Header />
         
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nuevo-video" element={<NewVideoForm />} />
          </Routes>
      
          <Footer />

          <EditVideoModal />
        </AppContainer>
      </Router>
    </VideoProvider>
  );
}

export default App;