<script lang='ts' module>
	export interface PackageManager {
		id: string;
		label: string;
		command: string;
	}

	const default_package_managers: PackageManager[] = [
		{ id: 'npm', label: 'npm', command: 'npm install' },
		{ id: 'yarn', label: 'Yarn', command: 'yarn add' },
		{ id: 'pnpm', label: 'pnpm', command: 'pnpm add' },
		{ id: 'bun', label: 'Bun', command: 'bun add' },
	];
</script>

<script lang='ts'>
	import ClipboardIcon from 'phosphor-svelte/lib/Clipboard';

	interface Props {
		package_name?: string;
		package_managers?: PackageManager[];
		overrides?: Partial<
			Record<string, Partial<Omit<PackageManager, 'id'>>>
		>;
	}

	let {
		package_name = 'package',
		package_managers = default_package_managers,
		overrides = {},
	}: Props = $props();

	const merged_managers = $state(
		package_managers.map((pm) => {
			const override = overrides[pm.id];
			return override ? { ...pm, ...override } : pm;
		}),
	);

	let selected_manager = $state(package_managers[0]?.id || 'npm');

	function copy_to_clipboard() {
		const manager = merged_managers.find(m => m.id === selected_manager);
		const command = `${manager?.command} ${package_name}`;
		navigator.clipboard.writeText(command);
	}
</script>

<div class='w-full max-w-3xl'>
	<div class='flex border-b border-muted'>
		{#each merged_managers as manager}
			<button
				class={`
      				relative cursor-pointer px-4 py-2 text-sm font-medium transition-colors
      				${
					selected_manager === manager.id
						? 'text-primary'
						: `text-muted-foreground hover:text-foreground`
				}
    			`}
				onclick={() => (selected_manager = manager.id)}
			>
				{manager.label}
				{#if selected_manager === manager.id}
					<div
						class='absolute right-0 bottom-0 left-0 h-0.5 bg-primary'
					></div>
				{/if}
			</button>
		{/each}
	</div>

	<div class='relative rounded-b-lg bg-alt-background p-4'>
		<pre
			class='overflow-x-auto font-mono text-sm whitespace-normal text-foreground'>
			<code class='whitespace-normal'>
				{merged_managers.find(m => m.id === selected_manager)?.command} {package_name}
			</code>
		</pre>

		<button
			class='
				absolute top-2 right-2 cursor-pointer rounded-md bg-background p-1.5 text-muted-foreground
				transition-colors
				hover:bg-muted hover:text-foreground
			'
			onclick={copy_to_clipboard}
			title='Copiar al portapapeles'
		>
			<ClipboardIcon class='size-5' />
		</button>
	</div>
</div>
