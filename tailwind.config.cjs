/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    safelist: [
        'border-blue-600',
        'border-green-600',
        'border-red-600',
        'border-purple-600',
        'border-amber-600'
    ],
    theme: {
        extend: {
            colors: {
                primary: '#7b68ee',
                secondary: '#ff6b6b',
            },
            borderRadius: {
                button: '8px',
            },
            fontFamily: {
                pacifico: ['Pacifico', 'cursive'],
                poppins: ['Poppins', 'sans-serif'],
            },
        },
    },
    plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
