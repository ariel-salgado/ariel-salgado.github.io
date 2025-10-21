<script lang='ts'>
	import ArrowSquareOutIcon from 'phosphor-svelte/lib/ArrowSquareOut';
	import PokedexPicture from '$lib/assets/images/pokedex.png?enhanced';
	import SimpyBankPicture from '$lib/assets/images/simpy.png?enhanced';
	import EmosensePicture from '$lib/assets/images/emosense.png?enhanced';

	import {
		Link,
		Picture,
		AccordionItem,
		FloatingWindow,
		MultiShellCommand,
	} from '../ui';

	interface Props {
		open: boolean;
	}

	let { open = $bindable(false) }: Props = $props();
</script>

<FloatingWindow bind:open>
	{#snippet header()}
		<h2 class='text-xl font-medium text-foreground'>mis proyectos</h2>
	{/snippet}
	{#snippet content()}
		<section class='flex flex-col px-10 pt-6 pb-24'>
			<p class='mb-4'>
				Durante mi formación y tiempo libre he desarrollado algunos
				proyectos y repositorios personales. Aquí una lista de algunos
				de los más relevantes.
			</p>
			<AccordionItem
				subtitle='@ariel-salgado/eslint-config'
				title='ESLint Config'
			>
				<p>
					Este proyecto se trata de una configuración de ESLint
					bastante completa y altamente personalizable, que incluye
					una amplia variedad de reglas predefinidas. Ofrece soporte
					para JavaScript, TypeScript, Svelte y más. La principal
					diferencia respecto a otras configuraciones radica en que
					incorpora soporte para TailwindCSS y además optimiza lógicas
					booleanas mediante la ley de De Morgan.
				</p>
				<p>
					Este proyecto es público, y se encuentra disponible en <Link
						class='text-primary'
						href='https://github.com/ariel-salgado/eslint-config/tree/main'
						target='_blank'
					>
						<span>Github</span>
						<ArrowSquareOutIcon
							class='inline-block size-4 align-middle'
						/>
					</Link> y <Link
						class='text-primary'
						href='https://www.npmjs.com/package/@ariel-salgado/eslint-config'
						target='_blank'
					>
						<span>NPM</span>
						<ArrowSquareOutIcon
							class='inline-block size-4 align-middle'
						/>
					</Link> , puedes instalarlo con el siguiente comando:
				</p>
				<div>
					<MultiShellCommand
						package_name='-D
							@ariel-salgado/eslint-config'
					/>
				</div>
			</AccordionItem>

			<AccordionItem
				subtitle='@ariel-salgado/eslint-plugin-ariel'
				title='ESLint Plugin'
			>
				<p>
					Este proyecto es un plugin para ESLint que incluye un
					conjunto de reglas personalizadas y que se integra
					directamente con la configuración de ESLint mencionada
					anteriormente. Las reglas definidas no solo buscan mejorar
					la legibilidad del código, sino también optimizar la
					sintaxis y sugerir alternativas dentro de las funciones, con
					el objetivo de mantener un estilo de código más consistente
					y uniforme.
				</p>
				<p>
					Este proyecto es público, y se encuentra disponible en <Link
						class='text-primary'
						href='https://github.com/ariel-salgado/eslint-plugin-ariel'
						target='_blank'
					>
						<span>Github</span>
						<ArrowSquareOutIcon
							class='inline-block size-4 align-middle'
						/>
					</Link> y <Link
						class='text-primary'
						href='https://www.npmjs.com/package/eslint-plugin-ariel'
						target='_blank'
					>
						<span>NPM</span>
						<ArrowSquareOutIcon
							class='inline-block size-4 align-middle'
						/>
					</Link> , puedes instalarlo con el siguiente comando:
				</p>

				<MultiShellCommand package_name='-D eslint-plugin-ariel' />
			</AccordionItem>

			<AccordionItem subtitle='@ariel-salgado/emosense' title='Emosense'>
				<p>
					Este proyecto es una exploración comparativa de
					reconocimiento de emociones en el habla utilizando dos
					enfoques distintos: redes neuronales tradicionales (MLP) con
					características extraídas manualmente, y redes neuronales
					convolucionales (CNN) con aprendizaje automático de
					características. Desarrollado como parte del electivo de
					Machine Learning en la universidad, EmoSense fue
					implementado sobre la base de datos RAVDESS, analizando las
					fortalezas y limitaciones de cada metodología.
				</p>
				<p>
					Este proyecto es público, y se encuentra disponible en <Link
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

				<Picture alt='Emosense charts' src={EmosensePicture} />
			</AccordionItem>

			<AccordionItem
				subtitle='@ariel-salgado/simpy-bank'
				title='Simpy Bank'
			>
				<p>
					Este proyecto es una simulación de atención bancaria basada
					en eventos discretos, diseñada para analizar la eficiencia
					operativa de un sistema de cajas con atención diferenciada
					entre clientes normales y preferenciales.
				</p>
				<p>
					El modelo incorpora datos obtenidos en una sucursal bancaria
					de Viña del Mar, considerando tiempos de llegada, servicio y
					proporciones de clientes. La simulación evalúa métricas
					clave como tiempos de espera, utilización de recursos y
					tasas de abandono, permitiendo identificar cuellos de
					botella y proponer configuraciones óptimas para mejorar la
					experiencia del cliente.
				</p>
				<p>
					Este proyecto es público, y se encuentra disponible en <Link
						class='text-primary'
						href='https://github.com/ariel-salgado/simpy-bank'
						target='_blank'
					>
						<span>Github</span>
						<ArrowSquareOutIcon
							class='inline-block size-4 align-middle'
						/>
					</Link>
				</p>

				<Picture alt='Simpy Bank charts' src={SimpyBankPicture} />
			</AccordionItem>

			<AccordionItem
				subtitle='@ariel-salgado/fft-performance'
				title='FFT Performance Comparison'
			>
				<p>
					Este proyecto en C++ implementa dos algoritmos de la
					Transformada Rápida de Fourier (FFT): una versión secuencial
					y otra que utiliza operaciones vectoriales para mejorar el
					rendimiento (SIMD).
				</p>
				<p>
					El objetivo final del proyecto era realizar una comparación
					del rendimiento entre ambas implementaciones. Donde se
					analizó la velocidad de ejecución, para determinar las
					ventajas de cada enfoque en diferentes escenarios y
					configuraciones.
				</p>
				<p>
					Este proyecto es público, y se encuentra disponible en <Link
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
			</AccordionItem>

			<AccordionItem
				subtitle='@ariel-salgado/pokedex-react'
				title='Pokedex App'
			>
				<p>
					Este proyecto es una implementación personal de la clásica
					Pokédex, desarrollada con React, TanStack Router y la
					Pokémon API. La aplicación permite explorar Pokémon por
					generación y buscar por nombre o ID.
				</p>
				<p>
					Al acceder a los detalles de cada Pokémon, se pueden
					visualizar sus distintos sprites (vista frontal, trasera y
					su versión shiny), además de escuchar su sonido
					característico presente en los juegos. También muestra las
					entradas o descripciones de los diferentes títulos de la
					saga y un resumen de sus estadísticas base.
				</p>
				<p>
					Este proyecto es público, y se encuentra disponible en <Link
						class='text-primary'
						href='https://github.com/ariel-salgado/pokedex-react'
						target='_blank'
					>
						<span>Github</span>
						<ArrowSquareOutIcon
							class='inline-block size-4 align-middle'
						/>
					</Link>
				</p>

				<Picture alt='Pokedex app' src={PokedexPicture} />
			</AccordionItem>
		</section>
	{/snippet}
</FloatingWindow>
