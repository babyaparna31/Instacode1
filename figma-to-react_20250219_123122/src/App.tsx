import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Design from './components/Design';

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
        <Route path="/" element={<Navigate to="/design" replace />} />
        <Route path="/design" element={<Design />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
