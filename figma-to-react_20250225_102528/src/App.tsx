import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Hr from './components/Hr';

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/hr" element={<Hr />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
