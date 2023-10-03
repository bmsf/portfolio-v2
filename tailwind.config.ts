const { nextui } = require('@nextui-org/react');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {},
	},
	darkMode: 'class',
	plugins: [
		nextui({
			themes: {
				light: {
					layout: {}, // light theme layout tokens
					colors: {
						background: '#F2F2F2',
						foreground: '#0A0F1E',
						primary: {
							100: '#FAF7F5',
							200: '#F6EEEC',
							300: '#E4D8D6',
							400: '#C9BBBA',
							500: '#A69595',
							600: '#8E6C6F',
							700: '#774B52',
							800: '#602F3C',
							900: '#4F1C2E',
							DEFAULT: '#4F1C2E',
							foreground: '#F2F2F2',
						},
						focus: '#C9BBBA',
					},
				},
				dark: {
					layout: {}, // dark theme layout tokens
					colors: {
						background: '#121212',
						foreground: '#ffffff',
						primary: {
							100: '#FEF6CB',
							200: '#FEEB98',
							300: '#FEDD65',
							400: '#FECF3F',
							500: '#FEB800',
							600: '#DA9800',
							700: '#B67A00',
							800: '#935E00',
							900: '#794A00',
							DEFAULT: '#FEB800',
							foreground: '#0A0F1E',
						},
						focus: '#F182F6',
					}, // dark theme colors
				},
			},
		}),
	],
};
