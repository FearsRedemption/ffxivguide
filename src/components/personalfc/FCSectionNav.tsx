// src/components/personalfc/FCSectionNav.tsx
export default function FCSectionNav() {
    const sections = [
        { id: 'hero', label: 'Top' },
        { id: 'overview', label: 'Overview' },
        { id: 'benefits', label: 'Benefits' },
        { id: 'recruitment', label: 'Recruitment' },
        { id: 'members', label: 'Members' },
        { id: 'activities', label: 'Activities' },
        { id: 'achievements', label: 'Achievements' },
        { id: 'apply', label: 'Apply' },
    ];

    return (
        <nav className="hidden lg:flex fixed top-32 left-4 flex-col space-y-3 bg-white/90 dark:bg-[#1a1a1a]/90 p-4 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-30 backdrop-blur">
            {sections.map(section => (
                <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="text-sm font-medium text-gray-800 dark:text-gray-200 hover:text-primary transition"
                >
                    {section.label}
                </a>
            ))}
        </nav>
    );
}
