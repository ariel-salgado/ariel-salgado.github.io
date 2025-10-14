<script lang='ts'>
	import {
		TOOLS,
		BACKEND,
		FRONTEND,
		LEARNING,
		PLATFORMS,
		DATA_SCIENCE,
		COLLABORATION,
		PROBLEM_SOLVING,
		GEOVISUALIZATION,
		TESTING_AND_CI_CD,
		PROGRAMMING_LANGUAGES,
	} from '$lib/constants';

	import { BulletList, AccordionItem, FloatingWindow } from '../ui';

	interface Props {
		open: boolean;
	}

	let { open = $bindable(false) }: Props = $props();
</script>

<FloatingWindow bind:open>
	{#snippet header()}
		<h2 class='text-xl font-medium text-foreground'>
			Preguntas Frecuentes
		</h2>
	{/snippet}

	{#snippet content()}
		<section class='flex flex-col space-y-6 px-10 pt-6 pb-24'>

			<AccordionItem title='¿Qué lenguajes de programación has utilizado?'>
				<p>
					A lo largo de mi formación académica y experiencia laboral
					he trabajado con una amplia variedad de lenguajes.
				</p>
				<BulletList items={PROGRAMMING_LANGUAGES} />
			</AccordionItem>

			<AccordionItem title='¿Qué librerías y frameworks has utilizado?'>
				<p>
					He trabajado con múltiples librerías, frameworks y herramientas
					en proyectos tanto personales como profesionales.
				</p>

				<h4 class='pb-1 text-lg font-semibold text-secondary'>Herramientas</h4>
				<BulletList items={TOOLS} />

				<h4 class='pb-1 text-lg font-semibold text-secondary'>Frontend</h4>
				<BulletList items={FRONTEND} />

				<h4 class='pb-1 text-lg font-semibold text-secondary'>Backend</h4>
				<BulletList items={BACKEND} />

				<h4 class='pb-1 text-lg font-semibold text-secondary'>Testing & CI/CD</h4>
				<BulletList items={TESTING_AND_CI_CD} />

				<h4 class='pb-1 text-lg font-semibold text-secondary'>Data Science & Análisis de datos</h4>
				<BulletList items={DATA_SCIENCE} />

				<h4 class='pb-1 text-lg font-semibold text-secondary'>Mapas y geovisualización</h4>
				<BulletList items={GEOVISUALIZATION} />
			</AccordionItem>

			<AccordionItem title='¿Qué plataformas has utilizado?'>
				<p>
					He trabajado con algunas plataformas y servicios cloud en proyectos académicos y personales.
				</p>
				<BulletList items={PLATFORMS} />
			</AccordionItem>

			<AccordionItem title='¿Cómo trabajas en equipo y gestionas proyectos?'>
				<p>
					He utilizado metodologías ágiles y herramientas de colaboración para coordinar equipos y proyectos.
				</p>
				<BulletList items={COLLABORATION} />
			</AccordionItem>

			<AccordionItem title='¿Qué tipo de problemas te gusta resolver?'>
				<p>
					Me atraen los desafíos que requieren análisis profundo y diseño de soluciones escalables.
				</p>
				<BulletList items={PROBLEM_SOLVING} />
			</AccordionItem>

			<AccordionItem title='¿Cómo te mantienes actualizado en tecnología?'>
				<p>
					Estoy constantemente aprendiendo nuevas tecnologías y mejores prácticas.
				</p>
				<BulletList items={LEARNING} />
			</AccordionItem>

		</section>
	{/snippet}
</FloatingWindow>
