import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess({ script: true }),
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			precompress: true,
			strict: true,
		}),
		router: {
			resolution: 'server',
		},
	},
	compilerOptions: {
		runes: true,
		modernAst: true,
	},
};

export default config;
