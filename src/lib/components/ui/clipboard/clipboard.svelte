<script lang="ts">
	import type { HTMLButtonAttributes } from 'svelte/elements';

	import { CheckedClipboardIcon, ClipboardIcon } from '$lib/components/icons';

	interface Props extends HTMLButtonAttributes {
		text: string;
	}

	let { text, ...props }: Props = $props();

	let copied: boolean = $state(false);

	const copyToClipboard = () => {
		navigator.clipboard.writeText(text).then(() => {
			copied = true;
			setTimeout(() => {
				copied = false;
			}, 1500);
		});
	};
</script>

<button type="button" onclick={copyToClipboard} aria-label="Copy to clipboard" {...props}>
	{#if !copied}
		<ClipboardIcon />
	{:else}
		<CheckedClipboardIcon class="stroke-clr-accent-primary" />
	{/if}
</button>
