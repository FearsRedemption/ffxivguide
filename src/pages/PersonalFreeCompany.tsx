// src/pages/PersonalFreeCompany.tsx
import { useEffect } from "react";
import "../styles/index.css";
import { useDarkMode } from "../hooks/useDarkMode";
import { useServerStatus } from "../hooks/useServerStatus";

import Header from "../components/Header";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";

// Section component imports
import FCHero from "../components/personalfc/FCHero";
import FCOverview from "../components/personalfc/FCOverview";
import FCBenefits from "../components/personalfc/FCBenefits";
import FCRecruitment from "../components/personalfc/FCRecruitment";
import FCMembers from "../components/personalfc/FCMembers";
import FCActivities from "../components/personalfc/FCActivities";
import FCAchievements from "../components/personalfc/FCAchievements";
import FCApply from "../components/personalfc/FCApply";

export default function PersonalFreeCompany() {
    useDarkMode();
    const serverStatus = useServerStatus();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-white text-black dark:bg-[#1a1a1a] dark:text-gray-100">
            <Header serverStatus={serverStatus} />
            <PageHeader
                breadcrumbs={[
                    { label: "Home", href: "/home" },
                    { label: "Personal Free Company", href: "/personal-fc" },
                ]}
            />
            <FCHero />
            <FCOverview />
            <FCBenefits />
            <FCRecruitment />
            <FCMembers />
            <FCActivities />
            <FCAchievements />
            <FCApply />
            <Footer />
        </div>
    );
}
