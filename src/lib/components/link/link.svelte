<script lang='ts'>
	import type { Snippet } from 'svelte';
	import type { HTMLAnchorAttributes } from 'svelte/elements';

	import { cn } from '$lib/utils';

	interface Props extends HTMLAnchorAttributes {
		children: Snippet;
	};

	let { children, class: class_name, ...rest }: Props = $props();
</script>

<a class={cn('focus-within:underline hover:underline flex items-center gap-x-1 w-fit', class_name)} referrerpolicy='no-referrer' {...rest}>
	{@render children()}
</a>
