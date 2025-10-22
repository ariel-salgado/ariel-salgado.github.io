<script lang='ts'>
	import type { Attachment } from 'svelte/attachments';

	import createGlobe from 'cobe';

	import { cn } from '$lib/utils';
	import { on } from 'svelte/events';
	import { Spring } from 'svelte/motion';

	interface Props {
		class?: string;
		height_coefficient?: number;
	};

	let { class: class_name, height_coefficient = 0.2 }: Props = $props();

	let pointer_interacting = $state<number | null>(null);
	let pointer_interaction_movement = $state<number>(0);

	let x = new Spring(0, {
		stiffness: 0.04,
		damping: 0.4,
		precision: 0.005,
	});

	function init_globe(): Attachment<HTMLCanvasElement> {
		let phi = $state(0);
		let width = $state(0);

		return (canvas: HTMLCanvasElement) => {
			const onresize = on(window, 'resize', () => width = canvas.offsetWidth);

			const globe = createGlobe(canvas, {
				devicePixelRatio: 2,
				width: width * 2,
				height: width * 2 * height_coefficient,
				phi: 0,
				theta: 0.3,
				dark: 1,
				diffuse: 3,
				mapSamples: 16000,
				mapBrightness: 1.2,
				baseColor: [0.3, 0.3, 0.3],
				markerColor: [251 / 255, 100 / 255, 21 / 255],
				glowColor: [1, 1, 1],
				markers: [
					{ location: [-33.45694, -70.64827], size: 0.06 },
				],
				scale: 3.5,
				offset: [0, width * 2 * height_coefficient * 0.7],
				onRender: (state: any) => {
					if (!pointer_interacting) {
						phi += 0.003;
					}
					state.phi = phi + x.current;
					state.width = width * 2;
					state.height = width * 2 * height_coefficient;
				},
			});

			width = canvas.offsetWidth;

			return () => {
				onresize();
				globe.destroy();
			};
		};
	}
</script>

<div
	class={cn(
		'relative m-auto aspect-[1/0.2] w-full',
		class_name,
	)}
>
	<canvas
		class='size-full [contain:layout_paint_size]'
		{@attach init_globe()}
		onmousemove={(e) => {
			if (pointer_interacting !== null) {
				const delta = e.clientX - pointer_interacting;
				pointer_interaction_movement = delta;
				x.set(delta / 200);
			}
		}}
		onpointerdown={(e) => {
			pointer_interacting = e.clientX - pointer_interaction_movement;
			e.currentTarget.style.cursor = 'grabbing';
		}}
		onpointerout={(e) => {
			pointer_interacting = null;
			e.currentTarget.style.cursor = 'grab';
		}}
		onpointerup={(e) => {
			pointer_interacting = null;
			e.currentTarget.style.cursor = 'grab';
		}}
	></canvas>
</div>
