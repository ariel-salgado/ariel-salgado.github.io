<script lang='ts'>
	import type { HTMLAttributes } from 'svelte/elements';

	import { GithubIcon, LinkedinIcon } from '$lib/components/icons';
	import { GITHUB_URL, LINKEDIN_URL } from '$lib/config';
	import { cn } from '$lib/utils';

	interface Props extends HTMLAttributes<HTMLElement> {}

	const { class: className, ...props }: Props = $props();
</script>

<footer
	class={cn(
		'bg-bg-secondary grid h-40 grid-cols-3 grid-rows-2 place-items-center py-8 px-8 shadow md:h-44 md:px-12 xl:h-56 xl:py-12 xl:px-36',
		className,
	)}
	{...props}
>
	<div class='col-start-2 inline-flex items-center justify-center gap-x-2'>
		<a href={GITHUB_URL} target='_blank' aria-label='Github'>
			<GithubIcon
				class='fill-text-primary focus-within:fill-accent-primary hover:fill-accent-primary inline-block size-9 align-middle transition-colors md:size-10'
			/>
		</a>
		<a href={LINKEDIN_URL} target='_blank' aria-label='Linkedin'>
			<LinkedinIcon
				class='fill-text-primary focus-within:fill-accent-primary hover:fill-accent-primary inline-block size-9 align-middle transition-colors md:size-10'
			/>
		</a>
	</div>

	<div
		class='col-span-3 w-full *:text-center *:text-xs *:leading-relaxed md:*:text-sm xl:*:text-base'
	>
		<p>Ariel Salgado @ {new Date().getFullYear()}</p>
		<p>
			Powered by <a
				href='https://svelte.dev/'
				target='_blank'
				class='focus-within:text-accent-primary hover:text-accent-primary transition-colors'
			>Svelte</a
			>.
		</p>
	</div>
</footer>
