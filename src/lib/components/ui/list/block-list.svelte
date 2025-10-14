<script lang='ts'>
	import { cn } from '$lib/utils';

	interface Props {
		items: (string | { title: string; subtitle?: string })[];
		class?: string;
	}

	let { items, class: class_name }: Props = $props();
</script>

<ul class={cn('space-y-4 py-4', class_name)}>
	{#each items as item (item)}
		{@const title = typeof item === 'string' ? item : item.title}
		{@const subtitle = (typeof item === 'object' && item.subtitle) ? item.subtitle : undefined}

		<li class='rounded-r-md border-l-4 border-secondary bg-alt-background py-3 pl-6'>
			<span class='block text-xl leading-relaxed'>
				{title}
			</span>

			{#if subtitle}
				<span class='block text-muted-foreground'>
					{subtitle}
				</span>
			{/if}
		</li>
	{/each}
</ul>
