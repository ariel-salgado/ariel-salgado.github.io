<script lang='ts'>
	import { BulletList, FloatingWindow } from '../ui';

	interface Props {
		open: boolean;
	}

	let { open = $bindable(false) }: Props = $props();

	const PENDING_FEATURES = [
		'Diseño responsive para dispositivos móviles',
		'Temas personalizados',
		'Opciones de idioma',
		'Integración de projectos',
		'Mejorar la experiencia de uso',
	];
</script>

<FloatingWindow bind:open>
	{#snippet header()}
		<h2 class='text-xl font-medium text-foreground'>
			sitio en construcción
		</h2>
	{/snippet}
	{#snippet content()}
		<section class='flex flex-col px-10 pt-6 pb-24'>
			<div class='space-y-4 *:leading-relaxed'>
				<p>
					Este sitio aún está tomando forma. Estoy agregando poco a
					poco las funciones y secciones que harán que la experiencia
					sea más completa. Si algo no funciona del todo bien, es
					porque estoy trabajando en eso.
				</p>

				<p>Aún tengo pendiente:</p>

				<BulletList items={PENDING_FEATURES} />
			</div>
		</section>
	{/snippet}
</FloatingWindow>
