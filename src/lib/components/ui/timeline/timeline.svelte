<script lang="ts">
	import type { Event } from './events';
	import type { HTMLAttributes } from 'svelte/elements';

	import { cn } from '$lib/utils';

	interface Props extends HTMLAttributes<HTMLUListElement> {
		events: Event[];
	}

	const { events, class: className, ...props }: Props = $props();
</script>

<ul class={cn('border-text-primary/50 relative col-span-1 border-l py-2', className)} {...props}>
	{#each events as { date, title, description }}
		<li class="mb-6 ml-4 lg:mb-10 lg:ml-6">
			<div
				class="bg-text-primary/80 absolute -left-1 mt-[31px] size-[7px] rounded-full md:mt-9 lg:-left-[5px] lg:size-[9px]"
			></div>
			<time class="text-accent-primary text-xs leading-none md:text-sm xl:text-base">{date}</time>
			<h3
				class="text-text-secondary mb-1.5 text-pretty text-lg font-semibold md:mb-2 md:text-xl xl:mb-2.5 xl:text-2xl"
			>
				{title}
			</h3>
			<p class="text-text-primary text-pretty text-sm leading-relaxed md:text-base xl:text-lg">
				{description}
			</p>
		</li>
	{/each}
</ul>
