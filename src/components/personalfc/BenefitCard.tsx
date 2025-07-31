// src/components/personalfc/BenefitCard.tsx

type BenefitCardProps = {
    icon: string;
    title: string;
    text: string;
};

export default function BenefitCard({ icon, title, text }: BenefitCardProps) {
    return (
        <div className="bg-white dark:bg-[#1a1a1a] rounded-lg shadow-sm p-6 border border-gray-100 dark:border-gray-700 hover:shadow-md transition duration-300">
            <div className="w-14 h-14 rounded-full bg-indigo-100 dark:bg-indigo-700 flex items-center justify-center mb-4">
                <i className={`${icon} text-2xl text-primary dark:text-indigo-300`}></i>
            </div>
            <h3 className="font-bold text-gray-900 dark:text-white mb-3">{title}</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">{text}</p>
        </div>
    );
}
