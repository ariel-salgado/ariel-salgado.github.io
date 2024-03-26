import type { UserConfig } from 'vite';

import { sveltekit } from '@sveltejs/kit/vite';
import { enhancedImages } from '@sveltejs/enhanced-img';

const config = {
	plugins: [enhancedImages(), sveltekit()]
} satisfies UserConfig;

export default config;
