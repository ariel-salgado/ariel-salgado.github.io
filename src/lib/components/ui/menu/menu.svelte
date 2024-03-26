<script lang="ts">
	import { page } from '$app/stores';
	import { slide } from 'svelte/transition';
	import { cubicInOut } from 'svelte/easing';
	import { Footer } from '$lib/components/ui';

	type Link = {
		name: string;
		href: string;
	};

	interface Props {
		links: Link[];
		onSelected?: () => void;
	}

	let { links, onSelected }: Props = $props();
</script>

<aside
	class="fixed top-0 z-40 grid size-full grid-rows-[1fr_auto] gap-y-6 bg-clr-bg-primary shadow-xl shadow-slate-950"
	transition:slide={{ delay: 0, duration: 500, easing: cubicInOut, axis: 'x' }}
>
	<div class="space-y-8 px-8 pt-24 md:px-12">
		<h2 class="text-3xl font-medium text-clr-text-secondary">
			<span>Navegación</span>
		</h2>

		<nav>
			<ul class="font-mono">
				{#each links as { name, href }}
					<li
						class="rounded-r-md border-l-[3px] border-l-clr-bg-secondary px-4 text-sm transition-colors focus-within:border-l-clr-accent-primary focus-within:bg-clr-bg-secondary focus-within:text-clr-text-secondary hover:border-l-clr-accent-primary hover:bg-clr-bg-secondary hover:text-clr-text-secondary md:text-base"
					>
						<a class="block py-2.5" {href} onclick={onSelected}>{name}</a>
					</li>
				{/each}
			</ul>
		</nav>
	</div>

	<Footer />
</aside>
