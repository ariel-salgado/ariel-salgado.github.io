<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	import { cn } from '$lib/utils';

	interface Props extends HTMLAttributes<HTMLElement> {
		children: Snippet;
	}

	const { class: className, children, ...props }: Props = $props();
</script>

<section
	class={cn('grid min-h-screen content-center gap-y-4 py-24 md:gap-y-6 xl:gap-y-8', className)}
	{...props}
>
	{@render children()}
</section>
