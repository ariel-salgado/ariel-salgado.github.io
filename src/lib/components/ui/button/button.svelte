<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAnchorAttributes, HTMLButtonAttributes } from 'svelte/elements';

	import { cn } from '$lib/utils';

	type ButtonOrLinkProps =
		| (HTMLButtonAttributes & { as?: 'button' })
		| (HTMLAnchorAttributes & { as: 'a' });

	type Props = {
		children: Snippet;
	} & ButtonOrLinkProps;

	let { children, class: className, ...props }: Props = $props();
</script>

{#if props.as === 'a'}
	<a
		class={cn(
			'inline-flex w-fit rounded-md border-2 border-clr-accent-primary bg-clr-accent-secondary px-4 py-2 font-mono text-sm font-medium text-clr-text-secondary transition-colors focus-within:bg-clr-accent-primary/70 focus-within:text-clr-text-secondary hover:bg-clr-accent-primary/70 hover:text-clr-text-secondary md:px-5 md:py-2.5 md:text-base xl:text-lg',
			className
		)}
		{...props}
	>
		{@render children()}
	</a>
{:else}
	<button
		type="button"
		class={cn(
			'inline-flex w-fit rounded-md border-2 border-clr-accent-primary bg-clr-accent-secondary px-4 py-2 font-mono text-sm font-medium text-clr-text-secondary transition-colors focus-within:bg-clr-accent-primary/70 focus-within:text-clr-text-secondary hover:bg-clr-accent-primary/70 hover:text-clr-text-secondary md:px-5 md:py-2.5 md:text-base xl:text-lg',
			className
		)}
		{...props}
	>
		{@render children()}
	</button>
{/if}
