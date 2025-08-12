// src/components/personalfc/Calendar.tsx
import type { JSX } from 'react';
import { useState } from 'react';
import {
    format,
    startOfMonth,
    startOfWeek,
    addDays,
    isSameDay,
    isSameMonth,
    addMonths,
    subMonths,
    isToday
} from 'date-fns';
import fcEventsData from '../../data/fc/fcEventsData';

export default function Calendar(): JSX.Element {
    const [currentDate, setCurrentDate] = useState(new Date());

    const headerDate = format(currentDate, 'MMMM yyyy');
    const startDate = startOfWeek(startOfMonth(currentDate), { weekStartsOn: 0 });

    const days: JSX.Element[] = [];

    for (let i = 0; i < 42; i++) {
        const date = addDays(startDate, i);
        const dayEvents = fcEventsData.filter(event =>
            isSameDay(new Date(event.date), date)
        );

        const isCurrentMonth = isSameMonth(date, currentDate);
        const isCurrentDay = isToday(date);

        days.push(
            <div
                key={i}
                className={`relative py-2 px-2 border border-gray-100 min-h-[100px] text-left hover:bg-gray-100 dark:hover:bg-[#2a2a2a] transition-all duration-200 ${
                    !isCurrentMonth ? 'bg-gray-50 dark:bg-[#1a1a1a] opacity-60' : ''
                }`}
            >
        <span
            className={`text-sm font-medium ${
                isCurrentDay
                    ? 'text-white bg-primary px-2 py-0.5 rounded-full'
                    : isCurrentMonth
                        ? 'text-gray-900 dark:text-white'
                        : 'text-gray-400'
            }`}
        >
          {format(date, 'd')}
        </span>
                {dayEvents.map((event, index) => (
                    <div
                        key={index}
                        className={`mt-1 text-xs text-white rounded px-1 py-0.5 shadow-sm ${event.color}`}
                        title={`${event.title} — ${event.time}`}
                    >
                        {event.title}: {event.time}
                    </div>
                ))}
            </div>
        );
    }

    return (
        <div className="bg-white dark:bg-[#2a2a2a] rounded-lg shadow-sm overflow-hidden border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
                <button
                    onClick={() => setCurrentDate(subMonths(currentDate, 1))}
                    className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-[#2c2c2c]"
                >
                    <i className="ri-arrow-left-s-line text-gray-600 dark:text-gray-300"></i>
                </button>
                <h3 className="font-bold text-xl text-gray-900 dark:text-white">{headerDate}</h3>
                <button
                    onClick={() => setCurrentDate(addMonths(currentDate, 1))}
                    className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-[#2c2c2c]"
                >
                    <i className="ri-arrow-right-s-line text-gray-600 dark:text-gray-300"></i>
                </button>
            </div>
            <div className="grid grid-cols-7 text-center border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-[#2a2a2a]">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, idx) => (
                    <div key={idx} className="py-2 font-medium text-gray-600 dark:text-gray-300">
                        {day}
                    </div>
                ))}
            </div>
            <div className="grid grid-cols-7 text-center">{days}</div>
        </div>
    );
}
