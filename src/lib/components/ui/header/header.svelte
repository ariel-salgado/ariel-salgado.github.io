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
	class="fixed top-0 z-50 flex h-14 w-full items-center justify-between bg-clr-bg-secondary px-8 shadow md:px-12 lg:h-16 xl:px-36"
>
	<!-- Logo -->
	<span class="font-mono text-2xl italic text-clr-accent-primary lg:text-3xl">
		<a href="/"> &lt;/&gt;</a>
	</span>

	<button class="block lg:hidden" aria-label="Toggle menu" onclick={toggleMenu}>
		{#if menuIsOpen}
			<CloseMenuIcon class="size-6 fill-clr-text-primary" aria-label="Close menu" />
		{:else}
			<OpenMenuIcon class="size-6 fill-clr-text-primary" aria-label="Open menu" />
		{/if}
	</button>

	<ul class="hidden lg:inline-flex lg:items-center lg:gap-x-5 xl:gap-x-6">
		{#each links as { name, href }}
			<li class="xl:text-lg">
				<a
					{href}
					class="p-1 font-mono text-clr-text-primary transition-colors focus-within:text-clr-accent-primary hover:text-clr-accent-primary"
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
