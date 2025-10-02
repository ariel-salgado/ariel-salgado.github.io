<script lang='ts'>
	import type { Snippet } from 'svelte';

	import '../app.css';

	import { Particles } from '$lib/components';
	import { onNavigate } from '$app/navigation';

	interface Props {
		children: Snippet;
	}

	const { children }: Props = $props();

	onNavigate((navigation) => {
		if (!document.startViewTransition) {
			return;
		}

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
</script>

<div class='
	relative size-full h-screen overflow-hidden bg-gradient-to-t from-background
	to-black
'>
	<div class='absolute inset-0 isolate z-0 mystic-mist opacity-40'></div>
	<Particles />

	<main class='isolate z-10 size-full'>
		{@render children()}
	</main>
</div>
