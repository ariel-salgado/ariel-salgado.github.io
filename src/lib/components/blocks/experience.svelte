<script lang='ts'>
	import RedOceanDemo from '$lib/assets/videos/redocean.mp4';
	import DempsDemo from '$lib/assets/images/demps.jpg?enhanced';
	import ArrowSquareOutIcon from 'phosphor-svelte/lib/ArrowSquareOut';

	import { USED_TECH } from '$lib/constants';

	import {
		Link,
		Video,
		Picture,
		BadgeList,
		AccordionItem,
		FloatingWindow,
	} from '../ui';

	interface Props {
		open: boolean;
	}

	let { open = $bindable(false) }: Props = $props();
</script>

<FloatingWindow bind:open>
	{#snippet header()}
		<h2 class='text-xl font-medium text-foreground'>mi experiencia</h2>
	{/snippet}

	{#snippet content()}
		<section class='flex flex-col px-10 pt-6 pb-24'>
			<AccordionItem
				subtitle='Noviembre 2025 - Actualidad'
				title='Desarrollador Fullstack @ OnStageObra'
			>
				<div class='space-y-4'>
					<p class='leading-relaxed'>
						Plataforma para la gestión de obras que
						centraliza el avance, el control de calidad y la
						recepción en un entorno digital colaborativo.
						Facilitando la conexión entre equipos en terreno y
						en oficina mediante herramientas que agilizan
						procesos clave, mejoran la trazabilidad y permiten
						una gestión más pronta y precisa en todas las etapas
						del proyecto.
					</p>

					<p class='leading-relaxed'>
						En mi rol dentro de la empresa, he desarrollado la
						lógica para integrar vectores en AWS S3 y potenciar
						el autocompletado de información mediante predicciones
						de texto con OpenAI, migrando desde un sistema apoyado
						en S3 y planillas hacia una base de datos vectorial
						dedicada, lo que permitió acelerar la obtención de top-k
						relevantes y mejorar de forma significativa la velocidad
						y eficiencia de las consultas.
					</p>

					<Link
						class='text-primary'
						href='https://onstageobra.cl/'
						target='_blank'
					>
						Enlace
						<ArrowSquareOutIcon
							class='inline-block size-4 align-middle'
						/>
					</Link>
				</div>
				<BadgeList items={USED_TECH.onstageobra} />
			</AccordionItem>
			<AccordionItem
				subtitle='Octubre 2024 - Octubre 2025'
				title='Chief Technology Officer @ RedOcean'
			>
				<div class='space-y-4'>
					<p class='leading-relaxed'>
						Hemos desarrollado una plataforma SaaS para la
						predicción de deriva oceánica, en asociación con la
						Armada de Chile.
						Esta plataforma cuenta con un mapa interactivo que
						permite visualizar el movimiento de partículas a la
						deriva, impulsadas por corrientes en mar abierto.
						Ofreciendo un pronóstico de hasta 30 días sobre el
						comportamiento de las corrientes y su impacto en cuerpos
						como personas, embarcaciones o contaminantes.
					</p>
					<p class='leading-relaxed'>
						En mi rol dentro de la empresa, desarrollé la interfaz
						web que permite configurar el modelo de simulación y
						visualizar partículas a la deriva junto a su rastro temporal.
						También implementé un backend robusto con sesiones de usuario
						y almacenamiento de datos en SQLite, integrando todos los
						componentes del sistema. Finalmente, dockericé los servicios
						para su despliegue en Google Cloud Platform (GCP).
					</p>

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
				</div>
				<Video src={RedOceanDemo} />
				<BadgeList items={USED_TECH.redocean} />
			</AccordionItem>

			<AccordionItem
				subtitle='Julio 2023 - Agosto 2024'
				title='Proyecto de Tesis @ Universidad de Valparaíso'
			>
				<div class='space-y-4'>
					<p class='leading-relaxed'>
						Desarrollé una aplicación web como proyecto de tesis
						para optar al título de Ingeniero Civil Informático,
						orientada a la creación y mantención de planes de
						evacuación en zonas costeras.
					</p>
					<p class='leading-relaxed'>
						La plataforma permite cargar cartas de inundación en
						formato GeoJSON y visualizarlas mediante un mapa
						interactivo o un editor de código integrado. A partir de
						ellas, es posible definir zonas inundables, áreas
						pobladas y rutas de evacuación a evaluar. Además,
						incluye un modelo de simulación configurable, que
						reproduce en tiempo de ejecución el comportamiento de
						las personas durante un evento de tsunami, mostrando
						tanto el proceso de evacuación como la magnitud del
						fenómeno.
					</p>
					<p class='leading-relaxed'>
						Actualmente, la plataforma no puede operar
						completamente, ya que no cuenta con el simulador en la
						infraestructura actual; sin embargo, la funcionalidad de
						importar cartas de inundación y editar archivos GeoJSON
						mediante el editor integrado se encuentra disponible.
					</p>
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
				</div>
				<Picture alt='Demps demo' src={DempsDemo} />
				<BadgeList items={USED_TECH.demps} />
			</AccordionItem>

			<AccordionItem
				subtitle='Marzo 2022 - Octubre 2022'
				title='Práctica Profesional @ Consorcio Progresa'
			>
				<div class='space-y-4'>
					<p class='leading-relaxed'>
						Durante mi práctica profesional trabajé como ingeniero
						de software, encargado de solucionar errores dentro del
						sistema, incluyendo endpoints de APIs, y mejorar el
						diseño de los templates de correos enviados mediante
						SendGrid.
					</p>
					<p class='leading-relaxed'>
						Además, desarrollé un bot de Discord que integra
						múltiples APIs, permitiendo enviar mensajes automáticos
						a un canal de Telegram como notificaciones, gestionar
						issues de GitHub y administrar bloques de Notion
						directamente desde Discord.
					</p>
				</div>
				<BadgeList items={USED_TECH.consorcio} />
			</AccordionItem>
		</section>
	{/snippet}
</FloatingWindow>
