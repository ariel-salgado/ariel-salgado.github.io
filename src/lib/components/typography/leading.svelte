<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	import { cn } from '$lib/utils';

	interface Props extends HTMLAttributes<HTMLParagraphElement> {
		children: Snippet;
	}

	const { class: className, children, ...props }: Props = $props();
</script>

<p
	class={cn('text-accent-primary font-mono text-xs md:text-sm lg:text-base', className)}
	{...props}
>
	{@render children()}
</p>
