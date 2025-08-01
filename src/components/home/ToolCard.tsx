﻿interface ToolCardProps {
    title: string;
    description: string;
    icon: string;
    buttonText: string;
    buttonColor: string;
    buttonHover: string;
    iconColor: string;
    url: string;
}

export default function ToolCard({
                                     title,
                                     description,
                                     icon,
                                     buttonText,
                                     buttonColor,
                                     buttonHover,
                                     iconColor,
                                     url
                                 }: ToolCardProps) {
    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="guide-card rounded-lg overflow-hidden shadow-sm bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-800 p-6 flex flex-col items-center text-center transition-transform hover:-translate-y-1"
        >
            <div className="w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center mb-4">
                <i className={`ri-${icon} ${iconColor} text-2xl`}></i>
            </div>
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">{description}</p>
            <div className={`${buttonColor} ${buttonHover} text-white px-6 py-3 rounded-button font-medium whitespace-nowrap cursor-pointer inline-flex items-center justify-center`}>
                <i className="ri-external-link-line mr-2"></i>
                {buttonText}
            </div>
        </a>
    );
}
