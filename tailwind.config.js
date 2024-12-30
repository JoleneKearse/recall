/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', 
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
    colors: {
      brand: {
        100: "#bea6a0",
        200: "#ab9590",
        300: "#988580",
        400: "#857470",
        500: "#726460",
        600: "#5f5350",
        700: "#4c4240",
        800: "#393230",
        900: "#262120",
        950: "#131110",
      },
      accent: {
        "red-100": "#FF7B7B",
        "red-200": "#FF3B3B",
        "red-300": "#de0808",
        "violet": "#a22b82",
        "purple": "#a22b82",
      },
    },
		extend: {
      backgroundImage: {
        "klingon": "url('/klingon.png')",
      },
      fontFamily: {
        "unlock": ["Unlock", "serif"],
        "inconsolata": ["Inconsolata", "monospace"],
      },
    },
	},
	plugins: [],
};
