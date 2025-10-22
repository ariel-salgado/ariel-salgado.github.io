<script lang='ts'>
	import type { Snippet } from 'svelte';

	import '../app.css';

	import { onNavigate } from '$app/navigation';
	import { Particles } from '$lib/components/ui';
	import { set_window_context } from '$lib/components/ui/window';

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

	set_window_context();
</script>

<div
	class='relative size-full h-screen overflow-hidden bg-linear-to-t from-background to-black'
>
	<div class='absolute inset-0 isolate z-0 mystic-mist opacity-40'></div>
	<Particles />

	<main class='isolate z-10 size-full'>
		{@render children()}
	</main>
</div>
