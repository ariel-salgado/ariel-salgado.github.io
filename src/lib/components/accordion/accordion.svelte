<script lang='ts'>
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	import CaretDown from 'phosphor-svelte/lib/CaretDown';

	import { cn } from '$lib/utils';
	import { slide } from 'svelte/transition';

	interface Props extends HTMLAttributes<HTMLElement> {
		open?: boolean;
		header: string | Snippet;
		content: string | Snippet;
	}

	let { open = $bindable(false), header, content, class: class_name, ...rest }: Props = $props();
</script>

<div class={cn('border-b border-muted', class_name)} {...rest}>
	<button class='flex w-full cursor-pointer items-center justify-between py-4' onclick={() => open = !open}>
		<div class='text-left'>
			{#if typeof header === 'string'}
				{header}
			{:else}
				{@render header()}
			{/if}
		</div>

		<CaretDown class={`inline-block size-6 align-middle transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
	</button>

	{#if open}
		<div transition:slide={{ axis: 'y' }}>
			<div class='pb-4'>
				{#if typeof content === 'string'}
					<div>{content}</div>
				{:else}
					{@render content()}
				{/if}
			</div>
		</div>
	{/if}
</div>
