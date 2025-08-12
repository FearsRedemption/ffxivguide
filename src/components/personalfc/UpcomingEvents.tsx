// src/components/personalfc/UpcomingEvents.tsx
import { useEffect, useState } from 'react';
import fcEvents from '../../data/fc/fcEventsData';

type Event = {
    title: string;
    date: string;
    time: string;
    color: string;
    description: string;
    organizer?: string;
};

function isWithinNextTwoWeeks(eventDateStr: string): boolean {
    const [month, day, year] = eventDateStr.split('/');
    const eventDate = new Date(`${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`); // YYYY-MM-DD
    const today = new Date();

    // Clear time portion for exact date diff
    eventDate.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0);

    const diffTime = eventDate.getTime() - today.getTime();
    const diffDays = diffTime / (1000 * 3600 * 24);

    return diffDays >= 0 && diffDays <= 14;
}

export function UpcomingEvents() {
    const [upcomingEvents, setUpcomingEvents] = useState<Event[]>([]);

    useEffect(() => {
        const filtered = fcEvents
            .filter(event => isWithinNextTwoWeeks(event.date))
            .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
        setUpcomingEvents(filtered);
    }, []);

    return (
        <div
            className="mt-8 bg-white dark:bg-[#2a2a2a] rounded-lg shadow-sm p-6 border border-gray-100 dark:border-gray-700">
            <h3 className="font-bold text-gray-900 dark:text-white text-xl mb-4">Upcoming Events</h3>
            <div className="space-y-4">
                {upcomingEvents.length === 0 ? (
                    <p className="text-gray-600 dark:text-gray-300 text-sm">No events in the next two weeks.</p>
                ) : (
                    upcomingEvents.map((event, index) => (
                        <div
                            key={index}
                            className="flex items-start p-3 border border-gray-100 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-[#2a2a2a] transition"
                        >
                            <div
                                className={`w-12 h-12 rounded-lg ${event.color} flex items-center justify-center mr-4 flex-shrink-0`}>
                <span className="text-white font-bold">
                  {new Date(event.date).getDate()}
                </span>
                            </div>
                            <div className="flex-1">
                                <div className="flex justify-between items-start">
                                    <h4 className="font-medium text-gray-900 dark:text-white">{event.title}</h4>
                                    <span className="text-sm text-gray-500 dark:text-gray-400">{event.time}</span>
                                </div>
                                <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">{event.description}</p>
                                <div className="flex items-center mt-2">
                                    <div
                                        className="w-6 h-6 rounded-full bg-indigo-100 dark:bg-[#3b3b3b] flex items-center justify-center mr-2">
                                        <i className="ri-user-line text-primary text-xs"></i>
                                    </div>
                                    <span className="text-xs text-gray-500 dark:text-gray-400">
                                      Organizer: {event.organizer || 'To be designated'}
                                    </span>

                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}
