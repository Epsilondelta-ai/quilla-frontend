<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<svelte:head>
	<title>Quilla</title>
</svelte:head>

{@render children()}
