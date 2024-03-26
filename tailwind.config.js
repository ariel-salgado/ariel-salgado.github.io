/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				'clr-bg-primary': 'hsl(var(--clr-bg-primary) / <alpha-value>)',
				'clr-bg-secondary': 'hsl(var(--clr-bg-secondary) / <alpha-value>)',
				'clr-text-primary': 'hsl(var(--clr-text-primary) / <alpha-value>)',
				'clr-text-secondary': 'hsl(var(--clr-text-secondary) / <alpha-value>)',
				'clr-accent-primary': 'hsl(var(--clr-accent-primary) / <alpha-value>)',
				'clr-accent-secondary': 'hsl(var(--clr-accent-secondary) / <alpha-value>)',
			},
		},
	},

	plugins: []
};

export default config;
