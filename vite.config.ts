import adapter from '@sveltejs/adapter-static';
import tailwindcss from '@tailwindcss/vite';

import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		tailwindcss(),
		sveltekit({
			compilerOptions: {
				runes: ({ filename }) =>
					filename.split(/[/\\]/).includes('node_modules')
						? undefined
						: true,
				modernAst: true,
				experimental: {
					async: true,
				},
			},
			adapter: adapter({
				pages: 'build',
				assets: 'build',
				precompress: true,
				strict: true,
			}),
		}),
	],
});
