import React from 'react';
    import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
    import Loginuser from './components/Loginuser';
import Updateuser from './components/Updateuser';

    const App: React.FC = () => {
        return (
            <BrowserRouter>
                <Routes>
            <Route path="/" element={<Navigate to="/Loginuser" replace />} />
        <Route path="/Loginuser" element={<Loginuser />} />
        <Route path="/Updateuser" element={<Updateuser />} />
                </Routes>
            </BrowserRouter>
        );
    };

    export default App;
    