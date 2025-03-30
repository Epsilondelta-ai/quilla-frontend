<script>
	$effect(() => {
		function redirectToIntroducePage() {
			const language = navigator.language;

			if (['ko', 'ko-KR'].includes(language)) {
				window.location.href = '/introduce/ko';
				return;
			}

			window.location.href = '/introduce/en';
		}

		redirectToIntroducePage();
	});
</script>

<svelte:head>
	<script async src="https://www.googletagmanager.com/gtag/js?id=G-BXGDHP039P"></script>
	<script>
		window.dataLayer = window.dataLayer || [];
		function gtag() {
			dataLayer.push(arguments);
		}
		gtag('js', new Date());

		gtag('config', 'G-BXGDHP039P');
	</script>
</svelte:head>
