<script lang='ts'>
	import { cn } from '$lib/utils';

	import { Badge } from '.';

	interface Props {
		class?: string;
		items: string[];
	}

	let { class: class_name, items }: Props = $props();
</script>

<div class={cn('flex flex-wrap gap-2', class_name)}>
	{#each items as item (item)}
		<Badge>{item}</Badge>
	{/each}
</div>
