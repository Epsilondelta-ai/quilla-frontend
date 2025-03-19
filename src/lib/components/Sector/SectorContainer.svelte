<script lang="ts">
	interface Props {
		class?: string;
		children?: any;
	}
	let { children, ...props }: Props = $props();
</script>

<article class="mx-auto px-[1.5rem] md:w-[720px] md:px-0 lg:w-[960px] xl:w-[1100px] {props.class}">
	{@render children?.()}
</article>
