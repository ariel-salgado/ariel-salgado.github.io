<script lang="ts">
	import { Menu, ThemeToggle } from '$lib/components/ui';
	import { CloseMenuIcon, OpenMenuIcon } from '$lib/components/icons';

	type Link = {
		name: string;
		href: string;
	};

	const links: Link[] = [
		{ name: 'inicio', href: '#inicio' },
		{ name: 'acerca', href: '#acerca' },
		{ name: 'experiencia', href: '#experiencia' },
		{ name: 'contacto', href: '#contacto' }
	];

	const toggleMenu = () => (menuIsOpen = !menuIsOpen);

	let body: HTMLBodyElement;
	let menuIsOpen: boolean = $state(false);

	$effect(() => {
		body.style.overflow = menuIsOpen ? 'hidden' : 'auto';
	});
</script>

<svelte:body bind:this={body} />

<header
	class="bg-bg-secondary fixed top-0 z-50 flex h-14 w-full items-center justify-between px-8 shadow md:px-12 lg:h-16 xl:px-36"
>
	<!-- Logo -->
	<span class="text-accent-primary font-mono text-2xl italic lg:text-3xl">
		<a href="/"> &lt;/&gt;</a>
	</span>

	<button class="block lg:hidden" aria-label="Toggle menu" onclick={toggleMenu}>
		{#if menuIsOpen}
			<CloseMenuIcon class="fill-text-primary size-6" aria-label="Close menu" />
		{:else}
			<OpenMenuIcon class="fill-text-primary size-6" aria-label="Open menu" />
		{/if}
	</button>

	<ul class="hidden lg:inline-flex lg:items-center lg:gap-x-5 xl:gap-x-6">
		{#each links as { name, href }}
			<li class="xl:text-lg">
				<a
					{href}
					class="text-text-primary focus-within:text-accent-primary hover:text-accent-primary p-1 font-mono transition-colors"
				>
					{name}
				</a>
			</li>
		{/each}
		<!-- <li><ThemeToggle /></li> -->
	</ul>
</header>

{#if menuIsOpen}
	<Menu {links} onSelected={toggleMenu} />
{/if}
