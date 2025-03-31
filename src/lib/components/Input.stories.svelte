<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';

	import Input from './Input.svelte';

	const { Story } = defineMeta({
		title: 'components/Input',
		component: Input,
		tags: ['autodocs']
	});
</script>

<Story name="default">
	<Input message="" onSendMessage={() => {}} />
</Story>
