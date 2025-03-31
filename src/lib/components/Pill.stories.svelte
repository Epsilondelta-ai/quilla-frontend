<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';

	import Pill from './Pill.svelte';

	const { Story } = defineMeta({
		title: 'components/Pill',
		component: Pill,
		tags: ['autodocs']
	});
</script>

<Story name="pills">
	<Pill>Default Pill</Pill>
	<Pill color="bg-red-500">Red Pill</Pill>
	<Pill color="bg-green-500">Green Pill</Pill>
	<Pill color="bg-yellow-500">Yellow Pill</Pill>
	<Pill color="bg-purple-500">Purple Pill</Pill>
	<Pill color="bg-pink-500">Pink Pill</Pill>
	<Pill color="bg-gray-500">Gray Pill</Pill>
	<Pill color="bg-orange-500">Orange Pill</Pill>
	<Pill color="bg-teal-500">Teal Pill</Pill>
</Story>
