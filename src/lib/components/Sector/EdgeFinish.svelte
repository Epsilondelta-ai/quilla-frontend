<script lang="ts">
	interface Props {
		finishes: string[];
		position: 'top' | 'bottom';
	}

	let { finishes, position }: Props = $props();
</script>

<div class="absolute z-1 w-full" style="{position}: -1px;">
	{#each finishes as finish}
		<img class="w-full" src={finish} alt="" />
	{/each}
</div>
