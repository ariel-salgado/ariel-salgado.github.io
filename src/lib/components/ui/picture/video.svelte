<script lang='ts'>
	import type { HTMLVideoAttributes } from 'svelte/elements';

	import { cn } from '$lib/utils';

	interface Props extends HTMLVideoAttributes {}

	let { class: class_name, ...rest }: Props = $props();
</script>

<div class={cn('overflow-hidden rounded-lg border-2 border-secondary', class_name)}>
	<video
		autoplay
		controls={false}
		loop
		muted
		oncontextmenu={e => e.preventDefault()}
		playsinline
		{...rest}
	>
		<track kind='captions' />
	</video>
</div>
