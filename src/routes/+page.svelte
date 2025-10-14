<script lang='ts'>
	import InfoIcon from 'phosphor-svelte/lib/Info';
	import FolderIcon from 'phosphor-svelte/lib/Folder';
	import QuestionIcon from 'phosphor-svelte/lib/Question';
	import EnvelopeIcon from 'phosphor-svelte/lib/Envelope';
	import BriefcaseIcon from 'phosphor-svelte/lib/Briefcase';

	import { floatable } from '$lib/utils';
	import { Window, FloatingWindow } from '$lib/components/ui';
	import { Faq, AboutMe, Projects, Experience } from '$lib/components/blocks';

	let open_faq = $state<boolean>(false);
	let open_about = $state<boolean>(false);
	let open_contact = $state<boolean>(false);
	let open_proyects = $state<boolean>(false);
	let open_experience = $state<boolean>(false);

	let main_window = $state<HTMLDivElement>();
</script>

<div class='grid size-full place-items-center items-center'>
	<Window bind:ref={main_window}>
		{#snippet header()}
			<span
				class='size-full cursor-move content-center text-xl font-medium text-foreground select-none'
				{@attach floatable(main_window)}
			>
				inicio
			</span>
		{/snippet}
		{#snippet content()}
			<div class='grid size-full grid-rows-[1fr_auto] items-center'>
				<hgroup class='text-center'>
					<h1 class='text-6xl leading-relaxed'>
						hola! <span class='font-medium'>soy ariel</span>
					</h1>
					<p class='text-2xl'>ingeniero civil informático</p>
				</hgroup>

				<div
					class='flex w-full items-center justify-center gap-x-3 p-8'
				>
					<button
						class='cursor-pointer'
						onclick={() => (open_about = !open_about)}
					>
						<InfoIcon class='inline-block size-18 align-middle' />
					</button>
					<button
						class='cursor-pointer'
						onclick={() => (open_experience = !open_experience)}
					>
						<BriefcaseIcon
							class='inline-block size-18 align-middle'
						/>
					</button>
					<button
						class='cursor-pointer'
						onclick={() => (open_proyects = !open_proyects)}
					>
						<FolderIcon class='inline-block size-18 align-middle' />
					</button>
					<button
						class='cursor-pointer'
						onclick={() => (open_faq = !open_faq)}
					>
						<QuestionIcon
							class='inline-block size-18 align-middle'
						/>
					</button>
					<button
						class='cursor-pointer'
						onclick={() => (open_contact = !open_contact)}
					>
						<EnvelopeIcon
							class='inline-block size-18 align-middle'
						/>
					</button>
				</div>
			</div>
		{/snippet}
	</Window>
</div>

<Faq bind:open={open_faq} />
<AboutMe bind:open={open_about} />
<Projects bind:open={open_proyects} />
<Experience bind:open={open_experience} />

<FloatingWindow bind:open={open_contact}>
	{#snippet header()}
		<h2 class='text-xl font-medium text-foreground'>contacto</h2>
	{/snippet}
	{#snippet content()}
		<section>henlo</section>
	{/snippet}
</FloatingWindow>
