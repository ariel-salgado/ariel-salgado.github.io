import rsvelte from '@rsvelte/oxlint-plugin/recommended.json' with { type: 'json' };

import { defineConfig } from 'oxlint';

export default defineConfig({
	options: {
		typeAware: true,
		typeCheck: true,
	},
	jsPlugins: ['@rsvelte/oxlint-plugin', 'eslint-plugin-perfectionist'],
	rules: {
		...(rsvelte.rules as any),
		'perfectionist/sort-exports': [
			'error',
			{ groups: ['type-export', 'value-export'], newlinesBetween: 1 },
		],
		'perfectionist/sort-named-exports': 'error',
		'perfectionist/sort-named-imports': 'error',
		'perfectionist/sort-imports': [
			'error',
			{
				type: 'subgroup-order',
				fallbackSort: { type: 'alphabetical' },
				sortSideEffects: true,
				groups: [
					'type-wildcard-import',
					'type-default-import',
					'type-named-import',
					'side-effect-style',
					'side-effect',
					[
						'value-wildcard-builtin',
						'value-wildcard-external',
						'value-wildcard-internal',
						'value-wildcard-parent',
						'value-wildcard-sibling',
						'value-wildcard-index',
					],
					[
						'value-default-builtin',
						'value-default-external',
						'value-default-internal',
						'value-default-parent',
						'value-default-sibling',
						'value-default-index',
					],
					[
						'value-named-builtin',
						'value-named-external',
						'value-named-internal',
						'value-named-parent',
						'value-named-sibling',
						'value-named-index',
					],
				],
			},
		],
	},
});
