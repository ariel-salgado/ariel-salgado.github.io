<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	import { cn } from '$lib/utils';

	interface Props extends HTMLAttributes<HTMLHeadingElement> {
		children: Snippet;
	}

	const { class: className, children, ...props }: Props = $props();
</script>

<h3
	class={cn(
		'text-text-secondary mt-4 text-2xl font-bold md:text-3xl xl:mt-0 xl:text-4xl',
		className
	)}
	{...props}
>
	{@render children()}
</h3>
