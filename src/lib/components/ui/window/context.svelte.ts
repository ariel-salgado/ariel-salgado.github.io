import { SvelteMap } from 'svelte/reactivity';
import { getContext, setContext } from 'svelte';

const CONTEXT_KEY = Symbol('CTX_WINDOW');

class WindowContext {
	private window_index = $state<number>(100);
	private window_record = new SvelteMap<string, number>();

	public register(id: string) {
		this.window_record.set(id, this.window_index);
	}

	public unregister(id: string) {
		this.window_record.delete(id);
	}

	public get_window_index(id: string) {
		return this.window_record.get(id);
	}

	public set_next_window_index(id: string) {
		this.window_record.set(id, this.window_index++);
		return this.window_index;
	}
}

export function set_window_context(): WindowContext {
	return setContext(CONTEXT_KEY, new WindowContext());
}

export function get_window_context(): ReturnType<typeof set_window_context> {
	return getContext(CONTEXT_KEY);
}
