<script lang='ts'>
	import type { Snippet } from 'svelte';

	import { cn } from '$lib/utils';

	interface Props {
		children: Snippet;
		class?: string;
	}

	let { children, class: class_name }: Props = $props();
</script>

<div
	class={cn(
		`h-6 content-center rounded-4xl bg-accent px-3 text-accent-foreground`,
		class_name,
	)}
>
	<span class='flex items-center text-sm font-semibold'>
		{@render children()}
	</span>
</div>
