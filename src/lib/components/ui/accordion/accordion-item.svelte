<script lang='ts'>
	import type { Snippet } from 'svelte';

	import Accordion from './accordion.svelte';

	interface Props {
		class?: string;
		title: string;
		subtitle?: string;
		children: Snippet;
	}

	let { title, subtitle, children, class: class_name }: Props = $props();
</script>

<Accordion class={class_name}>
	{#snippet header()}
		<hgroup class='w-full'>
			<h3 class='pb-1 text-2xl font-medium text-primary'>
				{title}
			</h3>
			<p class='text-muted-foreground'>
				{subtitle}
			</p>
		</hgroup>
	{/snippet}

	{#snippet content()}
		<section class='flex flex-col gap-y-6 py-2'>
			{@render children()}
		</section>
	{/snippet}
</Accordion>
