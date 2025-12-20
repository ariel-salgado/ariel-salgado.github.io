import defineConfig from '@ariel-salgado/eslint-config';

export default defineConfig({
	type: 'app',
	pnpm: false,
	svelte: true,
	typescript: true,
	tailwindcss: true,
});
