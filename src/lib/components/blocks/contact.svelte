<script lang='ts'>
	import { FloatingWindow } from '../ui';

	interface Props {
		open: boolean;
	}

	let { open = $bindable(false) }: Props = $props();
</script>

<FloatingWindow bind:open>
	{#snippet header()}
		<h2 class='text-xl font-medium text-foreground'>contacto</h2>
	{/snippet}
	{#snippet content()}
		<section>henlo</section>
	{/snippet}
</FloatingWindow>
