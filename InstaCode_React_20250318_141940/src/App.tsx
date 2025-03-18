import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Accountinfo from './components/Accountinfo';
import Customer from './components/Customer';
import Customerassetmanagement from './components/Customerassetmanagement';

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
        <Route path="/" element={<Navigate to="/accountinfo" replace />} />
        <Route path="/accountinfo" element={<Accountinfo />} />
        <Route path="/customer" element={<Customer />} />
        <Route path="/customerassetmanagement" element={<Customerassetmanagement />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
