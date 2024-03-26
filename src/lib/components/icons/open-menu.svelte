<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';

	import { cn } from '$lib/utils';

	interface Props extends HTMLAttributes<SVGElement> {}

	const { class: className, ...props } = $props<Props>();
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	viewBox="0 0 24 24"
	stroke-width="2"
	stroke="currentColor"
	class={cn('inline-block size-5 align-middle', className)}
	{...props}
>
	<path
		stroke-linecap="round"
		stroke-linejoin="round"
		d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"
	></path>
</svg>
