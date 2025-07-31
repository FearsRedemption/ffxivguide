import juniLogo from '../../assets/images/juni.png';

export default function FreeCompanyCard() {
    return (
        <div className="bg-white dark:bg-[#2d2d2d] border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm p-6 flex flex-col items-center text-center transition duration-300 hover:shadow-md">
            <div className="w-32 h-32 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center mb-4 overflow-hidden">
                <img
                    src={juniLogo}
                    alt="Free Company Logo"
                    className="w-full h-full object-cover"
                />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">The UwU Crew</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">Join our personal Free Company in-game!</p>
            <a
                href="/personal-fc"
            >
                <button className="cursor-pointer bg-blue-700 hover:bg-indigo-700 text-white px-6 py-3 rounded-button font-medium whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-indigo-400">
                    Free Company
                </button>
            </a>
        </div>
    );
}
