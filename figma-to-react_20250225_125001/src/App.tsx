// Import the React library
import React from 'react';

// Import necessary components from react-router-dom for routing
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Import the Home component
import Home from './components/Home';

// Import the Hr component
import Hr from './components/Hr';

// Define the main App component as a functional component
const App: React.FC = () => {
    // Return the JSX for the component
    return (
        // Set up the router to manage navigation
        <BrowserRouter>
            {/* Define the routes for the application */}
            <Routes>
                {/* Redirect from the root path to the /home path */}
                <Route path="/" element={<Navigate to="/home" replace />} />
                {/* Define the route for the Home component */}
                <Route path="/home" element={<Home />} />
                {/* Define the route for the Hr component */}
                <Route path="/hr" element={<Hr />} />
            </Routes>
        </BrowserRouter>
    );
};

// Export the App component as the default export
export default App;