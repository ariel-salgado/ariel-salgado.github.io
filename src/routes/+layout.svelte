<script lang='ts'>
	import '../app.css';

	import { onNavigate } from '$app/navigation';
	import { Footer, Header } from '$lib/components/ui';

	const { children } = $props();

	onNavigate(({ complete }) => {
		if (!document.startViewTransition)
			return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await complete;
			});
		});
	});
</script>

<div class='text-text-primary bg-bg-primary grid grid-rows-[auto_1fr_auto] text-sm md:text-base xl:text-lg'>
	<Header />

	<main class='min-h-screen px-8 md:px-12 xl:px-36'>
		{@render children()}
	</main>

	<Footer />
</div>
