import { Link } from 'react-router-dom';

export default function AllJobs() {
    return (
        <div className="min-h-screen bg-slate-900 text-white px-4 py-10">
            <div className="max-w-3xl mx-auto bg-slate-800/80 backdrop-blur-md p-8 rounded-lg border border-slate-700 shadow-md">
                <h1 className="text-3xl font-bold mb-6 text-center text-white">All Job Guides</h1>
                <ul className="space-y-4">
                    <li>
                        <Link
                            to="/jobs/paladin"
                            className="block w-full text-lg font-medium text-white bg-primary hover:bg-opacity-90 px-6 py-3 rounded-button transition-colors text-center"
                        >
                            Paladin
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/jobs/warrior"
                            className="block w-full text-lg font-medium text-white bg-primary hover:bg-opacity-90 px-6 py-3 rounded-button transition-colors text-center"
                        >
                            Warrior
                        </Link>
                    </li>
                    {/* Add more job links here */}
                </ul>
            </div>
        </div>
    );
}
