<svelte:head>
	<link rel="apple-touch-icon" sizes="180x180" href="/assets/img/favicons/apple-touch-icon.png" />
	<link rel="icon" type="image/png" sizes="32x32" href="/assets/img/favicons/favicon-32x32.png" />
	<link rel="icon" type="image/png" sizes="16x16" href="/assets/img/favicons/favicon-16x16.png" />
	<link rel="shortcut icon" type="image/x-icon" href="/assets/img/favicons/favicon.ico" />
	<link rel="manifest" href="/assets/img/favicons/manifest.json" />
	<meta name="msapplication-TileImage" content="/assets/img/favicons/mstile-150x150.png" />
	<meta name="theme-color" content="#ffffff" />

	<!-- ===============================================--><!--    Stylesheets--><!-- ===============================================-->
	<link rel="stylesheet" href="/assets/vendors/swiper/swiper-bundle.min.css" />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300..900;1,300..900&amp;family=Rubik:ital,wght@0,300..900;1,300..900family=Rubik:ital,wght@0,300..900;1,300..900&amp;display=swap"
		rel="stylesheet"
	/>
	<link href="/assets/css/theme.min.css" rel="stylesheet" id="style-default" />
	<link href="/assets/css/user-rtl.min.css" rel="stylesheet" id="user-style-rtl" />
	<link href="/assets/css/user.min.css" rel="stylesheet" id="user-style-default" />
	<link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.8/css/line.css" />
	<script async src="https://www.googletagmanager.com/gtag/js?id=G-BXGDHP039P"></script>
	<script>
		window.dataLayer = window.dataLayer || [];
		function gtag() {
			dataLayer.push(arguments);
		}
		gtag('js', new Date());

		gtag('config', 'G-BXGDHP039P');

		document.querySelector('html').setAttribute('lang', 'ko-KR');
	</script>

	<!-- ===============================================--><!--    JavaScripts--><!-- ===============================================-->
	<script src="/assets/vendors/popper/popper.min.js"></script>
	<script src="/assets/vendors/bootstrap/bootstrap.min.js"></script>
	<script src="/assets/vendors/is/is.min.js"></script>
	<script src="/assets/vendors/countup/countUp.umd.js"></script>
	<script src="/assets/vendors/swiper/swiper-bundle.min.js"></script>
	<script src="/assets/vendors/lodash/lodash.min.js"></script>
	<!-- <script src="https://polyfill.io/v3/polyfill.min.js?features=window.scroll"></script> -->
	<script src="/assets/js/theme.js"></script>
</svelte:head>

<!-- ===============================================--><!--    Main Content--><!-- ===============================================-->
<main class="main" id="top">
	<div class="content">
		<nav
			class="navbar navbar-expand-md fixed-top"
			id="navbar"
			data-navbar-soft-on-scroll="data-navbar-soft-on-scroll"
		>
			<div class="container-fluid px-0">
				<a id="head_logo_img" href="/"
					><img
						class="navbar-brand d-md-none w-75"
						src="/assets/img/logos/quilla_icon.svg"
						alt="logo"
					/></a
				><a id="head_logo_text" class="navbar-brand fw-bold d-none d-md-block" href="/introduce/en/"
					>Quilla</a
				><a
					id="get_started_now_btn"
					class="btn btn-primary btn-sm ms-md-x1 mt-lg-0 order-md-1 ms-auto"
					href="https://forms.office.com/r/2SA6ARe7w9">지금 시작하기</a
				><button
					class="navbar-toggler border-0 pe-0"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbar-content"
					aria-controls="navbar-content"
					aria-expanded="false"
					aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button
				>
				<div
					class="navbar-collapse justify-content-md-end collapse"
					id="navbar-content"
					data-navbar-collapse="data-navbar-collapse"
				>
					<ul
						class="navbar-nav gap-md-2 gap-lg-3 pt-x1 pt-md-0 pb-md-0 pb-1"
						data-navbar-nav="data-navbar-nav"
					>
						<li class="nav-item"><a class="nav-link lh-xl" href="#home">Home</a></li>
						<li class="nav-item"><a class="nav-link lh-xl" href="#about">About us</a></li>
						<li class="nav-item"><a class="nav-link lh-xl" href="#service">Service</a></li>
						<li class="nav-item"><a class="nav-link lh-xl" href="#pricing">Pricing</a></li>
						<li class="nav-item"><a class="nav-link lh-xl" href="#contact">Contact</a></li>
					</ul>
				</div>
			</div>
		</nav>
		<!-- svelte-ignore a11y_no_noninteractive_tabindex -->
		<div data-bs-target="#navbar" data-bs-spy="scroll" tabindex="0">
			<section class="hero-section position-relative mb-lg-0 z-0 mb-4 overflow-hidden" id="home">
				<div class="hero-background">
					<div class="container">
						<div class="row gy-4 gy-md-8 pt-lg-0 pt-9">
							<div class="col-lg-6 text-lg-start text-center">
								<h1 class="fs-2 fs-lg-1 fw-bold mb-lg-x1 lh-base mt-lg-0 mt-3 mb-2 text-white">
									채팅만 하세요,<br />정리는 우리가 할게요
								</h1>
								<p class="fs-8 mb-lg-4 lh-lg mb-3 text-white">
									<span class="fw-bold fs-7"
										>아직도 노트앱 정리하느라 시간을 낭비하고 계신가요?</span
									><br />Quilla는 당신의 메모를 귀찮게 정리할 필요도 다른 노트앱처럼 사용하는 방법을
									공부할 필요도 없습니다. 그저 채팅 한번이면 됩니다. Quilla의 AI는 단지 채팅 한
									번만으로 당신의 생각을 자동으로 정리해서, 검색하기 편한 구조화된 데이터로
									저장합니다.<br /><span class="fw-bold fs-6">당신은 정말 중요한 것만 하세요</span>
								</p>
								<p class="mb-x1 fs-8 button-text text-uppercase fw-bold lh-base text-300">
									Download our app
								</p>
								<div
									class="d-flex justify-content-center justify-content-lg-start position-relative z-2 flex-wrap gap-2"
								>
									<a
										id="hero_app_store_btn"
										class="rounded-1 cursor-pointer border-0 bg-transparent p-0"
										href="https://forms.office.com/r/tdc8HQCWs1"
									>
										<img
											class="img-fluid"
											src="/assets/img/logos/App_Store.webp"
											alt="/assets/img/logos/App_Store.webp"
										/></a
									><a
										id="hero_play_store_btn"
										class="rounded-1 cursor-pointer border-0 bg-transparent p-0"
										href="https://forms.office.com/r/rNuWiFhvrZ"
									>
										<img
											class="img-fluid"
											src="/assets/img/logos/Play_Store.webp"
											alt="/assets/img/logos/Play_Store.webp"
										/></a
									>
								</div>
							</div>
							<div class="col-lg-6 position-lg-relative">
								<div class="position-lg-absolute z-1 text-center">
									<img
										class="img-fluid chat-image"
										src="/assets/img/Hero/landing_frame_ko.svg"
										alt=""
									/>
									<div class="position-absolute dots d-none d-md-block">
										<img
											class="img-fluid w-lg-75 w-50"
											src="/assets/img/illustrations/Dots.webp"
											alt=""
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="position-absolute start-0 end-0 bottom-0 z-1">
					<img class="wave mb-md-n2" src="/assets/img/illustrations/Wave.svg" alt="" />
					<div class="py-md-5 bg-white py-2"></div>
				</div>
			</section>

			<section class="mb-lg-13 container mb-8" id="about">
				<div class="row align-items-center">
					<div class="col-lg-6 col-xl-7 col-12">
						<img class="img-fluid" src="/assets/img/Hero/chat_schedule_ko.png" alt="" />
					</div>
					<div class="col-lg-6 col-xl-5 col-12">
						<div class="row justify-content-center justify-content-lg-start">
							<div class="col-sm-10 col-md-8 col-lg-12">
								<h2 class="fs-4 fs-lg-3 fw-bold text-lg-start mb-2 text-center">
									정리할 필요없이 쓰기만 하면 됩니다.
								</h2>
								<p class="fs-8 mb-lg-5 lh-lg text-lg-start fw-normal mb-4 text-center">
									quilla의 AI agent는 당신의 멋진 아이디어를 분석하여 재구성하고 분류하고 태그를
									달아서 지식그래프에 연결하여 검색이 쉽고 여러 아이디어들과 연결하여 새로운
									인사이트를 제공합니다.
								</p>
							</div>
							<div class="col-12">
								<div class="mb-x1 mb-lg-3">
									<h5 class="fs-8 fw-bold lh-lg mb-1">채팅을 하는 것만으로도 메모가 끝납니다.</h5>
									<p class="lh-xl mb-0">
										나와의 채팅으로 메모하는 것처럼 당신의 아름다운 생각들을 quilla에게 저장하라고
										지시만 하면 됩니다.
									</p>
								</div>
								<div>
									<h5 class="fs-8 fw-bold lh-lg mb-1">검색결과를 원하는 형태로 볼 수 있습니다.</h5>
									<p class="lh-xl mb-0">
										기존의 노트앱은 내용을 검색하면 여러분이 저장한 형태로만 결과를 볼 수
										있을겁니다. 하지만 Quilla는 검색하는 그 순간에 원하는 형태로 변환해서 보여줄 수
										있습니다.
										<br />당신은 단지 quilla에게 찾고싶은 내용을 원하는 형태로 처리하고 보여주라고
										지시만 하면 됩니다.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section class="mb-lg-13 container mb-8">
				<div class="row align-items-center">
					<div class="col-lg-6 col-xl-5 order-lg-1 col-12">
						<img class="img-fluid" src="/assets/img/Hero/chat_schedule2_ko.png" alt="" />
					</div>
					<div class="col-lg-6 col-xl-7 col-12">
						<div class="row justify-content-center justify-content-lg-start">
							<div class="col-sm-10 col-md-8 col-lg-11">
								<h2 class="fs-4 fs-lg-3 fw-bold text-lg-start mb-2 text-center">
									Quilla Agent는 즐거운 <br />노트 경험을 선사합니다.
								</h2>
								<p class="fs-8 mb-lg-5 lh-lg text-lg-start fw-normal mb-4 text-center">
									진보된 AI로 작동하는 Quilla Agent가 사용자를 대신하여 손쉽게 메모 정리 및 검색을
									처리합니다.
								</p>
							</div>
							<div class="col-12">
								<div class="mb-x1 mb-lg-3">
									<h5 class="fs-8 fw-bold lh-lg mb-1">AI 기반 데이터 처리</h5>
									<p class="b-0 lh-xl">
										Quilla Agent analyzes your chat, structures your notes, and seamlessly connects
										them to your existing knowledge.
									</p>
								</div>
								<div>
									<h5 class="fs-8 fw-bold lh-lg mb-1">검색도 번거롭지 않게 채팅으로</h5>
									<p class="lh-xl mb-0">
										AI Agent 기반 데이터 재구성을 바탕으로 한 고급 RAG 기술이 노트검색을 아름답게
										수행합니다.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section class="mb-lg-11 container mb-8">
				<div class="row justify-content-center">
					<div class="col-md-8 col-lg-7">
						<h3 class="fs-4 fs-lg-3 fw-bold mb-lg-x1 mb-2 text-center">
							How does <span class="text-nowrap">it work?</span>
						</h3>
						<p class="fs-8 mb-lg-8 lh-lg mb-7 text-center">
							메모를 남기고 싶으신가요? 채팅에 입력하고 저장해 달라고 지시하세요.<br />그 후에 이
							메모를 찾아야 하나요? 간단히 물어보시면 저희가 찾아드리겠습니다.
						</p>
					</div>
					<div class="col-12">
						<div class="row g-sm-2 g-lg-3 align-items-center timeline">
							<div
								class="col-lg-4 d-flex flex-lg-column justify-content-center gap-sm-x1 gap-md-4 gap-lg-0 col-12 flex-row gap-2"
							>
								<div class="timeline-step-1 w-lg-100 mb-lg-5 mb-xl-6 mb-4 w-25">
									<div class="timeline-item d-flex justify-content-center">
										<div
											class="timeline-icon bg-primary rounded-circle d-flex justify-content-center align-items-center"
										>
											<span class="fs-6 fs-lg-5 fs-xl-4 text-white"> 1</span>
										</div>
									</div>
								</div>
								<div class="py-lg-0 px-lg-5 w-sm-50 w-lg-100 timeline-content w-75 py-1">
									<h6 class="fs-8 fw-bold text-lg-center lh-lg mb-2">Install App</h6>
									<p class="text-lg-center lh-xl mb-0">한 번의 클릭으로 앱을 설치하세요.</p>
								</div>
							</div>
							<div
								class="col-lg-4 d-flex flex-lg-column justify-content-center gap-sm-x1 gap-md-4 gap-lg-0 col-12 flex-row gap-2"
							>
								<div class="timeline-step-2 w-lg-100 mb-lg-5 mb-xl-6 mb-4 w-25">
									<div class="timeline-item d-flex justify-content-center">
										<div
											class="timeline-icon bg-success rounded-circle d-flex justify-content-center align-items-center"
										>
											<span class="fs-6 fs-lg-5 fs-xl-4 text-white"> 2</span>
										</div>
									</div>
								</div>
								<div class="py-lg-0 px-lg-5 w-sm-50 w-lg-100 timeline-content w-75 py-1">
									<h6 class="fs-8 fw-bold text-lg-center lh-lg mb-2">Create Workspace</h6>
									<p class="text-lg-center lh-xl mb-0">
										노트 내용을 저장할 새 작업 공간을 만듭니다.
									</p>
								</div>
							</div>
							<div
								class="col-lg-4 d-flex flex-lg-column justify-content-center gap-sm-x1 gap-md-4 gap-lg-0 col-12 flex-row gap-2"
							>
								<div
									class="timeline-step-3 position-relative w-lg-100 mb-lg-5 mb-xl-6 z-1 mb-4 w-25 overflow-hidden"
								>
									<div class="timeline-item d-flex justify-content-center">
										<div
											class="timeline-icon bg-info rounded-circle d-flex justify-content-center align-items-center"
										>
											<span class="fs-6 fs-lg-5 fs-xl-4 text-white"> 3</span>
										</div>
									</div>
								</div>
								<div class="py-lg-0 px-lg-5 w-sm-50 w-lg-100 timeline-content w-75 py-1">
									<h6 class="fs-8 fw-bold text-lg-center lh-lg mb-2">Start Chat</h6>
									<p class="text-lg-center lh-xl mb-0">
										새로운 채팅을 만들고, <br />저장할 내용을 쓰거나 저장된 메모에 대한 질문을
										하세요.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section class="experience position-relative overflow-hidden" id="service">
				<div class="container">
					<div class="row justify-content-center">
						<div class="col-12" style="max-width: 404.7874px;max-height: 720px;">
							<div
								class="position-relative mb-lg-9 video-player-paused z-1 mb-8 text-center"
								data-video-player-container="data-video-player-container"
							>
								<!-- svelte-ignore a11y_media_has_caption -->
								<video
									class="rounded-4 h-100 w-100"
									style="max-height: 720px;"
									src="/assets/video/quilla_ko.mp4"
									poster="/assets/img/Hero/quilla_splash_ko.svg"
									data-video-player="data-video-player"
								></video>
								<div
									class="overlay position-absolute rounded-4 bg-1100 start-0 end-0 top-0 bottom-0 object-cover"
									style="margin-left:auto; margin-right:auto; max-width: 404.7874px;max-height: 720px;"
									data-overlay="data-overlay"
								></div>
								<button
									class="btn play-button position-absolute justify-content-center align-items-center rounded-circle cursor-pointer bg-white"
									data-play-button="data-play-button"
								>
									<img
										class="play-icon w-25"
										src="/assets/img/illustrations/play-solid.svg"
										alt=""
										data-play-icon="data-play-icon"
									/><img
										class="pause-icon w-25"
										src="/assets/img/illustrations/pause-solid.svg"
										alt=""
										data-pause-icon="data-pause-icon"
									/></button
								>
								<div class="position-absolute dots d-none d-sm-block">
									<img class="img-fluid w-100" src="/assets/img/illustrations/Dots.webp" alt="" />
								</div>
							</div>
						</div>
					</div>
					<div class="row justify-content-center">
						<div class="col-md-8 col-lg-7">
							<h2 class="fs-4 fs-lg-3 fw-bold mb-lg-9 lh-sm mb-5 text-center text-white">
								Qulla는 여러분의 문제를 해결하기 위해 만들어졌습니다.
							</h2>
						</div>
						<div class="col-12">
							<div class="row gy-4 g-md-3 pb-lg-11 px-1 pb-8">
								<div class="col-md-6 col-lg-4 d-flex align-items-start col-12 gap-2">
									<img src="/assets/img/icons/roadmap.svg" alt="" />
									<div>
										<h5 class="fs-8 lh-lg fw-bold text-white">Unlimited Workspace</h5>
										<p class="text-opacity-50 lh-xl mb-0 text-white">
											제한 없는 워크스페이스, 끝없는 가능성. 제한 없이 모든 것을 저장하고, 정리하고,
											액세스하세요.
										</p>
									</div>
								</div>
								<div class="col-md-6 col-lg-4 d-flex align-items-start col-12 gap-2">
									<img src="/assets/img/icons/users-wm.svg" alt="" />
									<div>
										<h5 class="fs-8 lh-lg fw-bold text-white">Chat Based Notes</h5>
										<p class="text-opacity-50 lh-xl mb-0 text-white">
											정리할 필요없는 채팅기반 노트앱. 채팅만 하면 되고 나머지는 AI가 처리합니다.
										</p>
									</div>
								</div>
								<div class="col-md-6 col-lg-4 d-flex align-items-start col-12 gap-2">
									<img src="/assets/img/icons/share-91.svg" alt="" />
									<div>
										<h5 class="fs-8 lh-lg fw-bold text-white">Organizing Web Content</h5>
										<p class="text-opacity-50 lh-xl mb-0 text-white">
											웹 콘텐츠를 손쉽게 정리하세요. 채팅을 통해 기사, 링크, 인사이트를 저장하고
											AI가 모든 것을 체계적으로 정리하고 찾기 쉽게 유지하도록 하세요.
										</p>
									</div>
								</div>
								<div class="col-md-6 col-lg-4 d-flex align-items-start col-12 gap-2">
									<img src="/assets/img/icons/video_meeting.svg" alt="" />
									<div>
										<h5 class="fs-8 lh-lg fw-bold text-white">Managing Your Schedule</h5>
										<p class="text-opacity-50 lh-xl mb-0 text-white">
											캘린더에 정리할 필요없이 일정만 얘기해보세요. quilla의 AI agent가 체계적으로
											관리해드립니다.
										</p>
									</div>
								</div>
								<div class="col-md-6 col-lg-4 d-flex align-items-start col-12 gap-2">
									<img src="/assets/img/icons/opening-times.svg" alt="" />
									<div>
										<h5 class="fs-8 lh-lg fw-bold text-white">Create meeting minutes</h5>
										<p class="text-opacity-50 lh-xl mb-0 text-white">
											회의 노트를 손쉽게 기록하세요. 녹음을 업로드하면 AI가 정리되고 검색 가능한
											요약으로 변환합니다.
										</p>
									</div>
								</div>
								<div class="col-md-6 col-lg-4 d-flex align-items-start col-12 gap-2">
									<img src="/assets/img/icons/card-favorite.svg" alt="" />
									<div>
										<h5 class="fs-8 lh-lg fw-bold text-white">Output in desired format</h5>
										<p class="text-opacity-50 lh-xl mb-0 text-white">
											필요한 모든 형식으로 노트를 요청하세요. 저희 AI가 원하는 대로 콘텐츠를
											재구성하여 전달합니다.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="position-absolute start-0 end-0 top-0">
					<div class="py-md-9 py-xl-10 bg-white py-3"></div>
					<img class="wave" src="/assets/img/illustrations/Wave_2.svg" alt="" />
				</div>
			</section>
			<section class="bg-300" id="pricing">
				<div class="py-lg-10 container py-8">
					<div class="row justify-content-center">
						<div class="col-md-8 col-lg-7">
							<h3 class="fs-4 fs-lg-3 fw-bold mb-lg-x1 lh-sm mb-2 text-center">가격 플랜</h3>
							<p class="fs-8 mb-lg-8 lh-lg fw-normal mb-7 text-center">
								더 다채롭고 자유로운 quilla를 사용하기 위해 제안합니다.
							</p>
						</div>
						<div class="col-12">
							<div
								class="d-flex flex-column flex-md-row justify-content-center align-items-center gap-3"
							>
								<div
									class="p-x1 price-card-1 mb-md-0 rounded-2 pricing-card mb-3 border bg-transparent text-center"
								>
									<p class="fs-10 text-uppercase fw-bold text-primary ls-2 mb-3">free</p>
									<h2 class="mb-3">
										<span class="fs-6 fs-md-7 fw-bold">$</span><span class="fs-2 fs-md-1 fw-bold"
											>0</span
										><span class="fs-9 lh-xl font-sans-serif">/ mo</span>
									</h2>
									<ul class="list-unstyled fs-8 lh-xl fw-light text-1100 ls-1">
										<li class="py-x1 border-top px-1">500 채팅</li>
										<li class="py-x1 border-top px-1">1 GB 저장공간</li>
										<li class="py-x1 border-top px-1">텍스트만 저장</li>
										<li class="py-x1 border-top px-1">제한된 지원</li>
										<li class="d-grid mt-1">
											<a
												type="button"
												id="pricing_free_tier"
												class="btn btn-secondary btn-lg lh-xl"
												href="https://forms.office.com/r/5LFMpfyKpf">지금 시작하기</a
											>
										</li>
									</ul>
								</div>
								<div class="p-x1 rounded-2 pricing-card border bg-white text-center shadow-sm">
									<p class="fs-10 text-uppercase fw-bold text-primary ls-2 mb-3">Plus</p>
									<h2 class="mb-3">
										<span class="fs-6 fs-md-7 fw-bold">$</span><span class="fs-2 fs-md-1 fw-bold"
											>22</span
										><span class="fs-9 lh-xl font-sans-serif">/ mo</span>
									</h2>
									<ul class="list-unstyled fs-8 lh-xl fw-light text-1100 ls-1">
										<li class="py-x1 border-top px-1">5000 채팅</li>
										<li class="py-x1 border-top px-1">100 GB 저장공간</li>
										<li class="py-x1 border-top px-1">텍스트, 이미지 저장</li>
										<li class="py-x1 border-top px-1">기본 지원</li>
										<li class="d-grid mt-1">
											<a
												type="button"
												id="pricing_plus_tier"
												class="btn btn-primary btn-lg lh-xl"
												href="https://forms.office.com/r/kpvFvsrNZ9">지금 시작하기</a
											>
										</li>
									</ul>
								</div>
								<div
									class=" p-x1 price-card-2 mb-md-0 rounded-2 pricing-card mb-3 border bg-transparent text-center"
								>
									<p class="fs-10 text-uppercase fw-bold text-primary ls-2 mb-3">Standard</p>
									<h2 class="mb-3">
										<span class="fs-6 fs-md-7 fw-bold">$</span><span class="fs-2 fs-md-1 fw-bold"
											>65</span
										><span class="fs-9 lh-xl font-sans-serif">/ mo</span>
									</h2>
									<ul class="list-unstyled fs-8 lh-xl fw-light text-1100 ls-1">
										<li class="py-x1 border-top px-1">100,000 채팅</li>
										<li class="py-x1 border-top px-1">1 TB 저장공간</li>
										<li class="py-x1 border-top px-1">텍스트, 이미지, 오디오, 비디오</li>
										<li class="py-x1 border-top px-1">프리미엄 지원</li>
										<li class="d-grid mt-1">
											<a
												type="button"
												id="pricing_standard_tier"
												class="btn btn-secondary btn-lg lh-xl"
												href="https://forms.office.com/r/s9exA5SwX0">지금 시작하기</a
											>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section class="bg-1100 position-relative z-0" id="contact">
				<div class="py-lg-9 container py-8">
					<div class="row justify-content-center">
						<div class="col-md-8 col-lg-8">
							<div class="row justify-content-center">
								<div class="col-lg-10 col-12">
									<h2 class="fs-4 fs-lg-3 fw-bold lh-sm mb-2 text-center text-white">
										Get latest updates
									</h2>
									<p class="fs-8 mb-lg-6 lh-lg fw-normal mb-5 text-center text-white">
										최신 소식을 받아보려면 월간 뉴스레터를 구독하세요!
									</p>
								</div>
								<div class="col-lg-7 col-10">
									<form
										method="POST"
										on:submit={() => {
											return false;
										}}
									>
										<div class="d-grid">
											<a
												id="subscribe_newslatter"
												class="btn btn-lg btn-primary lh-xl mb-x1"
												type="submit"
												href="https://forms.office.com/r/WiH2kXxqR3"
											>
												Subscribe
											</a>
										</div>
									</form>
								</div>
								<div class="col-lg-7 col-10">
									<p class="lh-lg mb-0 text-center text-white">
										우리는 귀하의 세부 정보를 제3자와 공유하지 않습니다. <br />자세한 내용은
										개인정보 보호정책을 참조하세요.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="position-absolute z-n1 d-none d-lg-block end-0 bottom-0">
					<img src="/assets/img/illustrations/Green_dots.svg" alt="" />
				</div>
				<div class="position-relative start-0 bottom-0 z-1">
					<img class="img-fluid w-100" src="/assets/img/illustrations/Wave_3.svg" alt="" />
				</div>
			</section>
		</div>
		<!-- svelte-ignore a11y_consider_explicit_label -->
		<button
			class="btn scroll-to-top rounded-circle d-flex justify-content-center align-items-center bg-primary text-white"
			data-scroll-top="data-scroll-top"><span class="uil uil-angle-up"></span></button
		>
		<footer class="pt-lg-8 pt-7">
			<div class="container">
				<div class="row gy-4 g-md-3 border-bottom pb-lg-9 justify-content-center pb-8">
					<div class="col-md-3 col-6">
						<p class="lh-lg ls-1 mb-2">Company</p>
						<ul class="list-unstyled text-1100">
							<li class="mb-1">
								<a id="footer_about" class="ls-1 lh-xl" href="#about">About us</a>
							</li>
							<li class="mb-1">
								<a id="footer_contact_us" class="ls-1 lh-xl" href="#contact"> Contact us</a>
							</li>
							<li class="mb-1"><a id="footer_careers" class="ls-1 lh-xl" href={'#'}>Careers</a></li>
							<li class="mb-1"><a id="footer_press" class="ls-1 lh-xl" href={'#'}>Press</a></li>
						</ul>
					</div>
					<div class="col-md-3 col-6">
						<p class="lh-lg mb-2">Product</p>
						<ul class="list-unstyled text-1100">
							<li class="mb-1">
								<a id="footer_features" class="ls-1 lh-xl" href="#service">Features</a>
							</li>
							<li class="mb-1">
								<a id="footer_pricing" class="ls-1 lh-xl" href="#pricing"> Pricing</a>
							</li>
							<li class="mb-1"><a id="footer_news" class="ls-1 lh-xl" href={'#'}> News</a></li>
							<li class="mb-1">
								<a id="footer_help_desk" class="ls-1 lh-xl" href={'#'}> Help desk</a>
							</li>
							<li class="mb-1">
								<a id="footer_support" class="ls-1 lh-xl" href="#service"> Support</a>
							</li>
						</ul>
					</div>
					<div class="col-md-3 col-6">
						<p class="lh-lg mb-2">Legal</p>
						<ul class="list-unstyled text-1100">
							<li class="mb-1">
								<a id="footer_privacy" class="ls-1 lh-xl" href="/introduce/ko/privacy">Privacy</a>
							</li>
							<li class="mb-1">
								<a
									id="footer_terms_and_conditions"
									class="ls-1 lh-xl"
									href="/introduce/ko/terms-and-conditions"
								>
									Terms & Conditions</a
								>
							</li>
							<li class="mb-1">
								<a id="footer_return_policy" class="ls-1 lh-xl" href="/introduce/ko/return-policy">
									Return Policy</a
								>
							</li>
						</ul>
					</div>
					<div class="col-md-3 d-md-flex flex-column align-items-md-end pe-md-0 col-6">
						<div>
							<p class="lh-lg mb-2">Download Our App</p>
							<div class="mb-lg-2 mb-1">
								<a
									id="footer_app_store_btn"
									class="rounded-1 cursor-pointer border-0 bg-transparent p-0"
									href="https://forms.office.com/r/tdc8HQCWs1"
								>
									<img
										class="img-fluid"
										src="/assets/img/logos/App_Store.webp"
										alt="/assets/img/logos/App_Store.webp"
									/></a
								>
							</div>
							<a
								id="footer_play_store_btn"
								class="rounded-1 cursor-pointer border-0 bg-transparent p-0"
								href="https://forms.office.com/r/rNuWiFhvrZ"
							>
								<img
									class="img-fluid"
									src="/assets/img/logos/Play_Store.webp"
									alt="/assets/img/logos/Play_Store.webp"
								/></a
							>
						</div>
					</div>
				</div>
				<div class="row gy-2 justify-content-center justify-content-md-between py-3">
					<div class="col-auto ps-0">
						<p class="text-md-start lh-xl text-1100 text-center">
							© 2024 Copyright, All Right Reserved, Made by Epsilon-delta Inc.
						</p>
					</div>
					<div class="col-auto pe-0">
						<!-- svelte-ignore a11y_consider_explicit_label -->
						<a class="icons fs-8 me-md-0 ms-md-3 me-3 cursor-pointer" href={'#'}
							><span class="uil uil-twitter"> </span></a
						>
						<!-- svelte-ignore a11y_consider_explicit_label -->
						<a class="icons fs-8 me-md-0 ms-md-3 me-3 cursor-pointer" href={'#'}
							><span class="uil uil-instagram"></span></a
						>
						<!-- svelte-ignore a11y_consider_explicit_label -->
						<a class="icons fs-8 me-md-0 ms-md-3 me-3 cursor-pointer" href={'#'}
							><span class="uil uil-linkedin"> </span></a
						>
					</div>
				</div>
			</div>
		</footer>
	</div>
</main>
<!-- ===============================================--><!--    End of Main Content--><!-- ===============================================-->
