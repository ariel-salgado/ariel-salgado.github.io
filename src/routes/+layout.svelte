<script lang="ts">
	import '../app.css';
	import { Header, Footer } from '$lib/components/ui';

	const { children } = $props();
</script>

<div class="text-text-primary grid grid-rows-[auto_1fr_auto] text-sm md:text-base xl:text-lg">
	<Header />

	<main class="min-h-screen px-8 md:px-12 xl:px-36">
		{@render children()}
	</main>

	<Footer />
</div>
