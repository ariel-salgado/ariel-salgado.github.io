<script lang='ts'>
	import { Footer } from '$lib/components/ui';
	import { cubicInOut } from 'svelte/easing';
	import { slide } from 'svelte/transition';

	type Link = {
		name: string;
		href: string;
	};

	interface Props {
		links: Link[];
		onSelected?: () => void;
	}

	const { links, onSelected }: Props = $props();
</script>

<aside
	class='bg-bg-primary fixed top-0 z-40 grid size-full grid-rows-[1fr_auto] gap-y-6 shadow-xl shadow-slate-950'
	transition:slide={{ delay: 0, duration: 500, easing: cubicInOut, axis: 'x' }}
>
	<div class='space-y-8 pt-24 px-8 md:px-12'>
		<h2 class='text-text-secondary text-3xl font-medium'>
			<span>Navegación</span>
		</h2>

		<nav>
			<ul class='font-mono'>
				{#each links as { name, href }}
					<li
						class='border-l-bg-secondary focus-within:border-l-accent-primary focus-within:bg-bg-secondary focus-within:text-text-secondary hover:border-l-accent-primary hover:bg-bg-secondary hover:text-text-secondary rounded-r-md border-l-[3px] px-4 text-sm transition-colors md:text-base'
					>
						<a class='block py-2.5' {href} onclick={onSelected}>{name}</a>
					</li>
				{/each}
			</ul>
		</nav>
	</div>

	<Footer />
</aside>
