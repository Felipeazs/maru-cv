/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {
            colors: {
                black: '#2A2B30',
                white: '#F3F3F3',
                crema: '#F0FFF5',
                cafe: '#A7835A',
                gris: '#909797'
            }
        },
    },
    plugins: [require('daisyui')],
}
