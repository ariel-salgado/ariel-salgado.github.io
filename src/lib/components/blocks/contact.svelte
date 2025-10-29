<script lang='ts'>
	import GithubIcon from 'phosphor-svelte/lib/GithubLogo';
	import LinkedinIcon from 'phosphor-svelte/lib/LinkedinLogo';
	import EnvelopeSimpleIcon from 'phosphor-svelte/lib/EnvelopeSimple';

	import { toast } from 'svelte-sonner';

	import { Link, Button, FloatingWindow } from '../ui';

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
		<section class='relative flex flex-col px-10 pt-6 pb-24'>
			<div class='space-y-4 *:leading-relaxed'>
				<p>
					Si quieres ponerte en contacto conmigo, la manera más
					sencilla y directa es a través del correo electrónico. No
					suelo estar muy pendiente de redes sociales ni de otros
					canales, así que el correo es la mejor forma de asegurarte
					una respuesta.
				</p>

				<p>
					Estoy abierto a todo tipo de propuestas laborales,
					colaboraciones o proyectos interesantes que se alineen con
					mi perfil y mis intereses. Ya sea una oportunidad
					profesional, una idea que quieras desarrollar.
				</p>

				<ul class='mt-16 flex items-center gap-x-4'>
					<li>
						<Link
							class='cursor-pointer'
							href='mailto:ariel.salgado.acevedo@gmail.com'
							target='_blank'
						>
							<EnvelopeSimpleIcon
								class='
									inline-block size-12 align-middle transition-colors
									focus-within:fill-primary
									hover:fill-primary
								'
								weight='light'
							/>
						</Link>
					</li>
					<li>
						<Link
							class='cursor-pointer'
							href='https://www.linkedin.com/in/ariel-salgado'
							target='_blank'
						>
							<LinkedinIcon
								class='
									inline-block size-10 align-middle transition-colors
									focus-within:fill-primary
									hover:fill-primary
								'
							/>
						</Link>
					</li>
					<li>
						<Link
							class='cursor-pointer'
							href='https://github.com/ariel-salgado'
							target='_blank'
						>
							<GithubIcon
								class='
									inline-block size-10 align-middle transition-colors
									focus-within:fill-primary
									hover:fill-primary
								'
							/>
						</Link>
					</li>
				</ul>

				<p class='-mt-3'>¡No dudes en escribirme!</p>
			</div>

			<div class='absolute bottom-0 left-10'>
				<Button
					onclick={() => {
						toast.success('Correo copiado en el portapapeles.');
						navigator.clipboard.writeText(
							'ariel.salgado.acevedo@gmail.com',
						);
					}}
					variant='secondary'
				>
					Copiar correo
				</Button>
			</div>
		</section>
	{/snippet}
</FloatingWindow>
