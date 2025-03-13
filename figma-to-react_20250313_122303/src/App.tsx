import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Customer from './components/Customer';
import Customer1 from './components/Customer1';
import Customercamspecs1 from './components/Customercamspecs1';
import Customersettings from './components/Customersettings';
import Customersetup2 from './components/Customersetup2';
import Loginpage from './components/Loginpage';

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
        <Route path="/" element={<Navigate to="/customer" replace />} />
        <Route path="/customer" element={<Customer />} />
        <Route path="/customer1" element={<Customer1 />} />
        <Route path="/customercamspecs1" element={<Customercamspecs1 />} />
        <Route path="/customersettings" element={<Customersettings />} />
        <Route path="/customersetup2" element={<Customersetup2 />} />
        <Route path="/loginpage" element={<Loginpage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
