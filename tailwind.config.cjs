/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                pacifico: ['Pacifico', 'cursive'],
                poppins: ['Poppins', 'sans-serif'],
            },
            colors: {
                primary: '#7b68ee',
                secondary: '#ff6b6b',
            },
            borderRadius: {
                button: '8px',
            },
        },
    },
    plugins: [],
};
