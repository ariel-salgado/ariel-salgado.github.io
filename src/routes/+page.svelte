<script lang='ts'>
	import InfoIcon from 'phosphor-svelte/lib/Info';
	import FolderIcon from 'phosphor-svelte/lib/Folder';
	import QuestionIcon from 'phosphor-svelte/lib/Question';
	import EnvelopeIcon from 'phosphor-svelte/lib/Envelope';
	import TranslateIcon from 'phosphor-svelte/lib/Translate';
	import BriefcaseIcon from 'phosphor-svelte/lib/Briefcase';
	import RedOceanDemo from '$lib/assets/videos/redocean.mp4';
	import DempsDemo from '$lib/assets/images/demps.jpg?enhanced';
	import GraduationCapIcon from 'phosphor-svelte/lib/GraduationCap';
	import ArrowSquareOutIcon from 'phosphor-svelte/lib/ArrowSquareOut';
	import ProfilePicture from '$lib/assets/images/profile.jpg?enhanced';

	import { floatable } from '$lib/utils';
	import {
		Link,
		Badge,
		Window,
		Accordion,
		FloatingWindow,
		MultiShellCommand,
	} from '$lib/components/ui';

	let open_info = $state<boolean>(false);
	let open_experience = $state<boolean>(false);
	let open_proyects = $state<boolean>(false);
	let open_faq = $state<boolean>(false);
	let open_contact = $state<boolean>(false);

	let main_window = $state<HTMLDivElement>();
</script>

<!-- Main content -->
<div class='grid size-full place-items-center items-center'>
	<Window bind:ref={main_window}>
		{#snippet header()}
			<span
				class='
					size-full cursor-move content-center text-xl font-medium text-foreground
					select-none
				'
				{@attach floatable(main_window)}>inicio</span
				>
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
						onclick={() => (open_info = !open_info)}
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

<!-- About me -->
<FloatingWindow bind:open={open_info}>
	{#snippet header()}
		<h2 class='text-xl font-medium text-foreground'>sobre mi</h2>
	{/snippet}
	{#snippet content()}
		<section class='flex flex-col gap-y-6'>
			<!-- Profile card -->
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

				<ul
					class='
						list-disc pl-8
						*:pl-2
					'
				>
					<li>Análisis de requerimientos de software</li>
					<li>Diseño y modelado de bases de datos</li>
					<li>
						Desarrollo de aplicaciones web tanto frontend como
						backend
					</li>
					<li>Implementación y consumo de APIs</li>
					<li>Despliegue de aplicaciones en la nube</li>
				</ul>
			</div>
			<!-- Education -->
			<div class='mt-2 px-10'>
				<span class='flex items-center gap-x-2'>
					<GraduationCapIcon
						class='inline-block size-6 align-middle'
					/>
					<h4 class='text-2xl font-semibold uppercase'>Educación</h4>
				</span>
				<ul class='space-y-4 py-4'>
					<li
						class='
							rounded-r-md border-l-4 border-secondary bg-alt-background py-3 pl-6
						'
					>
						<span class='block text-xl leading-relaxed'
						>Ingeniería Civil en Informática</span
						>
						<span class='block text-muted-foreground'>
							Universidad de Valparaíso (2024)
						</span>
					</li>

					<li
						class='
							rounded-r-md border-l-4 border-secondary bg-alt-background py-3 pl-6
						'
					>
						<span class='block text-xl leading-relaxed'
						>Licenciado en Ciencias de la Ingeniería</span
						>
						<span class='block text-muted-foreground'>
							Universidad de Valparaíso (2024)
						</span>
					</li>
				</ul>
			</div>
			<!-- Idiomas -->
			<div class='px-10 pb-22'>
				<span class='mb-4 flex items-center gap-x-2'>
					<TranslateIcon class='inline-block size-6 align-middle' />
					<h4 class='text-2xl font-semibold uppercase'>Idiomas</h4>
				</span>

				<p
					class='
						rounded-r-md border-l-4 border-secondary bg-alt-background py-3 pl-6
					'
				>
					Mi lengua nativa es el español y poseo un nivel avanzado de
					inglés (C1), acreditado con un <Link
						class='text-primary'
						href='https://cert.efset.org/8zeB34'
						target='_blank'>certificado</Link
					>.
				</p>
			</div>
		</section>
	{/snippet}
</FloatingWindow>

<!-- Experience -->
<FloatingWindow bind:open={open_experience}>
	{#snippet header()}
		<h2 class='text-xl font-medium text-foreground'>mi experiencia</h2>
	{/snippet}
	{#snippet content()}
		<section class='flex flex-col px-10 pt-6 pb-24'>
			<Accordion>
				{#snippet header()}
					<hgroup class='w-full'>
						<h3 class='pb-1 text-2xl font-medium text-primary'>
							Ingeniero de Software @ RedOcean
						</h3>
						<p class='text-muted-foreground'>
							Octubre 2024 - Actualidad
						</p>
					</hgroup>
				{/snippet}
				{#snippet content()}
					<section class='flex flex-col gap-y-6 py-2'>
						<div class='space-y-4'>
							<p class='leading-relaxed'>
								Hemos desarrollado una plataforma SaaS para la
								predicción de deriva oceánica, en asociación con
								la Armada de Chile.
							</p>
							<p class='leading-relaxed'>
								Esta plataforma cuenta con un mapa interactivo
								que permite visualizar el movimiento de
								partículas a la deriva, impulsadas por
								corrientes en mar abierto. Ofreciendo un
								pronóstico de hasta 30 días sobre el
								comportamiento de las corrientes y su impacto en
								cuerpos como personas, embarcaciones o
								contaminantes.
							</p>

							<p>
								<Link
									class='text-primary'
									href='https://app.redoceanservice.com/'
									target='_blank'
								>
									Enlace
									<ArrowSquareOutIcon
										class='inline-block size-4 align-middle'
									/>
								</Link>
							</p>
						</div>

						<div
							class='overflow-hidden rounded-lg border-2 border-secondary'
						>
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

						<div class='flex flex-wrap gap-2'>
							<Badge>SvelteKit</Badge>
							<Badge>Vite</Badge>
							<Badge>TailwindCSS</Badge>
							<Badge>TypeScript</Badge>
							<Badge>Zod</Badge>
							<Badge>MapboxGL</Badge>
							<Badge>Turf</Badge>
							<Badge>Bun</Badge>
							<Badge>NodeJS</Badge>
							<Badge>Hono</Badge>
							<Badge>Drizzle ORM</Badge>
							<Badge>SQLite</Badge>
							<Badge>Open API Specification</Badge>
							<Badge>Docker</Badge>
							<Badge>Google Cloud</Badge>
						</div>
					</section>
				{/snippet}
			</Accordion>
			<Accordion>
				{#snippet header()}
					<hgroup class='w-full'>
						<h3 class='pb-1 text-2xl font-medium text-primary'>
							Proyecto de Tesis @ Universidad de Valparaíso
						</h3>
						<p class='text-muted-foreground'>
							Julio 2023 - Agosto 2024
						</p>
					</hgroup>
				{/snippet}
				{#snippet content()}
					<section class='flex flex-col gap-y-6 py-2'>
						<div class='space-y-4'>
							<p class='leading-relaxed'>
								Desarrollé una aplicación web como proyecto de
								tesis para optar al título de Ingeniero Civil
								Informático, orientada a la creación y
								mantención de planes de evacuación en zonas
								costeras.
							</p>
							<p class='leading-relaxed'>
								La plataforma permite cargar cartas de
								inundación en formato GeoJSON y visualizarlas
								mediante un mapa interactivo o un editor de
								código integrado. A partir de ellas, es posible
								definir zonas inundables, áreas pobladas y rutas
								de evacuación a evaluar. Además, incluye un
								modelo de simulación configurable, que reproduce
								en tiempo de ejecución el comportamiento de las
								personas durante un evento de tsunami, mostrando
								tanto el proceso de evacuación como la magnitud
								del fenómeno.
							</p>
							<p class='leading-relaxed'>
								Actualmente, la plataforma no puede operar
								completamente, ya que no está conectada al
								simulador; sin embargo, la funcionalidad de
								importar cartas de inundación y editar archivos
								GeoJSON mediante el editor integrado se
								encuentra disponible.
							</p>
							<p>
								<Link
									class='text-primary'
									href='https://demps-demo.netlify.app/entorno'
									target='_blank'
								>
									Enlace
									<ArrowSquareOutIcon
										class='inline-block size-4 align-middle'
									/>
								</Link>
							</p>
						</div>
						<div
							class='overflow-hidden rounded-lg border-2 border-secondary'
						>
							<enhanced:img alt='Demps demo' src={DempsDemo} />
						</div>
						<div class='flex flex-wrap gap-2'>
							<Badge>SvelteKit</Badge>
							<Badge>Vite</Badge>
							<Badge>TailwindCSS</Badge>
							<Badge>TypeScript</Badge>
							<Badge>Zod</Badge>
							<Badge>LeafletJS</Badge>
							<Badge>Turf.js</Badge>
							<Badge>Docker</Badge>
							<Badge>Node.js</Badge>
							<Badge>C++</Badge>
						</div>
					</section>
				{/snippet}
			</Accordion>
			<Accordion>
				{#snippet header()}
					<hgroup class='w-full'>
						<h3 class='pb-1 text-2xl font-medium text-primary'>
							Práctica Profesional @ Consorcio Progresa
						</h3>
						<p class='text-muted-foreground'>
							Marzo 2022 - Octubre 2022
						</p>
					</hgroup>
				{/snippet}
				{#snippet content()}
					<section class='flex flex-col gap-y-6 py-2'>
						<div class='space-y-4'>
							<p class='leading-relaxed'>
								Durante mi práctica profesional trabajé como
								ingeniero de software, encargado de solucionar
								errores dentro del sistema, incluyendo endpoints
								de APIs, y mejorar el diseño de los templates de
								correos enviados mediante SendGrid.
							</p>
							<p class='leading-relaxed'>
								Además, desarrollé un bot de Discord que integra
								múltiples APIs, permitiendo enviar mensajes
								automáticos a un canal de Telegram como
								notificaciones, gestionar issues de GitHub y
								administrar bloques de Notion directamente desde
								Discord.
							</p>
						</div>
						<div class='flex flex-wrap gap-2'>
							<Badge>Angular</Badge>
							<Badge>TypeScript</Badge>
							<Badge>SendGrid</Badge>
							<Badge>DiscordJS</Badge>
							<Badge>Telegram</Badge>
							<Badge>BotFather</Badge>
							<Badge>Github</Badge>
							<Badge>Notion</Badge>
						</div>
					</section>
				{/snippet}
			</Accordion>
		</section>
	{/snippet}
</FloatingWindow>

<FloatingWindow bind:open={open_proyects}>
	{#snippet header()}
		<h2 class='text-xl font-medium text-foreground'>mis proyectos</h2>
	{/snippet}
	{#snippet content()}
		<section class='flex flex-col px-10 pt-6 pb-24'>
			<p>
				He desarrollado algunos proyectos y repositorios personales
				tanto durante mi formación académica como en mi tiempo libre.
			</p>
			<Accordion>
				{#snippet header()}
					<hgroup class='w-full'>
						<h3 class='pb-1 text-2xl font-medium text-primary'>
							ESLint Config
						</h3>
						<p class='text-muted-foreground'>
							@ariel-salgado/eslint-config
						</p>
					</hgroup>
				{/snippet}
				{#snippet content()}
					<section class='flex flex-col gap-y-6 py-2'>
						<p>
							Este proyecto se trata de una configuración de
							ESLint bastante completa y altamente personalizable,
							que incluye una amplia variedad de reglas
							predefinidas. Ofrece soporte para JavaScript,
							TypeScript, Svelte y más. La principal diferencia
							respecto a otras configuraciones radica en que
							incorpora soporte para TailwindCSS y además optimiza
							lógicas booleanas mediante la ley de De Morgan.
						</p>
						<p>
							Este proyecto es público, y se encuentra disponible
							en
							<Link
								class='text-primary'
								href='https://github.com/ariel-salgado/eslint-config/tree/main'
								target='_blank'
							>
								<span>Github</span>
								<ArrowSquareOutIcon
									class='inline-block size-4 align-middle'
								/>
							</Link>
							y
							<Link
								class='text-primary'
								href='https://www.npmjs.com/package/@ariel-salgado/eslint-config'
								target='_blank'
							>
								<span>NPM</span>
								<ArrowSquareOutIcon
									class='inline-block size-4 align-middle'
								/>
							</Link>
							, puedes instalarlo con el siguiente comando:
						</p>
						<div>
							<MultiShellCommand
								package_name='-D @ariel-salgado/eslint-config'
							/>
						</div>
					</section>
				{/snippet}
			</Accordion>
			<Accordion>
				{#snippet header()}
					<hgroup class='w-full'>
						<h3 class='pb-1 text-2xl font-medium text-primary'>
							ESLint Plugin
						</h3>
						<p class='text-muted-foreground'>
							@ariel-salgado/eslint-plugin-ariel
						</p>
					</hgroup>
				{/snippet}
				{#snippet content()}
					<section class='flex flex-col gap-y-6 py-2'>
						<p>
							Este proyecto es un plugin para ESLint que incluye
							un conjunto de reglas personalizadas y que se
							integra directamente con la configuración de ESLint
							mencionada anteriormente. Las reglas definidas no
							solo buscan mejorar la legibilidad del código, sino
							también optimizar la sintaxis y sugerir alternativas
							dentro de las funciones, con el objetivo de mantener
							un estilo de código más consistente y uniforme.
						</p>
						<p>
							Este proyecto es público, y se encuentra disponible
							en
							<Link
								class='text-primary'
								href='https://github.com/ariel-salgado/eslint-plugin-ariel'
								target='_blank'
							>
								<span>Github</span>
								<ArrowSquareOutIcon
									class='inline-block size-4 align-middle'
								/>
							</Link>
							y
							<Link
								class='text-primary'
								href='https://www.npmjs.com/package/eslint-plugin-ariel'
								target='_blank'
							>
								<span>NPM</span>
								<ArrowSquareOutIcon
									class='inline-block size-4 align-middle'
								/>
							</Link>
							, puedes instalarlo con el siguiente comando:
						</p>
						<div>
							<MultiShellCommand
								package_name='-D eslint-plugin-ariel'
							/>
						</div>
					</section>
				{/snippet}
			</Accordion>
			<Accordion>
				{#snippet header()}
					<hgroup class='w-full'>
						<h3 class='pb-1 text-2xl font-medium text-primary'>
							Emosense
						</h3>
						<p class='text-muted-foreground'>
							@ariel-salgado/emosense
						</p>
					</hgroup>
				{/snippet}
				{#snippet content()}
					<section class='flex flex-col gap-y-6 py-2'>
						<p>
							Este proyecto es una exploración comparativa de
							reconocimiento de emociones en el habla utilizando
							dos enfoques distintos: redes neuronales
							tradicionales (MLP) con características extraídas
							manualmente, y redes neuronales convolucionales
							(CNN) con aprendizaje automático de características.
							Desarrollado como parte del electivo de Machine
							Learning en la universidad, EmoSense fue
							implementado sobre la base de datos RAVDESS,
							analizando las fortalezas y limitaciones de cada
							metodología.
						</p>
						<p>
							Este proyecto es público, y se encuentra disponible
							en
							<Link
								class='text-primary'
								href='https://github.com/ariel-salgado/emosense'
								target='_blank'
							>
								<span>Github</span>
								<ArrowSquareOutIcon
									class='inline-block size-4 align-middle'
								/>
							</Link>
						</p>
					</section>
				{/snippet}
			</Accordion>
			<Accordion>
				{#snippet header()}
					<hgroup class='w-full'>
						<h3 class='pb-1 text-2xl font-medium text-primary'>
							FFT Performance Comparison
						</h3>
						<p class='text-muted-foreground'>
							@ariel-salgado/fft-performance
						</p>
					</hgroup>
				{/snippet}
				{#snippet content()}
					<section class='flex flex-col gap-y-6 py-2'>
						<p>
							Este proyecto en C++ implementa dos algoritmos de la
							Transformada Rápida de Fourier (FFT): una versión
							secuencial y otra que utiliza operaciones
							vectoriales para mejorar el rendimiento (SIMD).
						</p>
						<p>
							El objetivo final del proyecto era realizar una
							comparación del rendimiento entre ambas
							implementaciones. Donde se analizó la velocidad de
							ejecución, para determinar las ventajas de cada
							enfoque en diferentes escenarios y configuraciones.
						</p>
						<p>
							Este proyecto es público, y se encuentra disponible
							en
							<Link
								class='text-primary'
								href='https://github.com/ariel-salgado/fft-performance'
								target='_blank'
							>
								<span>Github</span>
								<ArrowSquareOutIcon
									class='inline-block size-4 align-middle'
								/>
							</Link>
						</p>
					</section>
				{/snippet}
			</Accordion>
		</section>
	{/snippet}
</FloatingWindow>

<!-- Frequent asked questions -->
<FloatingWindow bind:open={open_faq}>
	{#snippet header()}
		<h2 class='text-xl font-medium text-foreground'>
			preguntas frequentes
		</h2>
	{/snippet}
	{#snippet content()}
		<section class='flex flex-col px-10 pt-6 pb-24'>
			<!-- Languages -->
			<Accordion>
				{#snippet header()}
					<h3 class='pb-1 text-2xl font-medium text-primary'>
						¿Qué lenguajes de programación has utilizado?
					</h3>
				{/snippet}
				{#snippet content()}
					<section class='flex flex-col gap-y-6 py-2'>
						<p>
							A lo largo de mi formación académica y experiencia
							laboral he trabajado con diversos lenguajes de
							programación.
						</p>
						<ul
							class='
								list-disc pl-8
								*:pl-2
							'
						>
							<li>JavaScript / TypeScript</li>
							<li>C / C++</li>
							<li>Java</li>
							<li>Python</li>
							<li>Go</li>
							<li>PHP</li>
						</ul>
					</section>
				{/snippet}
			</Accordion>

			<!-- Frameworks -->
			<Accordion>
				{#snippet header()}
					<h3 class='pb-1 text-2xl font-medium text-primary'>
						¿Qué librerías y frameworks has utilizado?
					</h3>
				{/snippet}
				{#snippet content()}
					<section class='flex flex-col gap-y-6 py-2'>
						<p>
							En los diferentes proyectos y trabajos en los que he
							participado, he utilizado una amplia variedad de
							librerías, frameworks y herramientas.
						</p>

						<!-- Tools -->
						<div>
							<h4
								class='pb-1 text-xl font-semibold text-secondary'
							>
								Herramientas
							</h4>
							<ul
								class='
									list-disc pl-8
									*:pl-2
								'
							>
								<li>Git</li>
								<li>Docker</li>
								<li>Vite</li>
								<li>Zod</li>
							</ul>
						</div>

						<!-- Frontend -->
						<div>
							<h4
								class='pb-1 text-xl font-semibold text-secondary'
							>
								Frontend
							</h4>
							<ul
								class='
									list-disc pl-8
									*:pl-2
								'
							>
								<li>React</li>
								<li>Next.js</li>
								<li>Vue</li>
								<li>Svelte</li>
								<li>SvelteKit</li>
								<li>Tailwind CSS</li>
							</ul>
						</div>

						<!-- Backend -->
						<div>
							<h4
								class='pb-1 text-xl font-semibold text-secondary'
							>
								Backend
							</h4>
							<ul
								class='
									list-disc pl-8
									*:pl-2
								'
							>
								<li>Node.js</li>
								<li>Bun</li>
								<li>Express</li>
								<li>Hono</li>
								<li>NestJS</li>
								<li>Laravel</li>
								<li>Fiber</li>
								<li>Echo</li>
								<li>Gin</li>
								<li>Spring Boot</li>
								<li>Hibernate</li>
								<li>Drizzle ORM</li>
								<li>Prisma ORM</li>
								<li>Flask</li>
								<li>FastAPI</li>
							</ul>
						</div>

						<!-- Testing -->
						<div>
							<h4
								class='pb-1 text-xl font-semibold text-secondary'
							>
								Testing
							</h4>
							<ul
								class='
									list-disc pl-8
									*:pl-2
								'
							>
								<li>Vitest</li>
								<li>Playwright</li>
								<li>JUnit</li>
							</ul>
						</div>

						<!-- Maps -->
						<div>
							<h4
								class='pb-1 text-xl font-semibold text-secondary'
							>
								Mapas y geovisualización
							</h4>
							<ul
								class='
									list-disc pl-8
									*:pl-2
								'
							>
								<li>Leaflet.js</li>
								<li>Mapbox GL</li>
								<li>Turf.js</li>
							</ul>
						</div>

						<!-- Data Science -->
						<div>
							<h4
								class='pb-1 text-xl font-semibold text-secondary'
							>
								Data Science y análisis de datos
							</h4>
							<ul
								class='
									list-disc pl-8
									*:pl-2
								'
							>
								<li>Pandas</li>
								<li>NumPy</li>
								<li>Matplotlib</li>
								<li>Seaborn</li>
								<li>scikit-learn</li>
								<li>Jupyter</li>
							</ul>
						</div>
					</section>
				{/snippet}
			</Accordion>
			<Accordion>
				{#snippet header()}
					<h3 class='pb-1 text-2xl font-medium text-primary'>
						¿Qué plataformas has utilizado?
					</h3>
				{/snippet}
				{#snippet content()}
					<section class='flex flex-col gap-y-6 py-2'>
						<p>
							Como no tengo aún una experiencia extensa en
							proyectos de gran magnitud, no he trabajado con una
							gran variedad de plataformas externas. Sin embargo,
							sí he utilizado algunas.
						</p>
						<ul
							class='
								list-disc pl-8
								*:pl-2
							'
						>
							<li>Jira</li>
							<li>AWS</li>
							<li>GCP</li>
							<li>Netlify</li>
							<li>Supabase</li>
							<li>Firebase</li>
							<li>MongoDB Atlas</li>
						</ul>
					</section>
				{/snippet}
			</Accordion>
		</section>
	{/snippet}
</FloatingWindow>

<FloatingWindow bind:open={open_contact}>
	{#snippet header()}
		<h2 class='text-xl font-medium text-foreground'>contacto</h2>
	{/snippet}
	{#snippet content()}
		<section>henlo</section>
	{/snippet}
</FloatingWindow>
