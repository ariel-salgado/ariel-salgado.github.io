<script lang='ts'>
	import { cn } from '$lib/utils';

	interface Props {
		items: string[];
		class?: string;
	}

	let { items, class: class_name }: Props = $props();
</script>

<ul class={cn('list-disc pl-8 *:pl-2', class_name)}>
	{#each items as item (item)}
		<li>{item}</li>
	{/each}
</ul>
