export default function Register() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white px-4">
            <form className="w-full max-w-md bg-slate-800/80 backdrop-blur-md p-8 rounded-lg border border-slate-700 shadow-md">
                <h2 className="text-3xl font-bold mb-6 text-center text-white">Create an Account</h2>

                <label className="block mb-4">
                    <span className="text-slate-300">Email</span>
                    <input
                        type="email"
                        required
                        className="mt-1 w-full px-4 py-3 bg-slate-900 text-white placeholder-slate-500 border border-slate-700 rounded-button outline-none focus:ring-2 focus:ring-primary"
                        placeholder="you@example.com"
                    />
                </label>

                <label className="block mb-6">
                    <span className="text-slate-300">Password</span>
                    <input
                        type="password"
                        required
                        className="mt-1 w-full px-4 py-3 bg-slate-900 text-white placeholder-slate-500 border border-slate-700 rounded-button outline-none focus:ring-2 focus:ring-primary"
                        placeholder="••••••••"
                    />
                </label>

                <button
                    type="submit"
                    className="w-full bg-primary hover:bg-opacity-90 text-white py-3 px-6 rounded-button text-lg font-medium transition-colors"
                >
                    Register
                </button>
            </form>
        </div>
    );
}
