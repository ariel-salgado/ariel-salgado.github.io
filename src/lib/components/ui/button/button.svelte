<script lang='ts'>
	import type { Snippet } from 'svelte';
	import type { ButtonOptions } from './props';
	import type {
		HTMLAnchorAttributes,
		HTMLButtonAttributes,
	} from 'svelte/elements';

	import { cn } from '$lib/utils';

	import { sizes, variants, base_style } from './props';

	type ButtonOrLinkProps
		= | (HTMLButtonAttributes & { href?: never })
			| (HTMLAnchorAttributes & { href: string });

	type Props = ButtonOrLinkProps
		& ButtonOptions & {
			children: Snippet;
		};

	let {
		children,
		size = 'md',
		variant = 'primary',
		class: class_name,
		...rest
	}: Props = $props();

	const merged_classes = cn(
		base_style,
		variants[variant],
		sizes[size],
		class_name,
	);
</script>

{#if 'href' in rest && rest.href !== undefined && rest.href !== null}
	<a class={merged_classes} referrerpolicy='no-referrer' {...rest}>
		{@render children()}
	</a>
{:else}
	<button class={merged_classes} type='button' {...rest}>
		{@render children()}
	</button>
{/if}
