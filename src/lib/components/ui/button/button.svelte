<script lang='ts'>
	import type { Snippet } from 'svelte';
	import type { HTMLAnchorAttributes, HTMLButtonAttributes } from 'svelte/elements';

	import { cn } from '$lib/utils';

	type ButtonOrLinkProps =
		| (HTMLButtonAttributes & { href?: never })
		| (HTMLAnchorAttributes & { href: string });

	type Props = {
		children: Snippet;
	} & ButtonOrLinkProps;

	const { children, class: className, ...props }: Props = $props();
</script>

{#if 'href' in props && props.href !== undefined && props.href !== null}
	<a
		class={cn(
			'border-accent-primary bg-accent-secondary text-text-secondary focus-within:bg-accent-primary/70 focus-within:text-text-secondary hover:bg-accent-primary/70 hover:text-text-secondary inline-flex w-fit rounded-md border-2 py-2 px-4 font-mono text-sm font-medium transition-colors md:py-2.5 md:px-5 md:text-base xl:text-lg',
			className,
		)}
		{...props}
	>
		{@render children()}
	</a>
{:else}
	<button
		type='button'
		class={cn(
			'border-accent-primary bg-accent-secondary text-text-secondary focus-within:bg-accent-primary/70 focus-within:text-text-secondary hover:bg-accent-primary/70 hover:text-text-secondary inline-flex w-fit rounded-md border-2 py-2 px-4 font-mono text-sm font-medium transition-colors md:py-2.5 md:px-5 md:text-base xl:text-lg',
			className,
		)}
		{...props}
	>
		{@render children()}
	</button>
{/if}
