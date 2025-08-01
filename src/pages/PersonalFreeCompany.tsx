// src/pages/PersonalFreeCompany.tsx
import "../styles/index.css";
import PageHeader from "../components/PageHeader";

// Section component imports
import FCHero from "../components/personalfc/FCHero";
import FCOverview from "../components/personalfc/FCOverview";
import FCBenefits from "../components/personalfc/FCBenefits";
import FCRecruitment from "../components/personalfc/FCRecruitment";
import FCMembers from "../components/personalfc/FCMembers";
import FCActivities from "../components/personalfc/FCActivities";
import FCAchievements from "../components/personalfc/FCAchievements";
import FCApply from "../components/personalfc/FCApply";
import {FCApplyFormProvider} from "../context/FCApplyFormContext.tsx";
import FCSectionNav from "../components/personalfc/FCSectionNav.tsx";

export default function PersonalFreeCompany() {
    return (
        <div className="bg-white text-black dark:bg-[#1a1a1a] dark:text-gray-100">
            <FCSectionNav />
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
            <FCApplyFormProvider>
                <section id="apply" className="container scroll-mt-24 mx-auto px-4 py-16 max-w-4xl">
                    <FCApply />
                </section>
            </FCApplyFormProvider>
        </div>
    );
}
