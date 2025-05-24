<script lang='ts'>
	import { MoonIcon, SunIcon } from '$lib/components/icons';

	let theme: 'dark' | 'light' | undefined = $state();

	$effect.pre(() => {
		const savedTheme = localStorage.getItem('theme');

		if (savedTheme) {
			theme = savedTheme as 'dark' | 'light';
		}
		else {
			theme = (document.documentElement.dataset.theme as 'dark' | 'light') || 'dark';
		}

		document.documentElement.dataset.theme = theme;
	});

	const toggleTheme = () => {
		theme = theme === 'dark' ? 'light' : 'dark';
		localStorage.setItem('theme', theme);
		document.documentElement.dataset.theme = theme;
	};
</script>

<button onclick={toggleTheme} aria-label='Theme toggle'>
	{#if theme === 'dark'}
		<SunIcon
			class='focus-within:stroke-accent-primary hover:stroke-accent-primary ml-1 transition-colors xl:size-7'
		/>
	{:else}
		<MoonIcon
			class='focus-within:stroke-accent-primary hover:stroke-accent-primary ml-1 transition-colors xl:size-7'
		/>
	{/if}
</button>
