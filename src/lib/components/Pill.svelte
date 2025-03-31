<script lang="ts">
	interface Props {
		children: any;
		color?: string;
	}

	let { children, color = 'bg-blue-500' }: Props = $props();
</script>

<span class="inline-block rounded-full px-4 py-1 text-sm font-medium text-white {color}">
	{@render children?.()}
</span>
