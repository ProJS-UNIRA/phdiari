<script lang="ts">
	const posts = [
		{ title: 'Membangun Kebiasaan Menulis Akademis', date: '2025-09-10', slug: 'kebiasaan-menulis', excerpt: 'Tips dan rutinitas harian untuk menyelesaikan disertasi dan menjaga produktivitas riset.' },
		{ title: 'Eksperimen Reproducible dengan SvelteKit', date: '2025-08-02', slug: 'reproducible-sveltekit', excerpt: 'Panduan singkat untuk membuat eksperimen yang dapat diulang menggunakan SvelteKit dan tool sederhana.' },
		{ title: 'Catatan Teknikal: Optimasi Query Database', date: '2025-07-15', slug: 'optimasi-query', excerpt: 'Beberapa trik untuk mempercepat query pada dataset besar, dengan contoh kode dan pengukuran.' }
	];

	function formatDate(dateStr: string) {
		return new Date(dateStr).toLocaleDateString('id-ID', {
			day: '2-digit', month: 'short', year: 'numeric'
		});
	}
</script>

<svelte:head>
	<title>PhDiari — Catatan Harian Riset & Koding</title>
	<meta name="description" content="Catatan harian saya tentang riset, koding, dan suka-duka perjalanan doktoral." />
	<meta name="keywords" content="PhDiari, catatan harian, riset, koding, doktoral, PhDiari blog, PhDiari journal" />
</svelte:head>

<section class="relative isolate flex items-center justify-center mx-auto text-center pt-8 md:pt-10 pb-10 md:pb-12">
	<div class="hero-blob" aria-hidden="true"></div>
	<div class="relative max-w-3xl fade-in-up">
		<p class="eyebrow mb-4">Catatan Harian • Riset & Koding</p>
		<h1 class="text-4xl md:text-5xl font-bold leading-tight mb-4">
			Selamat datang di PhDiari.
		</h1>
		<p class="text-base md:text-lg text-gray-700 mb-7 max-w-2xl">
			Halo! Saya seorang dosen informatika yang juga sedang 'berjuang' di S3. PhDairi ini adalah jurnal pribadi saya, tempat saya berbagi cerita dan insight seputar riset, koding, dan suka-duka perjalanan doktoral.
		</p>
		<a
			href="https://trakteer.id/phdiari"
			target="_blank"
			rel="noreferrer"
			class="btn inline-flex items-center gap-2"
		>
			<img
				src="https://trakteer.id/images/mix/coffee.png"
				alt="Traktir saya secangkir kopi"
				class="h-6 w-6"
			/>
			<span class="font-normal text-xl coffee-signature">Traktir kopi biar kuat revisi</span>
		</a>
	</div>
</section>

<section class="pb-10 md:pb-12">
	<h2 class="text-xl md:text-3xl mb-6 coffee-signature">Catatan Terbaru</h2>
	<div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-7">
		{#each posts as post}
			<a
				href={`/posts/${post.slug}`}
				class="card card-hover block p-6 no-underline focus-visible:outline focus-visible:outline-[#294644]"
			>
				<h3 class="text-[1.05rem] font-semibold leading-snug text-[#008C86]">{post.title}</h3>
				<div class="mt-2 text-xs font-semibold text-gray-500 uppercase tracking-[0.12em]">
					{formatDate(post.date)}
				</div>
				<p class="mt-4 text-sm leading-relaxed text-gray-700">{post.excerpt}</p>
			</a>
		{/each}
	</div>
</section>
