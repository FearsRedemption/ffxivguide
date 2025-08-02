// src/App.tsx
import { Route, Routes, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useServerStatus } from './hooks/useServerStatus';
import { useDarkMode } from './hooks/useDarkMode';

import Header from './components/Header';
import Footer from './components/Footer';
import ProtectedRoute from './components/ProtectedRoute';

import ComingSoon from './pages/ComingSoon';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Privacy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import PersonalFreeCompany from './pages/PersonalFreeCompany';
import Combat from './pages/Combat';
import GilMaking from './pages/GilMaking';
import CrafterGather from './pages/CrafterGather';
import StyleDesign from './pages/StyleDesign';
import AllJobs from './pages/AllJobs';
import { JobGuidePage } from './pages/JobGuidePage';
import NotFound from './pages/NotFound';

export default function App() {
    const serverStatus = useServerStatus();
    const location = useLocation();
    useDarkMode();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    const isComingSoon = location.pathname === '/';

    return (
        <div className="flex flex-col min-h-screen">
            {!isComingSoon && <Header serverStatus={serverStatus} />}

            <main className="flex-grow dark:bg-[#2a2a2a]">
                <Routes>
                    {/* Root: Default Coming Soon */}
                    <Route path="/" element={<ComingSoon />} />

                    {/* Account Flow */}
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />

                    {/* Protected Main Site Routes */}
                    <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
                    <Route path="/contact" element={<ProtectedRoute><Contact /></ProtectedRoute>} />
                    <Route path="/privacy" element={<ProtectedRoute><Privacy /></ProtectedRoute>} />
                    <Route path="/tos" element={<ProtectedRoute><TermsOfService /></ProtectedRoute>} />
                    <Route path="/personal-fc" element={<ProtectedRoute><PersonalFreeCompany /></ProtectedRoute>} />
                    <Route path="/combat" element={<ProtectedRoute><Combat /></ProtectedRoute>} />
                    <Route path="/gil-making" element={<ProtectedRoute><GilMaking /></ProtectedRoute>} />
                    <Route path="/crafter-gather" element={<ProtectedRoute><CrafterGather /></ProtectedRoute>} />
                    <Route path="/style-design" element={<ProtectedRoute><StyleDesign /></ProtectedRoute>} />
                    <Route path="/all-jobs" element={<ProtectedRoute><AllJobs /></ProtectedRoute>} />
                    <Route path="/job/:jobName" element={<ProtectedRoute><JobGuidePage /></ProtectedRoute>} />

                    {/* Catch-all */}
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </main>

            {!isComingSoon && <Footer />}
        </div>
    );
}
