import {Route, Routes} from 'react-router-dom';
import {useServerStatus} from "./hooks/useServerStatus";
import Header from './components/Header';
import Footer from './components/Footer';

import ComingSoon from './pages/ComingSoon';
import Register from './pages/Register';
import Home from './pages/Home';
import Login from './pages/Login';
import AllJobs from './pages/AllJobs';
import NotFound from "./pages/NotFound";
import {JobGuidePage} from './pages/JobGuidePage';
import Contact from "./pages/Contact";
import Privacy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import PersonalFreeCompany from "./pages/PersonalFreeCompany";
import {useDarkMode} from './hooks/useDarkMode';
import Combat from "./pages/Combat";
import {useEffect} from "react";
import GilMaking from "./pages/GilMaking.tsx";
import CrafterGather from "./pages/CrafterGather.tsx";
import StyleDesign from "./pages/StyleDesign.tsx";

export default function App() {
    const serverStatus = useServerStatus();
    useDarkMode();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    return (
        <div className="flex flex-col min-h-screen">
            <Header serverStatus={serverStatus} />

            <main className="flex-grow dark:bg-[#2a2a2a]">
                <Routes>
                    {/* Root: Default Coming Soon */}
                    <Route path="/" element={<ComingSoon />} />

                    {/* Account Flow */}
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />

                    {/* Main Site */}
                    <Route path="/home" element={<Home />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/privacy" element={<Privacy />} />
                    <Route path="/tos" element={<TermsOfService />} />
                    <Route path="/personal-fc" element={<PersonalFreeCompany />} />

                    {/* Quick Access */}
                    <Route path="/combat" element={<Combat />} />
                    <Route path="/gil-making" element={<GilMaking />} />
                    <Route path="/crafter-gather" element={<CrafterGather />} />
                    <Route path="/style-design" element={<StyleDesign />} />

                    {/* Guides */}
                    <Route path="/all-jobs" element={<AllJobs />} />
                    <Route path="/job/:jobName" element={<JobGuidePage />} />

                    {/* Catch-all: redirect unknown paths to root */}
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </main>

            <Footer />
        </div>
    );
}
