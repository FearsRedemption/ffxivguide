// src/components/Header.tsx
import { useDarkMode } from '../hooks/useDarkMode';
import Logo from '../assets/images/final fxiv purple.png'

interface HeaderProps {
    serverStatus: string;
}

export default function Header({ serverStatus }: HeaderProps) {
    const [enabled, toggleDarkMode] = useDarkMode();

    const handleToggle = () => {
        toggleDarkMode(!enabled);
    };

    return (
        <header className="bg-gray-900 text-gray-900 text-white shadow-lg sticky top-0 z-50">
            <div className="container mx-auto px-4 py-3 flex items-center justify-between">
                {/* Logo + Nav */}
                <div className="flex items-center space-x-4">
                    <a href="/home" className="h-8">
                        <img
                            src={Logo}
                            alt="Final Fantasy XIV"
                            className="h-full"
                        />
                    </a>
                    <nav className="hidden md:flex space-x-6">
                        <a
                            href="https://na.finalfantasyxiv.com/lodestone/news/"
                            className="hover:text-primary transition"
                        >
                            News
                        </a>
                        <a
                            href="/personal-fc"
                            className="hover:text-primary transition"
                        >
                            Personal Free Company
                        </a>
                    </nav>
                </div>

                {/* Right side – Server Status + Dark Mode */}
                <div className="flex items-center space-x-4">
                    {/* Server Status visible in header */}
                    <div className="hidden md:flex items-center bg-black/10 dark:bg-black/30 backdrop-blur-sm rounded px-3 py-1 text-xs text-gray-900 text-white">
                        <div className="w-2 h-2 rounded-full mr-2 bg-green-500" />
                        {serverStatus}
                    </div>

                    {/* Dark mode toggle */}
                    <div className="flex items-center space-x-2">
                        <span className="text-sm hidden md:inline">Dark Mode</span>
                        <label className="custom-switch">
                            <input
                                type="checkbox"
                                id="darkModeToggle"
                                checked={enabled}
                                onChange={handleToggle}
                            />
                            <span className="slider" />
                        </label>
                    </div>

                    {/* Mobile menu toggle */}
                    <button className="md:hidden w-10 h-10 flex items-center justify-center">
                        <i className="ri-menu-line text-xl"></i>
                    </button>
                </div>
            </div>
        </header>
    );
}
