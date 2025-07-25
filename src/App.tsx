import { Routes, Route, Navigate } from 'react-router-dom';

import ComingSoon from './pages/ComingSoon';
import Register from './pages/Register';
import Home from './pages/Home';
import Login from './pages/Login';
import AllJobs from './pages/AllJobs';

import JobGuide from './pages/guides/JobGuide';

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
            <Route path="/jobs" element={<AllJobs />} />

            {/* Guides */}
            <Route path="/jobs/:jobName" element={<JobGuide />} />

            {/* Catch-all: redirect unknown paths to root */}
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
}
