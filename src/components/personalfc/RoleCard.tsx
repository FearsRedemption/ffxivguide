// src/components/personalfc/cards/RoleCard.tsx

type RoleCardProps = {
    title: string;
    jobs: string;
    need: "Low" | "Medium" | "High";
};

const needClassMap = {
    Low: "text-easy",
    Medium: "text-medium",
    High: "text-hard",
};

export default function RoleCard({ title, jobs, need }: RoleCardProps) {
    return (
        <div className="border border-gray-200 dark:border-gray-700 rounded-md p-4 bg-white dark:bg-[#2a2a2a]">
            <h4 className="font-semibold text-gray-800 dark:text-white">{title}</h4>
            <p className="text-gray-600 dark:text-gray-300 text-sm">{jobs}</p>
            <span className={`inline-block mt-2 text-xs font-medium ${needClassMap[need]}`}>
                {need} Need
            </span>
        </div>
    );
}
