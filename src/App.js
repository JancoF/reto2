import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NewVideoForm from './components/NewVideoForm/NewVideoForm';
import styled from 'styled-components';
import { VideoProvider } from './videoContext';

const AppContainer = styled.div`
  background-color: #000000;
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
        </AppContainer>
      </Router>
    </VideoProvider>
  );
}

export default App;