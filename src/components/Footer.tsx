import Logo from '../assets/images/final fxiv purple.png'

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white pt-12 pb-6">
            <div className="container mx-auto px-4">
                {/* Top Footer */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    {/* Logo + Description */}
                    <div>
                        <a href="/home" className="h-8 mb-4 inline-block">
                            <img
                                src={Logo}
                                alt="Final Fantasy XIV"
                                className="h-full"
                            />
                        </a>
                        <p className="text-gray-400 mt-4">
                            Your ultimate resource for all things Final Fantasy XIV, from beginner guides to advanced strategies.
                        </p>
                    </div>

                    {/* Legal Links */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">Legal</h3>
                        <ul className="space-y-2">
                            <li>
                                <a
                                    href="/tos"
                                    className="text-gray-400 hover:text-primary"
                                >
                                    Terms of Service
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/privacy "
                                    className="text-gray-400 hover:text-primary"
                                >
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/contact"
                                    className="text-gray-400 hover:text-primary"
                                >
                                    Contact Us
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Footer */}
                <div className="pt-6 border-t border-gray-800 text-center text-gray-500 text-sm">
                    <p className="mb-2">© 2025 FFXIV Guide Hub. All rights reserved.</p>
                    <p>
                        FINAL FANTASY XIV © SQUARE ENIX CO., LTD. All Rights Reserved. We are not affiliated with SQUARE ENIX CO.,
                        LTD. in any way.
                    </p>
                </div>
            </div>
        </footer>
    );
}
