<script lang='ts'>
	import TranslateIcon from 'phosphor-svelte/lib/Translate';
	import GraduationCapIcon from 'phosphor-svelte/lib/GraduationCap';
	import ProfilePicture from '$lib/assets/images/profile.jpg?enhanced';

	import { EDUCATION, PERSONAL_SKILLS } from '$lib/constants';

	import { Link, BlockList, BlockItem, BulletList, FloatingWindow } from '../ui';

	interface Props {
		open: boolean;
	}

	let { open = $bindable(false) }: Props = $props();
</script>

<FloatingWindow bind:open>
	{#snippet header()}
		<h2 class='text-xl font-medium text-foreground'>sobre mi</h2>
	{/snippet}

	{#snippet content()}
		<section class='flex flex-col gap-y-6'>
			<div
				class='
					sticky top-0 flex items-center gap-x-8 border-b border-muted bg-background
					px-10 py-6
				'
			>
				<div
					class='aspect-square size-24 rounded-full bg-alt-background'
				>
					<enhanced:img
						class='rounded-full object-contain'
						alt="Ariel Salgado's profile"
						src={ProfilePicture}
					/>
				</div>
				<hgroup>
					<h3 class='pb-1 text-3xl text-primary'>
						Ariel Salgado Acevedo
					</h3>
					<p class='text-lg'>Ingeniero Civil Informático</p>
					<p class='text-lg'>
						Actualmente CIO en <Link
							class='text-primary'
							href='https://redoceanservice.com'
							target='_blank'>RedOcean</Link
						>
					</p>
				</hgroup>
			</div>

			<!-- Self introduction -->
			<div
				class='
					space-y-4 px-10
					*:leading-relaxed
				'
			>
				<p>
					Soy un programador con experiencia en el desarrollo de
					aplicaciones web, diseño de arquitecturas de software y
					gestión de bases de datos. Mi formación combina sólidos
					conocimientos en programación, estructuras de datos y
					sistemas distribuidos, con habilidades prácticas en el uso
					de tecnologías modernas para crear soluciones eficientes y
					escalables.
				</p>

				<p>
					Dentro de mi trabajo, he participado en diversas etapas del
					ciclo de desarrollo de software, desde el análisis de
					requerimientos hasta el despliegue en producción.
				</p>

				<BulletList items={PERSONAL_SKILLS} />
			</div>

			<!-- Education -->
			<div class='mt-2 px-10'>
				<span class='flex items-center gap-x-2'>
					<GraduationCapIcon
						class='inline-block size-6 align-middle'
					/>
					<h4 class='text-2xl font-semibold uppercase'>Educación</h4>
				</span>
				<BlockList
					items={EDUCATION.map(({ degree, at }) => ({
			title: degree,
			subtitle: at,
		}))}
				/>
			</div>

			<!-- Languages -->
			<div class='px-10 pb-22'>
				<span class='mb-4 flex items-center gap-x-2'>
					<TranslateIcon class='inline-block size-6 align-middle' />
					<h4 class='text-2xl font-semibold uppercase'>Idiomas</h4>
				</span>

				<ul>
					<BlockItem>
						Mi lengua nativa es el español y poseo un nivel avanzado
						de inglés (C1), acreditado con un
						<Link
							class='text-primary'
							href='https://cert.efset.org/8zeB34'
							target='_blank'
						>
							certificado
						</Link>
					</BlockItem>
				</ul>
			</div>
		</section>
	{/snippet}
</FloatingWindow>
