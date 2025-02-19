import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Allfigmaelement from './components/Allfigmaelement';
import Containers from './components/Containers';
import Home from './components/Home';
import Hr from './components/Hr';

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/allfigmaelement" element={<Allfigmaelement />} />
        <Route path="/containers" element={<Containers />} />
        <Route path="/home" element={<Home />} />
        <Route path="/hr" element={<Hr />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
