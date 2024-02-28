/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        fontFamily: {
            'raleway': ['Raleway'],
        },
        extend: {
            backgroundImage: {
                bg3: "url('/images/hero3.png')"
            },
            colors: {
                black: '#2A1206',
                licorice: "#1A0F06",
                yellow: "#E1AC5B",
                white: '#F3F3F3',
                crema: '#F0FFF5',
                cafe: '#CB6C2D',
                gris: '#394455'
            },
        },
    },
    plugins: [require('daisyui')],
    daisyui: {
        themes: ['light'],
    },
}
