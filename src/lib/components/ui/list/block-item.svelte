<script lang='ts'>
	import type { Snippet } from 'svelte';
	import type { HTMLLiAttributes } from 'svelte/elements';

	import { cn } from '$lib/utils';

	interface Props extends HTMLLiAttributes {
		children: Snippet;
	}

	let { children, class: class_name, ...rest }: Props = $props();
</script>

<li class={cn('rounded-r-md border-l-4 border-secondary bg-alt-background py-3 pl-6', class_name)} {...rest}>
	{@render children()}
</li>
