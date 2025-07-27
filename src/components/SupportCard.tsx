export default function SupportCard() {
    return (
        <div className="bg-white dark:bg-[#2d2d2d] rounded-lg shadow-sm p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Support Our Work</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                        I spend monthly to keep this site up and running. Your support helps maintain and improve these guides. Even
                        if it's only a dollar, I appreciate you tremendously!
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
                        </a>
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-3">
                        Your donation helps us continue providing high-quality FFXIV guides and resources.
                    </p>
                </div>
                <div className="flex justify-center">
                    <img
                        src="https://readdy.ai/api/search-image?query=A%20stylized%20illustration%20of%20a%20Final%20Fantasy%20XIV%20character%20checking%20mail%20or%20reading%20a%20newsletter&width=400&height=300&seq=ffxiv-newsletter&orientation=landscape"
                        alt="Newsletter"
                        className="rounded-lg max-w-full h-auto"
                    />
                </div>
            </div>
        </div>
    );
}
