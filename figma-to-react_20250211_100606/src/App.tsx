import React from 'react';
    import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
    import Frame2 from './components/Frame2';
import Loginuser from './components/Loginuser';

    const App: React.FC = () => {
        return (
            <BrowserRouter>
                <Routes>
            <Route path="/" element={<Navigate to="/Frame2" replace />} />
        <Route path="/Frame2" element={<Frame2 />} />
        <Route path="/Loginuser" element={<Loginuser />} />
                </Routes>
            </BrowserRouter>
        );
    };

    export default App;
    