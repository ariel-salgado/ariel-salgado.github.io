<script lang="ts">
	import '../app.pcss';
	import { Header, Footer } from '$lib/components/ui';

	const { children } = $props();
</script>

<svelte:head>
	<title>Ariel Salgado | Portfolio</title>
	<meta
		name="description"
		content="Estudiante tesista de Ingeniería Civil en Informática. Abierto a oportunidades laborales que me permitan seguir desarrollandome profesionalmente."
	/>
</svelte:head>

<div class="grid grid-rows-[auto_1fr_auto] text-sm text-clr-text-primary md:text-base xl:text-lg">
	<Header />

	<main class="min-h-screen px-8 md:px-12 xl:px-36">
		{@render children()}
	</main>

	<Footer />
</div>
