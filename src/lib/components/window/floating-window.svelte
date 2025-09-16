<script lang='ts'>
	import type { ComponentProps } from 'svelte';

	import X from 'phosphor-svelte/lib/X';

	import { floatable } from '$lib/utils';

	import Window from './window.svelte';

	interface Props extends ComponentProps<typeof Window> {
		open?: boolean;
	}

	let {
		open = $bindable(false),
		header: wheader,
		content: wcontent,
		...rest
	}: Props = $props();

	let window_element = $state<HTMLDivElement>();
	let position = $state<{ x: number; y: number } | null>(null);

	$effect(() => {
		if (open && window_element) {
			if (position === null) {
				const { offsetWidth, offsetHeight } = window_element;
				const x = (window.innerWidth - offsetWidth) / 2;
				const y = (window.innerHeight - offsetHeight) / 2;
				position = { x, y };
			}

			return () => {
				const rect = window_element?.getBoundingClientRect();
				if (rect && rect.width > 0 && rect.height > 0) {
					position = { x: rect?.left, y: rect?.top };
				}
			};
		}
	});
</script>

{#if open}
	<Window class='absolute aspect-auto size-full max-h-[70vh] overflow-hidden' {...rest} style='top: {position?.y}px; left: {position?.x}px;' bind:ref={window_element}>
		{#snippet header()}
			<div
				class='flex size-full h-14 cursor-move items-center justify-between select-none'
				{@attach floatable(window_element)}
				role='dialog'
				tabindex='0'
			>
				<div class='pointer-events-none'>
					{@render wheader?.()}
				</div>
				<button
					class='pointer-events-auto flex cursor-pointer items-center rounded bg-transparent p-1 text-primary transition-colors focus-within:text-foreground hover:text-foreground'
					onclick={() => (open = false)}
				>
					<span class='text-xl'>[</span>
					<X class='inline-block size-5 align-middle' weight='bold' />
					<span class='text-xl'>]</span>
				</button>
			</div>
		{/snippet}
		{#snippet content()}
			<div class='size-full overflow-scroll'>
				{@render wcontent()}
			</div>
		{/snippet}
	</Window>
{/if}
