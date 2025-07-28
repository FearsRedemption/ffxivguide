import { Routes, Route } from 'react-router-dom';

import ComingSoon from './pages/ComingSoon';
import Register from './pages/Register';
import Home from './pages/Home';
import Login from './pages/Login';
import AllJobs from './pages/AllJobs';
import NotFound from "./pages/NotFound.tsx";

export default function App() {
    return (
        <Routes>
            {/* Root: Default Coming Soon */}
            <Route path="/" element={<ComingSoon />} />

            {/* Account Flow */}
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />

            {/* Main Site */}
            <Route path="/home" element={<Home />} />

            {/* Guides */}
            <Route path="/all-jobs" element={<AllJobs />} />

            {/* Catch-all: redirect unknown paths to root */}
            <Route path="*" element={<NotFound />} />
        </Routes>
        
    );
}
