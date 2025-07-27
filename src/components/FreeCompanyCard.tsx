export default function FreeCompanyCard() {
    return (
        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-sm p-6 flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-indigo-200 dark:bg-indigo-800 flex items-center justify-center mb-4 overflow-hidden">
                <img
                    src="https://static.readdy.ai/image/ca38ae522d47c397614c1cfc96930687/2605e2f3c325a77aafde55feaeac8a94.jfif"
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
                <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-5 py-2 rounded-button font-medium whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-indigo-400">
                    Free Company
                </button>
            </a>
        </div>
    );
}
