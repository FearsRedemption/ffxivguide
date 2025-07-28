import juniLogo from '../assets/images/juni.png';

export default function FreeCompanyCard() {
    return (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 flex flex-col items-center text-center">
            <div className="w-32 h-32 rounded-full bg-indigo-200 dark:bg-indigo-800 flex items-center justify-center mb-4 overflow-hidden">
                <img
                    src={juniLogo}
                    alt="Free Company Logo"
                    className="w-full h-full object-cover"
                />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">The UwU Crew</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">Join our personal Free Company in-game!</p>
            <a
                href="https://readdy.ai/home/fd15a5a4-ace7-46c4-b191-110ce699c87e/bd1554c1-bf38-4082-a3b6-c0cc41b4e774"
                data-readdy="true"
            >
                <button className="bg-blue-700 hover:bg-indigo-700 text-white px-5 py-2 rounded-button font-medium whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-indigo-400">
                    Free Company
                </button>
            </a>
        </div>
    );
}
