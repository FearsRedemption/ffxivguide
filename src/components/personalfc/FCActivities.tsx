import Calendar from './FCActivitiesCalendar';
import {UpcomingEvents} from './UpcomingEvents';

export default function FCActivities() {
    return (
        <section id="activities" className="scroll-mt-24 py-16 bg-gray-50 dark:bg-[#1f1f1f]">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
                        FC Activities Calendar
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300 text-sm max-w-2xl mx-auto">
                        Stay up to date with our scheduled events and activities
                    </p>
                </div>

                <Calendar />
                <UpcomingEvents />
            </div>
        </section>
    );
}
