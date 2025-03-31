<script lang="ts">
	interface Props {
		children: any;
		height?: string;
	}

	let { children, height = 'calc(100vh-200px)' }: Props = $props();
</script>

<div class="flex max-w-full flex-col gap-4 overflow-y-auto" style="height: {height};">
	{@render children?.()}
</div>
