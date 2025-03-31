<script lang="ts">
	let { children } = $props();
</script>

<div class="flex max-h-[calc(100vh-200px)] max-w-full flex-col gap-4 overflow-y-auto">
	{@render children?.()}
</div>
