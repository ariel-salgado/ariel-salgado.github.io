<script lang='ts'>
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	import { cn } from '$lib/utils';

	interface Props extends HTMLAttributes<HTMLHeadingElement> {
		children: Snippet;
	}

	const { class: className, children, ...props }: Props = $props();
</script>

<h2
	class={cn('text-balance text-4xl font-bold md:text-5xl lg:text-6xl xl:text-7xl', className)}
	{...props}
>
	{@render children()}
</h2>
