<script lang="ts">
	import InfoIcon from "phosphor-svelte/lib/Info";
	import FolderIcon from "phosphor-svelte/lib/Folder";
	import QuestionIcon from "phosphor-svelte/lib/Question";
	import EnvelopeIcon from "phosphor-svelte/lib/Envelope";
	import RedOceanDemo from "$lib/assets/videos/redocean.mp4";
	import DempsDemo from "$lib/assets/images/demps.jpg?enhanced";
	import ProfilePicture from "$lib/assets/images/profile.jpg?enhanced";
	import GraduationCapIcon from "phosphor-svelte/lib/GraduationCap";
	import TranslateIcon from "phosphor-svelte/lib/Translate";
	import ArrowSquareOutIcon from "phosphor-svelte/lib/ArrowSquareOut";

	import {
		Window,
		FloatingWindow,
		Link,
		Accordion,
		Badge,
	} from "$lib/components";
	import { floatable } from "$lib/utils";

	let open_faq = $state<boolean>(false);
	let open_info = $state<boolean>(false);
	let open_works = $state<boolean>(false);
	let open_contact = $state<boolean>(false);

	let main_window = $state<HTMLDivElement>();
</script>

<!-- Main content -->
<div class="grid size-full place-items-center items-center">
	<Window bind:ref={main_window}>
		{#snippet header()}
			<span
				class="cursor-move select-none size-full content-center text-xl font-medium text-foreground"
				{@attach floatable(main_window)}>inicio</span
			>
		{/snippet}
		{#snippet content()}
			<div class="grid size-full grid-rows-[1fr_auto] items-center">
				<hgroup class="text-center">
					<h1 class="text-6xl leading-relaxed">
						hola! <span class="font-medium">soy ariel</span>
					</h1>
					<p class="text-2xl">ingeniero civil informático</p>
				</hgroup>

				<div
					class="flex w-full items-center justify-center gap-x-3 p-8"
				>
					<button
						class="cursor-pointer"
						onclick={() => (open_info = !open_info)}
					>
						<InfoIcon class="inline-block size-18 align-middle" />
					</button>

					<button
						class="cursor-pointer"
						onclick={() => (open_works = !open_works)}
					>
						<FolderIcon class="inline-block size-18 align-middle" />
					</button>

					<button
						class="cursor-pointer"
						onclick={() => (open_faq = !open_faq)}
					>
						<QuestionIcon
							class="inline-block size-18 align-middle"
						/>
					</button>

					<button
						class="cursor-pointer"
						onclick={() => (open_contact = !open_contact)}
					>
						<EnvelopeIcon
							class="inline-block size-18 align-middle"
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
		<h2 class="text-xl font-medium text-foreground">sobre mi</h2>
	{/snippet}
	{#snippet content()}
		<section class="flex flex-col gap-y-6">
			<!-- Profile card -->
			<div
				class="sticky top-0 flex items-center gap-x-8 border-b border-muted bg-background px-10 py-6"
			>
				<div
					class="aspect-square size-24 rounded-full bg-alt-background"
				>
					<enhanced:img
						class="rounded-full object-contain"
						alt="Ariel Salgado's profile"
						src={ProfilePicture}
					/>
				</div>
				<hgroup>
					<h3 class="pb-1 text-3xl text-primary">
						Ariel Salgado Acevedo
					</h3>
					<p class="text-lg">Ingeniero Civil Informático</p>
					<p class="text-lg">
						Actualmente CIO en <Link
							class="text-primary"
							href="https://redoceanservice.com"
							target="_blank">RedOcean</Link
						>
					</p>
				</hgroup>
			</div>
			<!-- Self introduction -->
			<div class="space-y-4 px-10 *:leading-relaxed">
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

				<ul class="list-disc pl-8 *:pl-2">
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
			<div class="px-10 mt-2">
				<span class="flex items-center gap-x-2">
					<GraduationCapIcon
						class="size-6 align-middle inline-block"
					/>
					<h4 class="text-2xl font-semibold uppercase">Educación</h4>
				</span>
				<ul class="space-y-4 py-4">
					<li
						class="rounded-r-md border-l-4 border-secondary bg-alt-background py-3 pl-6"
					>
						<span class="block text-xl leading-relaxed"
							>Ingeniería Civil en Informática</span
						>
						<span class="block text-muted-foreground">
							Universidad de Valparaíso (2024)
						</span>
					</li>

					<li
						class="rounded-r-md border-l-4 border-secondary bg-alt-background py-3 pl-6"
					>
						<span class="block text-xl leading-relaxed"
							>Licenciado en Ciencias de la Ingeniería</span
						>
						<span class="block text-muted-foreground">
							Universidad de Valparaíso (2024)
						</span>
					</li>
				</ul>
			</div>
			<!-- Idiomas -->
			<div class="px-10 pb-22">
				<span class="flex items-center gap-x-2 mb-4">
					<TranslateIcon class="size-6 align-middle inline-block" />
					<h4 class="text-2xl font-semibold uppercase">Idiomas</h4>
				</span>

				<p
					class="rounded-r-md border-l-4 border-secondary bg-alt-background py-3 pl-6"
				>
					Mi lengua nativa es el español y poseo un nivel avanzado de
					inglés (C1), acreditado con un <Link
						class="text-primary"
						href="https://cert.efset.org/8zeB34"
						target="_blank">certificado</Link
					>.
				</p>
			</div>
		</section>
	{/snippet}
</FloatingWindow>

<!-- Projects -->
<FloatingWindow bind:open={open_works}>
	{#snippet header()}
		<h2 class="text-xl font-medium text-foreground">mis proyectos</h2>
	{/snippet}
	{#snippet content()}
		<section class="flex flex-col px-10 pt-6 pb-24">
			<Accordion>
				{#snippet header()}
					<hgroup class="w-full">
						<h3 class="pb-1 text-2xl font-medium text-primary">
							Ingeniero de Software @ RedOcean
						</h3>
						<p class="text-muted-foreground">
							Octubre 2024 - Actualidad
						</p>
					</hgroup>
				{/snippet}
				{#snippet content()}
					<section class="flex flex-col gap-y-6 py-2">
						<div class="space-y-4">
							<p class="leading-relaxed">
								Hemos desarrollado una plataforma SaaS para la
								predicción de deriva oceánica, en asociación con
								la Armada de Chile.
							</p>
							<p class="leading-relaxed">
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
									class="text-primary"
									href="https://app.redoceanservice.com/"
									target="_blank"
								>
									Enlace
									<ArrowSquareOutIcon
										class="size-4 align-middle inline-block"
									/>
								</Link>
							</p>
						</div>

						<div
							class="overflow-hidden rounded-lg border-2 border-secondary"
						>
							<video
								autoplay
								controls={false}
								loop
								muted
								oncontextmenu={(e) => e.preventDefault()}
								playsinline
								src={RedOceanDemo}
							>
								<track kind="captions" />
							</video>
						</div>

						<div class="flex flex-wrap gap-2">
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
					<hgroup class="w-full">
						<h3 class="pb-1 text-2xl font-medium text-primary">
							Proyecto de Tesis @ Universidad de Valparaíso
						</h3>
						<p class="text-muted-foreground">
							Julio 2023 - Agosto 2024
						</p>
					</hgroup>
				{/snippet}
				{#snippet content()}
					<section class="flex flex-col gap-y-6 py-2">
						<div class="space-y-4">
							<p class="leading-relaxed">
								Desarrollé una aplicación web como proyecto de
								tesis para optar al título de Ingeniero Civil
								Informático, orientada a la creación y
								mantención de planes de evacuación en zonas
								costeras.
							</p>
							<p class="leading-relaxed">
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
							<p class="leading-relaxed">
								Actualmente, la plataforma no puede operar
								completamente, ya que no está conectada al
								simulador; sin embargo, la funcionalidad de
								importar cartas de inundación y editar archivos
								GeoJSON mediante el editor integrado se
								encuentra disponible.
							</p>

							<p>
								<Link
									class="text-primary"
									href="https://demps-demo.netlify.app/entorno"
									target="_blank"
								>
									Enlace
									<ArrowSquareOutIcon
										class="size-4 align-middle inline-block"
									/>
								</Link>
							</p>
						</div>

						<div
							class="overflow-hidden rounded-lg border-2 border-secondary"
						>
							<enhanced:img alt="Demps demo" src={DempsDemo} />
						</div>

						<div class="flex flex-wrap gap-2">
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
					<hgroup class="w-full">
						<h3 class="pb-1 text-2xl font-medium text-primary">
							Ingeniero de Software @ Consorcio Progresa
						</h3>
						<p class="text-muted-foreground">
							Marzo 2022 - Octubre 2022
						</p>
					</hgroup>
				{/snippet}
				{#snippet content()}
					<section class="flex flex-col gap-y-6 py-2">
						<div class="space-y-4">
							<p class="leading-relaxed">
								Durante mi práctica profesional trabajé como
								ingeniero de software, encargado de solucionar
								errores dentro del sistema, incluyendo endpoints
								de APIs, y mejorar el diseño de los templates de
								correos enviados mediante SendGrid.
							</p>
							<p class="leading-relaxed">
								Además, desarrollé un bot de Discord que integra
								múltiples APIs, permitiendo enviar mensajes
								automáticos a un canal de Telegram como
								notificaciones, gestionar issues de GitHub y
								administrar bloques de Notion directamente desde
								Discord.
							</p>
						</div>

						<div class="flex flex-wrap gap-2">
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

<FloatingWindow bind:open={open_contact}>
	{#snippet header()}
		<h2 class="text-xl font-medium text-foreground">contacto</h2>
	{/snippet}
	{#snippet content()}
		<section>henlo</section>
	{/snippet}
</FloatingWindow>
