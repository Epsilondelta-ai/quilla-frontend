<svelte:head>
	<!-- ===============================================--><!--    Favicons--><!-- ===============================================-->
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
	<!-- Google tag (gtag.js) -->
	<script async src="https://www.googletagmanager.com/gtag/js?id=G-BXGDHP039P"></script>
	<script>
		window.dataLayer = window.dataLayer || [];
		function gtag() {
			dataLayer.push(arguments);
		}
		gtag('js', new Date());

		gtag('config', 'G-BXGDHP039P');
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
	<!-- svelte-ignore a11y_no_noninteractive_tabindex -->
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
					href="https://forms.office.com/r/qFSk42Gfgz"
					>Get Started Now
				</a><button
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
		<div data-bs-target="#navbar" data-bs-spy="scroll" tabindex="0">
			<section class="hero-section position-relative mb-lg-0 z-0 mb-4 overflow-hidden" id="home">
				<div class="hero-background">
					<div class="container">
						<div class="row gy-4 gy-md-8 pt-lg-0 pt-9">
							<div class="col-lg-6 text-lg-start text-center">
								<h1 class="fs-2 fs-lg-1 fw-bold mb-lg-x1 lh-base mt-lg-0 mt-3 mb-2 text-white">
									Just Chat,<br />we organize notes
								</h1>
								<p class="fs-8 mb-lg-4 lh-lg mb-3 text-white">
									<span class="fw-bold fs-7">No folders, No tags, No stress</span><br />Stop
									managing notes, start owning your time. <br />Our AI automatically organizes your
									thoughts, making them searchable and structured, and ultimately creating the
									perfect note.<br /><span class="fw-bold fs-6">Focus on What Truly Matters.</span>
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
										href="https://forms.office.com/r/wCkX3wvPny"
									>
										<img
											class="img-fluid"
											src="/assets/img/logos/App_Store.webp"
											alt="/assets/img/logos/App_Store.webp"
										/></a
									><a
										id="hero_play_store_btn"
										class="rounded-1 cursor-pointer border-0 bg-transparent p-0"
										href="https://forms.office.com/r/zsxC2nkQY4"
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
										src="/assets/img/Hero/landing_frame.svg"
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
						<img class="img-fluid" src="/assets/img/Hero/chat_schedule.png" alt="" />
					</div>
					<div class="col-lg-6 col-xl-5 col-12">
						<div class="row justify-content-center justify-content-lg-start">
							<div class="col-sm-10 col-md-8 col-lg-12">
								<h2 class="fs-4 fs-lg-3 fw-bold text-lg-start mb-2 text-center">
									Just Write, No Need to Organize
								</h2>
								<p class="fs-8 mb-lg-5 lh-lg text-lg-start fw-normal mb-4 text-center">
									Our agent categorizes, organizes, and tags your notes automatically connecting
									them in a knowledge graph for seamless insights.
								</p>
							</div>
							<div class="col-12">
								<div class="mb-x1 mb-lg-3">
									<h5 class="fs-8 fw-bold lh-lg mb-1">Take simple notes using chat</h5>
									<p class="lh-xl mb-0">
										you can just take notes by telling them to save them with the content you want
										to note.
									</p>
								</div>
								<div>
									<h5 class="fs-8 fw-bold lh-lg mb-1">Search for notes in the format you want</h5>
									<p class="lh-xl mb-0">
										Rather than just searching the saved notes, you can format the notes in the
										desired format.
										<br />You can instruct them to process it and show it to you.
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
						<img class="img-fluid" src="/assets/img/Hero/chat_schedule2.png" alt="" />
					</div>
					<div class="col-lg-6 col-xl-7 col-12">
						<div class="row justify-content-center justify-content-lg-start">
							<div class="col-sm-10 col-md-8 col-lg-11">
								<h2 class="fs-4 fs-lg-3 fw-bold text-lg-start mb-2 text-center">
									Quilla Agent improves your note experience.
								</h2>
								<p class="fs-8 mb-lg-5 lh-lg text-lg-start fw-normal mb-4 text-center">
									Quilla Agent, powered by advanced AI, handles note organization and search
									effortlessly for you.
								</p>
							</div>
							<div class="col-12">
								<div class="mb-x1 mb-lg-3">
									<h5 class="fs-8 fw-bold lh-lg mb-1">AI-Powered Data Processing</h5>
									<p class="b-0 lh-xl">
										Quilla Agent analyzes your chat, structures your notes, and seamlessly connects
										them to your existing knowledge.
									</p>
								</div>
								<div>
									<h5 class="fs-8 fw-bold lh-lg mb-1">Hasslefree Chat with Everyone</h5>
									<p class="lh-xl mb-0">
										Advanced RAG Technology for Note Search, with AI Agent-Powered Data
										Reconstruction.
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
							Want to take a note? Just type it in chat and ask us to save it.<br />Need to find it
							later? Simply ask, and we’ll retrieve it for you.
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
									<p class="text-lg-center lh-xl mb-0">Install the app with a single click.</p>
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
										Create a new workspace to store note contents.
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
										Create a new chat, write something to save, or ask questions about saved notes
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
									src="/assets/video/quilla_en.mp4"
									poster="/assets/img/Hero/quilla_splash_en.svg"
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
								We made this app to solve your problems.
							</h2>
						</div>
						<div class="col-12">
							<div class="row gy-4 g-md-3 pb-lg-11 px-1 pb-8">
								<div class="col-md-6 col-lg-4 d-flex align-items-start col-12 gap-2">
									<img src="/assets/img/icons/roadmap.svg" alt="" />
									<div>
										<h5 class="fs-8 lh-lg fw-bold text-white">Unlimited Workspace</h5>
										<p class="text-opacity-50 lh-xl mb-0 text-white">
											Unlimited Workspace, Unlimited Possibilities. Store, organize, and access
											everything without limits.
										</p>
									</div>
								</div>
								<div class="col-md-6 col-lg-4 d-flex align-items-start col-12 gap-2">
									<img src="/assets/img/icons/users-wm.svg" alt="" />
									<div>
										<h5 class="fs-8 lh-lg fw-bold text-white">Chat Based Notes</h5>
										<p class="text-opacity-50 lh-xl mb-0 text-white">
											Chat-Based Notes for Effortless Organization. Just chat, and let AI handle the
											rest.
										</p>
									</div>
								</div>
								<div class="col-md-6 col-lg-4 d-flex align-items-start col-12 gap-2">
									<img src="/assets/img/icons/share-91.svg" alt="" />
									<div>
										<h5 class="fs-8 lh-lg fw-bold text-white">Organizing Web Content</h5>
										<p class="text-opacity-50 lh-xl mb-0 text-white">
											Effortlessly organize your web content. Save articles, links, and insights
											through chat, and let AI keep everything structured and easy to find.
										</p>
									</div>
								</div>
								<div class="col-md-6 col-lg-4 d-flex align-items-start col-12 gap-2">
									<img src="/assets/img/icons/video_meeting.svg" alt="" />
									<div>
										<h5 class="fs-8 lh-lg fw-bold text-white">Managing Your Schedule</h5>
										<p class="text-opacity-50 lh-xl mb-0 text-white">
											Conduct video meetings and keep records for further use with its cloud
											storage.
										</p>
									</div>
								</div>
								<div class="col-md-6 col-lg-4 d-flex align-items-start col-12 gap-2">
									<img src="/assets/img/icons/opening-times.svg" alt="" />
									<div>
										<h5 class="fs-8 lh-lg fw-bold text-white">Create meeting minutes</h5>
										<p class="text-opacity-50 lh-xl mb-0 text-white">
											Record meeting notes effortlessly. Upload your recordings, and AI converts
											them into organized, searchable summaries.
										</p>
									</div>
								</div>
								<div class="col-md-6 col-lg-4 d-flex align-items-start col-12 gap-2">
									<img src="/assets/img/icons/card-favorite.svg" alt="" />
									<div>
										<h5 class="fs-8 lh-lg fw-bold text-white">Output in desired format</h5>
										<p class="text-opacity-50 lh-xl mb-0 text-white">
											Get your notes in any format you need. Our AI reshapes and delivers your
											content just the way you want it.
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
							<h3 class="fs-4 fs-lg-3 fw-bold mb-lg-x1 lh-sm mb-2 text-center">Pricing Plans</h3>
							<p class="fs-8 mb-lg-8 lh-lg fw-normal mb-7 text-center">
								Show your pricing to your customers once they’re here with easily modifiable pricing
								cards.
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
										<li class="py-x1 border-top px-1">500 chat</li>
										<li class="py-x1 border-top px-1">1 GB Storage</li>
										<li class="py-x1 border-top px-1">Only Text</li>
										<li class="py-x1 border-top px-1">Limited support</li>
										<li class="d-grid mt-1">
											<a
												type="button"
												id="pricing_free_tier"
												class="btn btn-secondary btn-lg lh-xl"
												href="https://forms.office.com/r/1nKHjfdQzs">Get Started Now</a
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
										<li class="py-x1 border-top px-1">5000 chat</li>
										<li class="py-x1 border-top px-1">100 GB Storage</li>
										<li class="py-x1 border-top px-1">Text and Image</li>
										<li class="py-x1 border-top px-1">Basic Support</li>
										<li class="d-grid mt-1">
											<a
												type="button"
												id="pricing_plus_tier"
												class="btn btn-primary btn-lg lh-xl"
												href="https://forms.office.com/r/fnNHULmZMV">Get Started Now</a
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
										<li class="py-x1 border-top px-1">100,000 chat</li>
										<li class="py-x1 border-top px-1">1 TB Storage</li>
										<li class="py-x1 border-top px-1">Text, Image, Audio and Video</li>
										<li class="py-x1 border-top px-1">Premium Support</li>
										<li class="d-grid mt-1">
											<a
												type="button"
												id="pricing_standard_tier"
												class="btn btn-secondary btn-lg lh-xl"
												href="https://forms.office.com/r/p2ANfUkFJq">Get Started Now</a
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
										Subscribe to our monthly newsletter to stay connected with everything you need!
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
												href="https://forms.office.com/r/3q45Txw1qW"
											>
												Subscribe
											</a>
										</div>
									</form>
								</div>
								<div class="col-lg-7 col-10">
									<p class="lh-lg mb-0 text-center text-white">
										We’ll never share your details with third parties. <br />View our Privacy Policy
										for more info.
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
								<a id="footer_privacy" class="ls-1 lh-xl" href="/introduce/en/privacy">Privacy</a>
							</li>
							<li class="mb-1">
								<a
									id="footer_terms_and_conditions"
									class="ls-1 lh-xl"
									href="/introduce/en/terms-and-conditions"
								>
									Terms & Conditions</a
								>
							</li>
							<li class="mb-1">
								<a id="footer_return_policy" class="ls-1 lh-xl" href="/introduce/en/return-policy">
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
									href="https://forms.office.com/r/wCkX3wvPny"
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
								href="https://forms.office.com/r/zsxC2nkQY4"
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
