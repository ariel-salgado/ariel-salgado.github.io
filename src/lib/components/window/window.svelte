<script lang='ts'>
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	import { cn } from '$lib/utils';
	import { scale } from 'svelte/transition';

	interface Props extends HTMLAttributes<HTMLDivElement> {
		ref?: HTMLDivElement;
		header?: Snippet;
		content: Snippet;
	}

	let {
		ref = $bindable(),
		header,
		content,
		class: class_name,
		...rest
	}: Props = $props();
</script>

<div
	bind:this={ref}
	class={cn(
		'flex aspect-video h-auto w-full max-w-3xl flex-col rounded-lg border-2 border-secondary bg-background',
		class_name,
	)}
	{...rest}
	transition:scale
>
	<div
		class='flex h-14 w-full items-center rounded-t-md border-b-2 border-secondary bg-alt-background px-6 text-alt-foreground'
	>
		{@render header?.()}
	</div>

	<div class='size-full flex-1 text-foreground'>
		{@render content()}
	</div>
</div>
