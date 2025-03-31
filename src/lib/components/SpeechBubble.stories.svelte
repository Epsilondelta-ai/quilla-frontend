<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import { marked } from 'marked';

	import SpeechBubbleArea from './SpeechBubbleArea.svelte';
	import SpeechBubble from './SpeechBubble.svelte';

	const { Story } = defineMeta({
		title: 'components/SpeechBubble',
		component: SpeechBubble,
		tags: ['autodocs']
	});

	marked.setOptions({
		breaks: true // Enable line breaks
	});
</script>

<Story name="left">
	<SpeechBubbleArea>
		<SpeechBubble direction="left">
			<p>
				레퍼런스 URL https://sdfsdinwegoiheawothsadiohasefheowbnikg.asdgiweogn.asdgiweg.ashdi와 함께
				내부의 정보를 요약하여 함께 저장하겠습니다.
			</p>
			<small>URL 내부 컨텐츠 요약</small>
			{@html marked(`
# 인스타그램 브랜드별 전략

|no|브랜드|주요전략|
|---|---|---|
|1|스타벅스|고객 참여 유도|
|2|나이키|브랜드 스토리텔링|
|3|코카콜라|소셜 미디어 캠페인|
|4|애플|비주얼 스토리텔링|

이들 브랜드는 각각의 고유한 전략을 통해 인스타그램에서 성공적인 마케팅을 펼치고 있습니다. 스타벅스는 고객 참여를 유도하는 캠페인을 통해 브랜드 충성도를 높이고 있으며, 나이키는 브랜드 스토리텔링을 통해 소비자와의 감정적 연결을 강화하고 있습니다. 코카콜라는 소셜 미디어 캠페인을 통해 소비자와의 소통을 활발히 하고 있으며, 애플은 비주얼 스토리텔링을 통해 제품의 매력을 극대화하고 있습니다.
`)}
		</SpeechBubble>
	</SpeechBubbleArea>
</Story>

<Story name="right">
	<SpeechBubbleArea>
		<SpeechBubble direction="right">
			{@html marked(
				'인스타그램 마케팅 컨텐츠 https://sdfsdinwegoiheawothsadiohasefheowbnikg.asdgiweogn.asdgiweg.ashdi 저장해줘'
			)}
		</SpeechBubble>
	</SpeechBubbleArea>
</Story>
