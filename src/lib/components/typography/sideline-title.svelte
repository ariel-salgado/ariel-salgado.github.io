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
	class={cn(
		'text-text-secondary after:bg-text-primary mb-2 flex whitespace-nowrap text-3xl font-bold after:relative after:top-5 after:ml-4 after:block after:h-px after:w-full md:text-4xl md:after:top-6 lg:text-5xl lg:after:top-7',
		className,
	)}
	{...props}
>
	{@render children()}
</h2>
