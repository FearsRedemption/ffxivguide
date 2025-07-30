interface GuideCardProps {
    title: string;
    description: string;
    tag: string;
    difficulty: string;
    views: string;
    imageUrl: string;
    authorName: string;
    authorAvatar: string;
    videoUrl: string;
    tagColor: string;
    tagBg: string;
    difficultyColor: string;
}

export default function GuideCard({
                                      title,
                                      description,
                                      tag,
                                      difficulty,
                                      views,
                                      imageUrl,
                                      authorName,
                                      authorAvatar,
                                      videoUrl,
                                      tagColor,
                                      tagBg,
                                      difficultyColor
                                  }: GuideCardProps) {
    return (
        <div className="rounded-lg shadow-sm overflow-hidden bg-gray-50 dark:bg-[#1a1a1a] transition duration-300">
            <div className="relative h-48 overflow-hidden">
                <img
                    src={imageUrl}
                    alt={title}
                    className="w-full h-full object-cover object-top"
                />
                <div className={`absolute top-3 left-3 ${difficultyColor} text-white text-xs font-medium px-2 py-1 rounded`}>
                    {difficulty}
                </div>
            </div>

            <a href={videoUrl} data-readdy="true" className="block hover:bg-gray-100 dark:hover:bg-[#3a3a3a] transition">
                <div className="p-5">
                    <div className="flex justify-between items-center mb-3">
                        <span className={`text-xs font-medium ${tagColor} ${tagBg} px-2 py-1 rounded`}>
                            {tag}
                        </span>
                        <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                            <i className="ri-eye-line mr-1" />
                            {views}
                        </div>
                    </div>

                    <h3 className="font-bold mb-2 text-gray-900 dark:text-white">{title}</h3>
                    <p className="text-sm mb-4 text-gray-700 dark:text-gray-300">{description}</p>

                    <div className="flex items-center">
                        <img
                            src={authorAvatar}
                            alt={authorName}
                            className="w-8 h-8 rounded-full mr-2"
                        />
                        <span className="text-sm text-gray-700 dark:text-gray-300">{authorName}</span>
                    </div>
                </div>
            </a>
        </div>
    );
}
