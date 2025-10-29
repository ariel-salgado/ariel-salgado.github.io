<script lang='ts'>
	import type { Snippet } from 'svelte';

	import '../app.css';

	import favicon from '$lib/assets/favicon.ico';

	import { Toaster } from 'svelte-sonner';
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

<svelte:head>
	<link href={favicon} rel='icon' />
	<title>Portafolio | Ariel Salgado</title>
	<meta
		name='description'
		content='Ingeniero Civil Informático con experiencia en desarrollo web. Apasionado por crear soluciones eficientes y escalables.'
	/>
	<meta
		name='keywords'
		content='Ariel Salgado, Ingeniero Civil Informático, Desarrollador Web, Arquitectura de Software, Programador, FullStack,'
	/>
	<meta name='author' content='Ariel Salgado Acevedo' />
</svelte:head>

<div
	class='relative size-full h-screen overflow-hidden bg-linear-to-t from-background to-black'
>
	<div class='absolute inset-0 isolate z-0 mystic-mist opacity-40'></div>
	<Particles />

	<main class='isolate z-10 size-full'>
		{@render children()}
	</main>
</div>

<Toaster
	position='top-center'
	toastOptions={{
		unstyled: true,
		classes: {
			toast: 'w-92 py-3.5 rounded-md bg-background border border-secondary px-4 flex items-center *:text-primary',
			title: 'ml-2.5 font-mono font-medium text-sm text-foreground',
			description: '',
			actionButton: '',
			cancelButton: '',
			closeButton: '',
		},
	}}
/>
