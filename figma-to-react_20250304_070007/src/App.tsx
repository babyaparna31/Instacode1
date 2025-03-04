import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Customer from './components/Customer';
import Customercamspecs from './components/Customercamspecs';
import Loginpage from './components/Loginpage';

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
        <Route path="/" element={<Navigate to="/customer" replace />} />
        <Route path="/customer" element={<Customer />} />
        <Route path="/customercamspecs" element={<Customercamspecs />} />
        <Route path="/loginpage" element={<Loginpage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
