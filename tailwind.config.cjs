/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
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
