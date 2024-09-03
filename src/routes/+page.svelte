<script lang="ts">
	import { EMAIL } from '$lib/config';
	import { Section, Button, IFrame, Timeline, Clipboard } from '$lib/components/ui';
	import { Title, Leading, Subtitle, SidelineTitle } from '$lib/components/typography';

	import { experience } from '$lib/components/ui/timeline';

	import CV from '$lib/assets/docs/Ariel_Salgado_CV.pdf';
</script>

<svelte:head>
	<title>Ariel Salgado | Portfolio</title>
	<meta
		name="description"
		content="Estudiante tesista de Ingeniería Civil en Informática. Abierto a oportunidades laborales que me permitan seguir desarrollandome profesionalmente."
	/>
</svelte:head>

<!-- Inicio -->
<Section id="inicio">
	<Leading>Hola!, mi nombre es:</Leading>
	<Title>
		<span class="text-text-secondary block">Ariel Salgado.</span>
		Ingeniero Civil Informático.
	</Title>

	<div class="space-y-4 *:max-w-xl *:text-pretty *:leading-relaxed">
		<p>
			Soy ingeniero civil informático con experiencia en desarrollo de aplicaciones web y servicios
			backend.
		</p>
		<p>
			Abierto a nuevas oportunidades para poner en práctica mis habilidades y conocimientos en
			proyectos desafiantes y enriquecedores.
		</p>
	</div>

	<Button as="a" href="#contacto" class="mt-4">Hablemos</Button>
</Section>

<!-- Acerca -->
<Section id="acerca">
	<Leading>Acerca de mi.</Leading>
	<SidelineTitle>¿Quien soy?</SidelineTitle>
	<div class="grid grid-cols-1 lg:grid-cols-5 lg:gap-x-8 xl:gap-x-12">
		<div class="mb-4 space-y-4 *:text-pretty *:leading-relaxed lg:col-span-3">
			<p>
				Soy Ingeniero Civil Informático titulado de la Universidad de Valparaíso. Actualmente
				buscando nuevas oportunidades de trabajo.
			</p>
			<p>
				Durante mi carrera he trabajado en proyectos de desarrollo de software, tanto en el ámbito
				académico como profesional. Tengo experiencia en el desarrollo de aplicaciones web,
				servicios backend, modelado de bases de datos y simulaciones.
			</p>
			<p>
				Me ha interesado el desarrollo de software y el análisis de datos. He realizado cursos y
				certificaciones en el área de data science para complementar mis conocimientos en el área.
			</p>
			<p>
				Me considero una persona responsable, proactiva, resilente y con capacidad de trabajar en
				equipo. Trato de mantenerme actualizado con las nuevas tecnologías y tendencias.
			</p>
			<p>
				Estoy abierto a nuevas oportunidades, proyectos y colaboraciones. Además de ofertas
				laborales donde aplicar mis habilidades y conocimientos.
			</p>
		</div>

		<div class="space-y-8 justify-self-center p-4 text-center lg:col-span-2 lg:p-0">
			<IFrame>
				<enhanced:img
					src="/static/profile.png?w=365"
					alt="Ariel Salgado"
					sizes="365px"
					class="aspect-square rounded-md object-cover"
				/>
			</IFrame>

			<Button as="a" href={CV} download={'Ariel_Salgado_CV.pdf'}>Descargar CV</Button>
		</div>
	</div>
</Section>

<!-- Experiencia -->
<Section id="experiencia">
	<Leading>Experiencia.</Leading>
	<SidelineTitle>Mi trayectoria</SidelineTitle>

	<div class="grid grid-cols-1 gap-y-6 xl:grid-cols-5 xl:gap-x-12">
		<Timeline class="col-span-3" events={experience} />

		<div
			class="bg-bg-secondary flex flex-col gap-y-4 rounded-xl p-6 shadow-lg shadow-slate-950 md:gap-y-6 xl:col-span-2 xl:p-12"
		>
			<Leading>Último proyecto</Leading>
			<Subtitle>Trabajo de título</Subtitle>

			<div class="space-y-6 *:text-pretty *:leading-relaxed">
				<p>
					En mi tesis para optar al título de Ingeniero Civil Informático, he desarrollado una
					plataforma destinada a agilizar el proceso de planificación de planes de evacuación en
					zonas costeras ante la eventual ocurrencia de tsunamis.
				</p>
			</div>

			<IFrame class="max-w-full">
				<enhanced:img
					src="/static/demps.png?w=1024"
					alt="Ariel Salgado"
					sizes="365px"
					class="aspect-video rounded-md object-cover"
				/>
			</IFrame>

			<Button as="a" href="https://demps-demo.netlify.app/environment" target="_blank"
				>Ir al sitio</Button
			>

			<span class="bg-text-primary my-6 h-px w-full xl:my-10"></span>

			<Leading>Proyectos anteriores</Leading>
			<Subtitle>FFT Comparison</Subtitle>

			<div class="space-y-6 *:text-pretty *:leading-relaxed">
				<p>
					Este proyecto implementa dos algoritmos de Transformada Rápida de Fourier (FFT, por sus
					siglas en inglés): una versión secuencial y otra que utiliza operaciones vectoriales para
					mejorar el rendimiento.
				</p>
			</div>

			<Button
				as="a"
				class="mb-6"
				href="https://github.com/ariel-salgado/FFT-performance"
				target="_blank">Ir al repositorio</Button
			>
		</div>
	</div></Section
>

<!-- Contacto -->
<Section id="contacto">
	<Leading>Contáctame y hablemos.</Leading>
	<Title>
		<span class="text-text-secondary block">Escribeme,</span>
		conversemos, conectémonos.
	</Title>

	<div class="*:text-balance *:leading-relaxed">
		<p>Estoy abierto a nuevas oportunidades, proyectos y colaboraciones.</p>
		<p>Si tienes alguna duda, pregunta o quieres trabajar conmigo, puedes contactarme.</p>
	</div>

	<Subtitle>Correo Electrónico</Subtitle>
	<div
		class="border-accent-primary inline-flex w-full items-center justify-between gap-x-1 rounded border-2 py-2 px-3 md:py-2.5 md:px-4 md:text-lg xl:py-3 xl:px-5 xl:text-xl"
	>
		<span class="text-text-secondary">{EMAIL}</span>
		<Clipboard text={EMAIL} />
	</div>

	<Button as="a" href={`mailto:${EMAIL}`} class="mt-4">Contactar</Button>
</Section>
