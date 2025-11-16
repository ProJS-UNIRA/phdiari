
<script lang="ts">
	const allPosts = [
		{
			title: 'Membangun Kebiasaan Menulis Akademis',
			date: '2025-09-10',
			category: 'Disertasi & Produktivitas',
			slug: 'kebiasaan-menulis',
			excerpt:
				'Tips praktis menjaga ritme menulis disertasi tanpa mengorbankan pekerjaan utama dan kehidupan pribadi.'
		},
		{
			title: 'Eksperimen Reproducible dengan SvelteKit',
			date: '2025-08-02',
			category: 'Eksperimen & Tooling',
			slug: 'reproducible-sveltekit',
			excerpt:
				'Mencatat rancangan eksperimen yang dapat diulang menggunakan SvelteKit dan tool sederhana di sekitar kita.'
		},
		{
			title: 'Catatan Teknikal: Optimasi Query Database',
			date: '2025-07-15',
			category: 'Data & Infrastruktur',
			slug: 'optimasi-query',
			excerpt:
				'Beberapa trik kecil namun berdampak besar untuk mempercepat query pada dataset yang kian membesar.'
		}
	];

	let query = '';

	function formatDate(dateStr: string) {
		return new Date(dateStr).toLocaleDateString('id-ID', {
			day: '2-digit',
			month: 'short',
			year: 'numeric'
		});
	}

	const matchesQuery = (value: string) =>
		value.toLowerCase().includes(query.trim().toLowerCase());

	$: filteredPosts = allPosts.filter(
		(post) =>
			!query.trim() ||
			matchesQuery(post.title) ||
			matchesQuery(post.excerpt) ||
			matchesQuery(post.category)
	);
</script>

<section class="space-y-8">
	<header class="max-w-3xl">
		<p class="eyebrow mb-3">Catatan</p>
		<h1 class="text-3xl md:text-4xl font-bold leading-snug mb-3">Semua Catatan Harian</h1>
		<p class="text-sm md:text-base text-gray-700">
			Kumpulan catatan riset, koding, dan perjalanan doktoral yang saya tulis secara berkala. Gunakan
			pencarian di bawah ini untuk menemukan topik yang relevan dengan kebutuhan riset Anda.
		</p>
	</header>

	<div class="flex flex-col md:flex-row md:items-center gap-4">
		<label class="flex-1">
			<span class="block text-xs font-semibold tracking-[0.16em] uppercase text-gray-500 mb-2">
				Pencarian
			</span>
			<input
				bind:value={query}
				type="search"
				placeholder="Cari berdasarkan judul, kategori, atau kata kunci ..."
				class="w-full rounded-full border border-orange-100/70 bg-white px-4 py-2.5 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4A9A94] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F8F5F0]"
			/>
		</label>
	</div>

	<section class="space-y-4">
		<div class="flex items-center justify-between gap-2">
			<h2 class="text-base font-semibold tracking-[0.14em] uppercase text-gray-500">
				Daftar Catatan
			</h2>
			{#if query.trim()}
				<p class="text-xs text-gray-500">
					Menampilkan {filteredPosts.length} dari {allPosts.length} catatan untuk kata kunci
					<strong>"{query.trim()}"</strong>
				</p>
			{/if}
		</div>

		{#if filteredPosts.length === 0}
			<p class="text-sm text-gray-600 italic">
				Belum ada catatan yang cocok dengan kata kunci tersebut.
			</p>
		{:else}
			<div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-7">
				{#each filteredPosts as post}
					<a
						href={`/posts/${post.slug}`}
						class="card card-hover block p-6 no-underline focus-visible:outline focus-visible:outline-[#294644]"
					>
						<div class="text-xs font-semibold text-gray-500 uppercase tracking-[0.16em] mb-2">
							{formatDate(post.date)} · {post.category}
						</div>
						<h3 class="text-[1.05rem] font-semibold leading-snug text-[#008C86] mb-2">
							{post.title}
						</h3>
						<p class="text-sm leading-relaxed text-gray-700">
							{post.excerpt}
						</p>
					</a>
				{/each}
			</div>
		{/if}
	</section>

	<section class="pt-4 border-t border-orange-100/70">
		<h2 class="text-xs font-semibold tracking-[0.16em] uppercase text-gray-500 mb-3">
			Catatan Terbaru
		</h2>
		<div class="flex flex-col gap-2 text-sm text-gray-700">
			{#each allPosts.slice(0, 3) as post}
				<a
					href={`/posts/${post.slug}`}
					class="flex items-baseline gap-2 no-underline text-[#294644] hover:text-[#008C86]"
				>
					<span class="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-gray-400">
						{formatDate(post.date)}
					</span>
					<span class="truncate">{post.title}</span>
				</a>
			{/each}
		</div>
	</section>
</section>

