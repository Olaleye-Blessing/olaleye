import type { Config } from 'tailwindcss';

const config = {
	darkMode: ["class"],
	content: ["./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}"],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px",
			},
		},
		colors: {
			black: "#151515",
			"black-1": "#777778",
			"black-2": "#1B1B1D",
			white: "#FFFFFF",
			"white-1": "#BEBEBE",
			"transparent": "transparent",
		},
		extend: {
			fontFamily: {
				"airbnbcereal": ["var(--font-airbnbcereal)"],
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
