<script lang="ts">
	import { cn } from "$lib/utils";
	import { onMount } from "svelte";
	import { on } from "svelte/events";

	interface Circle {
		x: number;
		y: number;
		translate_x: number;
		translate_y: number;
		size: number;
		alpha: number;
		target_alpha: number;
		dx: number;
		dy: number;
		magnetism: number;
	}

	interface Props {
		class?: string;
		quantity?: number;
		staticity?: number;
		ease?: number;
		size?: number;
		color?: string;
		vx?: number;
		vy?: number;
	}

	let {
		class: class_name,
		quantity = 200,
		staticity = 50,
		ease = 50,
		size = 0.4,
		color = "#ffffff",
		vx = 0,
		vy = 0,
	}: Props = $props();

	let canvas_ref = $state<HTMLCanvasElement>();
	let container_ref = $state<HTMLDivElement>();
	let context = $state<CanvasRenderingContext2D | null>(null);
	let circles = $state<Circle[]>([]);
	let mouse = $state({ x: 0, y: 0 });
	let canvas_size = $state({ w: 0, h: 0 });

	const dpr = typeof window !== "undefined" ? window.devicePixelRatio : 1;

	function hex_to_rgb(hex: string): number[] {
		hex = hex.replace("#", "");
		if (hex.length === 3) {
			hex = hex
				.split("")
				.map((char) => char + char)
				.join("");
		}
		const hex_int = Number.parseInt(hex, 16);
		const r = (hex_int >> 16) & 255;
		const g = (hex_int >> 8) & 255;
		const b = hex_int & 255;
		return [r, g, b];
	}

	const rgb_color = hex_to_rgb(color);

	function remap_value(
		value: number,
		start1: number,
		end1: number,
		start2: number,
		end2: number,
	): number {
		const remapped =
			((value - start1) * (end2 - start2)) / (end1 - start1) + start2;
		return remapped > 0 ? remapped : 0;
	}

	function create_circle(): Circle {
		return {
			x: Math.floor(Math.random() * canvas_size.w),
			y: Math.floor(Math.random() * canvas_size.h),
			translate_x: 0,
			translate_y: 0,
			size: Math.floor(Math.random() * 2) + size,
			alpha: 0,
			target_alpha: Number.parseFloat(
				(Math.random() * 0.6 + 0.1).toFixed(1),
			),
			dx: (Math.random() - 0.5) * 0.1,
			dy: (Math.random() - 0.5) * 0.1,
			magnetism: 0.1 + Math.random() * 4,
		};
	}

	function initialize_particles() {
		circles = [];
		for (let i = 0; i < quantity; i++) {
			circles.push(create_circle());
		}
	}

	function resize_canvas() {
		if (container_ref && canvas_ref && context) {
			canvas_size.w = container_ref.offsetWidth;
			canvas_size.h = container_ref.offsetHeight;
			canvas_ref.width = canvas_size.w * dpr;
			canvas_ref.height = canvas_size.h * dpr;
			canvas_ref.style.width = `${canvas_size.w}px`;
			canvas_ref.style.height = `${canvas_size.h}px`;
			context.scale(dpr, dpr);
			initialize_particles();
		}
	}

	function clear_canvas() {
		if (context) {
			context.clearRect(0, 0, canvas_size.w, canvas_size.h);
		}
	}

	function draw_circle(circle: Circle) {
		if (!context) return;
		const { x, y, translate_x, translate_y, size, alpha } = circle;
		context.translate(translate_x, translate_y);
		context.beginPath();
		context.arc(x, y, size, 0, 2 * Math.PI);
		context.fillStyle = `rgba(${rgb_color.join(", ")}, ${alpha})`;
		context.fill();
		context.setTransform(dpr, 0, 0, dpr, 0, 0);
	}

	function animate() {
		clear_canvas();
		circles.forEach((circle, i) => {
			const edge = [
				circle.x + circle.translate_x - circle.size,
				canvas_size.w - circle.x - circle.translate_x - circle.size,
				circle.y + circle.translate_y - circle.size,
				canvas_size.h - circle.y - circle.translate_y - circle.size,
			];
			const closest_edge = edge.reduce((a, b) => Math.min(a, b));
			const remapped_closest_edge = Number.parseFloat(
				remap_value(closest_edge, 0, 20, 0, 1).toFixed(2),
			);

			if (remapped_closest_edge > 1) {
				circle.alpha += 0.02;
				if (circle.alpha > circle.target_alpha) {
					circle.alpha = circle.target_alpha;
				}
			} else {
				circle.alpha = circle.target_alpha * remapped_closest_edge;
			}

			circle.x += circle.dx + vx;
			circle.y += circle.dy + vy;
			circle.translate_x +=
				(mouse.x / (staticity / circle.magnetism) -
					circle.translate_x) /
				ease;
			circle.translate_y +=
				(mouse.y / (staticity / circle.magnetism) -
					circle.translate_y) /
				ease;

			draw_circle(circle);

			if (
				circle.x < -circle.size ||
				circle.x > canvas_size.w + circle.size ||
				circle.y < -circle.size ||
				circle.y > canvas_size.h + circle.size
			) {
				circles[i] = create_circle();
			}
		});
		window.requestAnimationFrame(animate);
	}

	function handle_mouse_move(event: MouseEvent) {
		if (canvas_ref) {
			const rect = canvas_ref.getBoundingClientRect();
			const { w, h } = canvas_size;
			const x = event.clientX - rect.left - w / 2;
			const y = event.clientY - rect.top - h / 2;
			const is_inside =
				x < w / 2 && x > -w / 2 && y < h / 2 && y > -h / 2;

			if (is_inside) {
				mouse.x = x;
				mouse.y = y;
			}
		}
	}

	onMount(() => {
		if (canvas_ref) {
			context = canvas_ref.getContext("2d");
			resize_canvas();
			animate();

			const on_resize = on(window, "resize", resize_canvas);
			const on_mouse_move = on(window, "mousemove", handle_mouse_move);

			return () => {
				on_resize();
				on_mouse_move();
			};
		}
	});
</script>

<div
	bind:this={container_ref}
	class={cn("absolute size-full isolate", class_name)}
	aria-hidden="true"
>
	<canvas bind:this={canvas_ref} class="size-full"></canvas>
</div>
