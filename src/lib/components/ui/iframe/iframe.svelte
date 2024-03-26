<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	import { cn } from '$lib/utils';

	interface Props extends HTMLAttributes<HTMLDivElement> {
		children: Snippet;
	}

	const { class: className, children, ...props }: Props = $props();
</script>

<div
	class={cn(
		'h-min w-full max-w-sm rounded-2xl border-2 border-clr-accent-primary p-2 *:rounded-xl *:brightness-90 *:grayscale *:transition-all *:duration-500 *:hover:grayscale-0',
		className
	)}
	{...props}
>
	{@render children()}
</div>
