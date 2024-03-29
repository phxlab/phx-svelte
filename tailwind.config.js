/** @type {import('tailwindcss').Config} */

// * Create color scheme with link below
// @ https://uicolors.app/create
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			container: {
				center: true,
				padding: '1rem',
			},
		},
	},
	plugins: [],
};
