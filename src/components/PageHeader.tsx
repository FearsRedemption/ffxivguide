type BreadcrumbItem = {
    label: string;
    href: string;
};

type PageHeaderProps = {
    breadcrumbs: BreadcrumbItem[];
};

export default function PageHeader({ breadcrumbs }: PageHeaderProps) {
    return (
        <div className="sticky top-[55px] z-40 bg-white dark:bg-[#2d2d2d] border-b border-gray-200 dark:border-gray-700">
            <div className="container mx-auto px-4 py-3 text-sm">
                <div className="flex items-center space-x-2 flex-wrap">
                    {breadcrumbs.map((item, index) => (
                        <div key={index} className="flex items-center space-x-2">
                            {index > 0 && (
                                <div className="text-gray-400">
                                    <i className="ri-arrow-right-s-line"></i>
                                </div>
                            )}
                            {index < breadcrumbs.length - 1 ? (
                                <a href={item.href} className="text-gray-500 hover:text-primary">
                                    {item.label}
                                </a>
                            ) : (
                                <span className="font-medium text-gray-900 dark:text-gray-100">
                  {item.label}
                </span>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
