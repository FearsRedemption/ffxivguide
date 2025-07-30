import NewsletterImage from '../../assets/images/newsletter.jpg';

export default function SupportCard() {
    return (
        <div className="bg-white dark:bg-[#2d2d2d] border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm p-8 transition duration-300 hover:shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        Support Our Work
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-1">
                        This site is maintained through personal funding. Your support, no matter the amount, helps keep it running and ensures continued improvements to the guides.
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                        Every contribution is deeply appreciated.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                        <a
                            href="https://www.paypal.com/donate/?hosted_button_id=P9V4NDZSTNGZ8"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center bg-[#0070BA] hover:bg-[#003087] text-white px-6 py-3 rounded-button font-medium whitespace-nowrap"
                        >
                            <i className="ri-paypal-fill text-xl mr-2"></i>
                            Support via PayPal
                            <i className="ri-heart-fill text-xl ml-2"></i>
                        </a>
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-3">
                        Your donation helps us continue providing high-quality FFXIV guides and resources.
                    </p>
                </div>
                <div className="flex justify-center">
                    <img
                        src={NewsletterImage}
                        alt="Newsletter"
                        className="rounded-lg max-w-full h-auto shadow-md"
                    />
                </div>
            </div>
        </div>
    );
}
