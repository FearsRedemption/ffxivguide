// src/components/JobCard.tsx
interface JobCardProps {
    name: string;
    role: string;
    icon: string;
    link: string;
    roleColor: string;
    roleBg: string;
}

export default function JobCard({ name, role, icon, link, roleColor, roleBg }: JobCardProps) {
    return (
        <a href={link} className="block rounded-lg overflow-hidden shadow-sm border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#2d2d2d] transition-transform hover:-translate-y-1">
            <div className="flex flex-col items-center p-4">
                <img src={icon} alt={`${name} icon`} className="w-16 h-16 mb-2" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{name}</h3>
                <p className={`text-sm mt-1 px-2 py-1 rounded-full ${roleBg} ${roleColor}`}>{role}</p>
            </div>
        </a>
    );
}
