<script lang="ts">
	import type { LayoutProps } from './$types';
	import type { Snippet } from 'svelte';

	import '../app.css';

	interface Props extends LayoutProps {}

	let { children }: Props = $props();

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

{@render children()}
