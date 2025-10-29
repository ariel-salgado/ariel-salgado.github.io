<script lang='ts'>
	import CV from '$lib/assets/docs/ariel-salgado-cv.pdf';
	import CV_EN from '$lib/assets/docs/ariel-salgado-cv-en.pdf';
	import ArrowSquareOutIcon from 'phosphor-svelte/lib/ArrowSquareOut';

	import { Link, FloatingWindow } from '../ui';

	interface Props {
		open: boolean;
	}

	let { open = $bindable(false) }: Props = $props();
</script>

<FloatingWindow bind:open>
	{#snippet header()}
		<h2 class='text-xl font-medium text-foreground'>currículum</h2>
	{/snippet}

	{#snippet content()}
		<section class='flex flex-col px-10 pt-6 pb-24'>
			<div class='space-y-4 *:leading-relaxed'>
				<p>
					Aquí puedes revisar mi currículum, donde resumo los aspectos
					más importantes de mi formación y experiencia laboral. Está
					disponible tanto en español como en inglés.
				</p>

				<p class='flex flex-col gap-y-2'>
					<Link
						class='text-primary underline transition-colors hover:text-primary/80'
						href={CV}
						target='_blank'
					>
						Descargar CV
						<ArrowSquareOutIcon
							class='inline-block size-4 align-middle'
						/>
					</Link>

					<Link
						class='text-primary underline transition-colors hover:text-primary/80'
						href={CV_EN}
						target='_blank'
					>
						Descargar CV (Inglés)
						<ArrowSquareOutIcon
							class='inline-block size-4 align-middle'
						/>
					</Link>
				</p>
			</div>
		</section>
	{/snippet}
</FloatingWindow>
