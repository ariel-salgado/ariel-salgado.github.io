<script lang='ts'>
	import InfoIcon from 'phosphor-svelte/lib/Info';
	import FolderIcon from 'phosphor-svelte/lib/Folder';
	import QuestionIcon from 'phosphor-svelte/lib/Question';
	import EnvelopeIcon from 'phosphor-svelte/lib/Envelope';
	import RedOceanDemo from '$lib/assets/videos/redocean.mp4';
	import ProfilePicture from '$lib/assets/images/profile.jpg?enhanced';

	import { Window, FloatingWindow, Link, Accordion, Badge } from '$lib/components';

	let open_faq = $state<boolean>(false);
	let open_info = $state<boolean>(false);
	let open_works = $state<boolean>(false);
	let open_contact = $state<boolean>(false);
</script>

<div class='grid size-full place-items-center items-center'>
	<Window>
		{#snippet header()}
			<span class='text-xl font-medium text-foreground'>inicio</span>
		{/snippet}
		{#snippet content()}
			<div class='grid size-full grid-rows-[1fr_auto] items-center'>
				<hgroup class='text-center'>
					<h1 class='text-6xl leading-relaxed'>hola! <span class='font-medium'>soy ariel</span></h1>
					<p class='text-2xl'>ingeniero civil informático</p>
				</hgroup>

				<div class='flex w-full items-center justify-center gap-x-3 p-8'>
					<button class='cursor-pointer' onclick={() => open_info = !open_info}>
						<InfoIcon class='inline-block size-18 align-middle' />
					</button>

					<button class='cursor-pointer' onclick={() => open_works = !open_works}>
						<FolderIcon class='inline-block size-18 align-middle' />
					</button>

					<button class='cursor-pointer' onclick={() => open_faq = !open_faq}>
						<QuestionIcon class='inline-block size-18 align-middle' />
					</button>

					<button class='cursor-pointer' onclick={() => open_contact = !open_contact}>
						<EnvelopeIcon class='inline-block size-18 align-middle' />
					</button>
				</div>
			</div>
		{/snippet}
	</Window>
</div>

<FloatingWindow bind:open={open_info}>
	{#snippet header()}
		<h2 class='text-xl font-medium text-foreground'>sobre mi</h2>
	{/snippet}
	{#snippet content()}
		<section class='grid grid-rows-[auto_1fr]'>
			<div class='sticky top-0 flex items-center gap-x-8 border-b border-muted bg-background px-10 py-8'>
				<div class='aspect-square size-24 rounded-full bg-alt-background'>
					<enhanced:img class='rounded-full object-contain' alt="Ariel Salgado's profile" src={ProfilePicture} />
				</div>
				<hgroup>
					<h3 class='pb-1 text-3xl text-primary'>Ariel Salgado Acevedo</h3>
					<p class='text-lg'>Ingeniero Civil Informático</p>
					<p class='text-lg'>Actualmente CIO en <Link class='text-primary' href='https://redoceanservice.com' target='_blank'>RedOcean</Link></p>
				</hgroup>
			</div>
			<div class='flex flex-col py-2'>
				<div class='space-y-2 px-10 py-6'>
					<p>hola! soy ariel, ingeniero civil informático, y yo...</p>

					<ul class='list-disc space-y-1 pl-6'>
						<li>analizo requerimientos de software</li>
						<li>diseño y modelo bases de datos</li>
						<li>desarrollo aplicaciones web frontend y backend</li>
						<li>implemento y consumo APIs</li>
						<li>despliego aplicaciones en la nube</li>
					</ul>
				</div>
				<div class='px-10 py-6'>
					<h4 class='text-2xl font-semibold uppercase'>Educación</h4>
					<ul class='space-y-4 py-4'>
						<li class='rounded-r-md border-l-4 border-secondary bg-alt-background py-3 pl-6'>
							<span class='text-xl'>Ingeniería Civil en Informática</span>
							<p class='text-muted-foreground'>Universidad de Valparaíso (2024)</p>
						</li>

						<li class='rounded-r-md border-l-4 border-secondary bg-alt-background py-3 pl-6'>
							<span class='text-xl'>Licenciado en Ciencias de la Ingeniería</span>
							<p class='text-muted-foreground'>Universidad de Valparaíso (2024)</p>
						</li>
					</ul>
				</div>
			</div>
		</section>
	{/snippet}
</FloatingWindow>

<FloatingWindow bind:open={open_works}>
	{#snippet header()}
		<h2 class='text-xl font-medium text-foreground'>mis proyectos</h2>
	{/snippet}
	{#snippet content()}
		<section>
			<div class='px-10 py-6'>
				<Accordion>
					{#snippet header()}
						<hgroup class='w-full'>
							<h3 class='pb-1 text-2xl font-medium text-primary'>ingeniero de software @ RedOcean</h3>
							<p class='text-muted-foreground'>octubre 2024 - actualidad</p>
						</hgroup>
					{/snippet}
					{#snippet content()}
						<div class='space-y-4 pb-8'>
							<p>
								desarrollé una plataforma web con un mapa interactivo que permite visualizar el movimiento de partículas a la deriva,
								impulsadas por corrientes en mar abierto. Su objetivo es ofrecer un pronóstico de hasta 30 días sobre el comportamiento
								de las corrientes y su impacto en cuerpos como personas, embarcaciones o contaminantes. El modelo predictivo es configurable
								según las necesidades del usuario, y cuenta con un visualizador temporal que simula el desplazamiento de las partículas.
							</p>
							<p>
								también implementé una API para la autenticación de usuarios y la validación de los datos antes de enviarlos al modelo.
								esta API almacena la información en una base de datos, lo que permite guardar y reutilizar configuraciones personalizadas
								en futuras simulaciones.
							</p>

						</div>

						<div class='overflow-hidden rounded-lg border-2 border-secondary'>
							<video
								autoplay
								controls={false}
								loop
								muted
								oncontextmenu={e => e.preventDefault()}
								playsinline
								src={RedOceanDemo}
							>
								<track kind='captions' />
							</video>
						</div>

						<div class='mt-8 flex flex-wrap gap-2 pb-2'>
							<Badge>SvelteKit</Badge>
							<Badge>Vite</Badge>
							<Badge>TailwindCSS</Badge>
							<Badge>TypeScript</Badge>
							<Badge>Zod</Badge>
							<Badge>MapboxGL</Badge>
							<Badge>Turf.js</Badge>
							<Badge>Bun.js</Badge>
							<Badge>Node.js</Badge>
							<Badge>Hono.js</Badge>
							<Badge>Drizzle ORM</Badge>
							<Badge>SQLite</Badge>
							<Badge>Open API Specification</Badge>
							<Badge>Google Cloud</Badge>
						</div>
					{/snippet}
				</Accordion>
			</div>
		</section>
	{/snippet}
</FloatingWindow>

<FloatingWindow bind:open={open_contact}>
	{#snippet header()}
		<h2 class='text-xl font-medium text-foreground'>contacto</h2>
	{/snippet}
	{#snippet content()}
		<section>
			henlo
		</section>
	{/snippet}
</FloatingWindow>
