<script lang='ts'>
	import type { EnhancedImgAttributes } from '@sveltejs/enhanced-img';

	import { cn } from '$lib/utils';

	interface Props extends EnhancedImgAttributes {}

	let { class: class_name, src, ...rest }: Props = $props();
</script>

<div
	class={cn(
		'overflow-hidden rounded-lg border-2 border-secondary',
		class_name,
	)}
>
	<enhanced:img src={src} {...rest} />
</div>
