import type { ClassValue } from 'clsx';
import type { Attachment } from 'svelte/attachments';

import { clsx } from 'clsx';
import { on } from 'svelte/events';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function floatable<T extends HTMLElement>(container?: HTMLElement): Attachment<T> {
	let initial_x: number;
	let initial_y: number;
	let initial_top: number;
	let initial_left: number;

	let onmouseup: (() => void);
	let onmousemove: (() => void);

	function handle_mousedown(event: MouseEvent, element: T) {
		if (event.button !== 0) {
			return;
		}

		event.preventDefault();

		const target = (container ?? element) as T;
		const computed_style = getComputedStyle(target);

		if (computed_style.position === 'static') {
			const rect = target.getBoundingClientRect();

			target.style.position = 'absolute';
			target.style.top = `${rect.top}px`;
			target.style.left = `${rect.left}px`;

			target.style.width = `${rect.width}px`;
			target.style.height = `${rect.height}px`;

			target.style.margin = '0';
		}

		initial_x = event.clientX;
		initial_y = event.clientY;

		const current_style = getComputedStyle(target);

		initial_left = Number.parseFloat(current_style.left);
		initial_top = Number.parseFloat(current_style.top);

		target.classList.add('dragging');

		onmousemove = on(window, 'mousemove', e => handle_mousemove(e as MouseEvent, target));
		onmouseup = on(window, 'mouseup', () => handle_mouseup(target));
	}

	function handle_mousemove(event: MouseEvent, element: T) {
		const dx = event.clientX - initial_x;
		const dy = event.clientY - initial_y;

		element.style.left = `${initial_left + dx}px`;
		element.style.top = `${initial_top + dy}px`;
	}

	function handle_mouseup(element: T) {
		element.classList.remove('dragging');

		onmousemove?.();
		onmouseup?.();
	}

	return (element: T) => {
		const onmousedown = on(element, 'mousedown', e => handle_mousedown(e as MouseEvent, element));

		return () => {
			onmousedown();
			onmousemove?.();
			onmouseup?.();
		};
	};
}
