<script lang='ts'>
	import CodeIcon from 'phosphor-svelte/lib/Code';
	import QuestionMark from 'phosphor-svelte/lib/Question';
	import EnvelopeIcon from 'phosphor-svelte/lib/Envelope';
	import GithubIcon from 'phosphor-svelte/lib/GithubLogo';
	import BarricadeIcon from 'phosphor-svelte/lib/Barricade';
	import BriefcaseIcon from 'phosphor-svelte/lib/Briefcase';
	import ReadCvLogoIcon from 'phosphor-svelte/lib/ReadCvLogo';
	import IdentificationCardIcon from 'phosphor-svelte/lib/IdentificationCard';

	import { Link } from '$lib/components/ui';
	import {
		Faq,
		AboutMe,
		Contact,
		Projects,
		Building,
		Experience,
		DownloadCV,
	} from '$lib/components/blocks';

	let open_faq = $state<boolean>(false);
	let open_about = $state<boolean>(false);
	let open_contact = $state<boolean>(false);
	let open_building = $state<boolean>(false);
	let open_download = $state<boolean>(false);
	let open_proyects = $state<boolean>(false);
	let open_experience = $state<boolean>(false);
</script>

<!-- Github -->
<div class='absolute right-6 bottom-6 flex items-center gap-x-3'>
	<Link
		class='cursor-pointer'
		href='https://github.com/ariel-salgado'
		target='_blank'
	>
		<GithubIcon
			class='
				inline-block size-10 fill-muted-foreground align-middle transition-colors
				focus-within:fill-primary
				hover:fill-primary
			'
		/>
	</Link>
</div>

<!-- Top Banner -->
<div
	class='
		absolute top-4 right-4 flex items-center gap-x-3 rounded-2xl border-2 border-primary/60 px-6 py-2
		text-foreground select-none
	'
>
	<span class='relative flex size-3'>
		<span
			class='absolute inline-flex size-full animate-ping rounded-full bg-foreground opacity-75'
		></span>
		<span class='relative inline-flex size-3 rounded-full bg-primary/60'
		></span>
	</span>
	<span>Buscando trabajo...</span>
</div>

<!-- Signature -->
<aside
	class='
		absolute top-1/2 -right-8 -z-1 flex -translate-y-1/2 -rotate-90 flex-col items-center text-center
		font-mono text-xs text-muted-foreground select-none
	'
>
	<span>Hecho con Svelte.</span>
	<span>Ariel Salgado @ 2025</span>
</aside>

<!-- Dock -->
<aside
	class='
		absolute top-4 left-4 z-10000 flex h-[calc(100vh-2rem)] w-16 flex-col justify-between rounded-2xl
		border border-alt-background bg-background/60 px-1.5 py-6 text-foreground
	'
>
	<div class='flex w-full flex-col items-center gap-y-2'>
		<button
			class='
				size-full cursor-pointer rounded-md p-1.5 transition-colors
				focus-within:bg-alt-background
				hover:bg-alt-background
			'
			onclick={() => (open_about = !open_about)}
		>
			<IdentificationCardIcon
				class='inline-block size-full align-middle'
			/>
		</button>
		<button
			class='
				size-full cursor-pointer rounded-md p-1.5 transition-colors
				focus-within:bg-alt-background
				hover:bg-alt-background
			'
			onclick={() => (open_experience = !open_experience)}
		>
			<BriefcaseIcon class='inline-block size-full align-middle' />
		</button>
		<button
			class='
				size-full cursor-pointer rounded-md p-1.5 transition-colors
				focus-within:bg-alt-background
				hover:bg-alt-background
			'
			onclick={() => (open_proyects = !open_proyects)}
		>
			<CodeIcon class='inline-block size-full align-middle' />
		</button>
		<button
			class='
				size-full cursor-pointer rounded-md p-1.5 transition-colors
				focus-within:bg-alt-background
				hover:bg-alt-background
			'
			onclick={() => (open_faq = !open_faq)}
		>
			<QuestionMark class='inline-block size-full align-middle' />
		</button>
		<button
			class='
				size-full cursor-pointer rounded-md p-1.5 transition-colors
				focus-within:bg-alt-background
				hover:bg-alt-background
			'
			onclick={() => (open_contact = !open_contact)}
		>
			<EnvelopeIcon class='inline-block size-full align-middle' />
		</button>
	</div>

	<div class='flex w-full flex-col items-center gap-y-2'>
		<button
			class='
				size-full cursor-pointer rounded-md p-1.5 transition-colors
				focus-within:bg-alt-background
				hover:bg-alt-background
			'
		>
			<BarricadeIcon
				class='inline-block size-full align-middle'
				onclick={() => (open_building = !open_building)}
			/>
		</button>
		<button
			class='
				size-full cursor-pointer rounded-md p-1.5 transition-colors
				focus-within:bg-alt-background
				hover:bg-alt-background
			'
			onclick={() => (open_download = !open_download)}
		>
			<ReadCvLogoIcon class='inline-block size-full align-middle' />
		</button>
	</div>
</aside>

<Faq bind:open={open_faq} />
<AboutMe bind:open={open_about} />
<Contact bind:open={open_contact} />
<Projects bind:open={open_proyects} />
<Experience bind:open={open_experience} />

<Building bind:open={open_building} />
<DownloadCV bind:open={open_download} />
