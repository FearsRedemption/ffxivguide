// src/components/jobguide/JobGuideSectionNav.tsx
export default function JobGuideSectionNav({ hasOpeners, hasMitigation, hasHealing, hasTips }: {
    hasOpeners: boolean | undefined;
    hasMitigation: boolean | undefined;
    hasHealing: boolean | undefined;
    hasTips: boolean | undefined;
}) {
    const sections = [
        { id: 'summary', label: 'Summary' },
        ...(hasOpeners ? [{ id: 'openers', label: 'Openers' }] : []),
        { id: 'single', label: 'Single Target' },
        { id: 'aoe', label: 'AoE' },
        ...(hasMitigation ? [{ id: 'mitigation', label: 'Mitigation' }] : []),
        ...(hasHealing ? [{ id: 'healing', label: 'Healing' }] : []),
        ...(hasTips ? [{ id: 'tips', label: 'Tips' }] : []),
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
