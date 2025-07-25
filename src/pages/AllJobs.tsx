import { Link } from 'react-router-dom';

export default function AllJobs() {
    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold">All Job Guides</h1>
            <ul className="mt-4 space-y-2">
                <li><Link to="/jobs/paladin" className="text-blue-600 hover:underline">Paladin</Link></li>
                <li><Link to="/jobs/warrior" className="text-blue-600 hover:underline">Warrior</Link></li>
                {/* Add other links */}
            </ul>
        </div>
    );
}
