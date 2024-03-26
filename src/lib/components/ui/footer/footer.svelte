<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';

	import { cn } from '$lib/utils';
	import { GITHUB_URL, LINKEDIN_URL } from '$lib/config';
	import { GithubIcon, LinkedinIcon } from '$lib/components/icons';

	interface Props extends HTMLAttributes<HTMLElement> {}

	const { class: className, ...props }: Props = $props();
</script>

<footer
	class={cn(
		'grid h-40 grid-cols-3 grid-rows-2 place-items-center bg-clr-bg-secondary px-8 py-8 shadow md:h-44 md:px-12 xl:h-56 xl:px-36 xl:py-12',
		className
	)}
	{...props}
>
	<div class="col-start-2 inline-flex items-center justify-center gap-x-2">
		<a href={GITHUB_URL} target="_blank" aria-label="Github">
			<GithubIcon
				class="inline-block size-9 fill-clr-text-primary align-middle transition-colors focus-within:fill-clr-accent-primary hover:fill-clr-accent-primary md:size-10"
			/>
		</a>
		<a href={LINKEDIN_URL} target="_blank" aria-label="Linkedin">
			<LinkedinIcon
				class="inline-block size-9 fill-clr-text-primary align-middle transition-colors focus-within:fill-clr-accent-primary hover:fill-clr-accent-primary md:size-10"
			/>
		</a>
	</div>

	<div
		class="col-span-3 w-full *:text-center *:text-xs *:leading-relaxed md:*:text-sm xl:*:text-base"
	>
		<p>Ariel Salgado @ {new Date().getFullYear()}</p>
		<p>
			Powered by <a
				href="https://svelte.dev/"
				target="_blank"
				class="transition-colors focus-within:text-clr-accent-primary hover:text-clr-accent-primary"
				>Svelte</a
			>.
		</p>
	</div>
</footer>
