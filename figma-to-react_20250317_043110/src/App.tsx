import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Newguidlines1 from './components/Newguidlines1';
import Newguidlines2 from './components/Newguidlines2';

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
        <Route path="/" element={<Navigate to="/newguidlines1" replace />} />
        <Route path="/newguidlines1" element={<Newguidlines1 />} />
        <Route path="/newguidlines2" element={<Newguidlines2 />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
