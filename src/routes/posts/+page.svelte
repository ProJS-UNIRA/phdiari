<script lang="ts">
  import type { PageData } from './$types';

  let { data }: { data: PageData } = $props();
  let query = $state('');
  let visibleCount = $state(10);

	function formatDate(dateStr: string) {
		return new Date(dateStr).toLocaleDateString('id-ID', {
			day: '2-digit',
			month: 'short',
			year: 'numeric'
		});
	}

  const matchesQuery = (value: string) => value.toLocaleLowerCase().includes(query.trim().toLocaleLowerCase());

  let filteredPosts = $derived(
    !query.trim()
      ? data.posts
      : data.posts.filter(post => {
        return matchesQuery(post.metadata.title) || matchesQuery(post.metadata.category) || matchesQuery(post.metadata.description);
      })
  );

  $effect(() => {
    // reset pagination whenever query changes
    void query; // depend on query
    visibleCount = 10;
  });
</script>

<section class="space-y-8">
	<header class="flex flex-col gap-2 justify-center items-center">
		<p class="eyebrow mb-3">Catatan</p>
		<h1 class="text-3xl md:text-4xl font-bold leading-snug mb-3">Semua Catatan Harian</h1>
		<p class="text-sm md:text-base text-gray-700 text-center">
			Kumpulan catatan riset, koding, dan perjalanan doktoral yang saya tulis secara berkala. Gunakan
			pencarian di bawah ini untuk menemukan topik yang relevan dengan kebutuhan riset Anda.
		</p>
	</header>

	<div class="flex flex-col md:flex-row md:items-center gap-4">
		<label class="flex-1">
			<span class="block text-xl md:text-3xl mb-2 coffee-signature">
				Pencarian
			</span>
			<input
				bind:value={query}
				type="search"
        name="search"
				placeholder="Cari berdasarkan judul, kategori, atau kata kunci ..."
				class="w-full rounded-full border border-orange-100/70 bg-white px-4 py-2.5 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4A9A94] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F8F5F0]"
			/>
		</label>
	</div>

	<section class="space-y-4">
		<div class="flex items-center justify-between gap-2">
			<h2 class="text-xl md:text-3xl mb-2 coffee-signature">
				Daftar Catatan
			</h2>
			{#if query.trim()}
				<p class="text-xs text-gray-500">
					Menampilkan {filteredPosts.length} dari {data.posts.length} catatan untuk kata kunci
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
				{#each filteredPosts.slice(0, visibleCount) as post}
					<a
						href={`/posts/${post.slug}`}
						class="card card-hover block p-6 no-underline focus-visible:outline focus-visible:outline-[#294644]"
					>
						<div class="text-xs font-semibold text-gray-500 uppercase tracking-[0.16em] mb-2">
							{formatDate(post.metadata.date)} · {post.metadata.category}
						</div>
						<h3 class="text-[1.05rem] font-semibold leading-snug text-[#008C86] mb-2">
							{post.metadata.title}
						</h3>
						<p class="text-sm leading-relaxed text-gray-700">
							{post.metadata.description}
						</p>
					</a>
				{/each}
			</div>

			{#if filteredPosts.length > visibleCount}
				<div class="mt-4 flex justify-center">
					<button
						type="button"
						class="px-4 py-2 text-sm font-semibold text-[#008C86] hover:text-[#006b66]"
						onclick={() => (visibleCount += 10)}
					>
						Muat lebih banyak
					</button>
				</div>
			{/if}
		{/if}
	</section>

	<!-- <section class="pt-4 border-t border-orange-100/70">
		<h2 class="text-xl md:text-3xl mb-3 coffee-signature">
			Catatan Terbaru
		</h2>
		<div class="flex flex-col gap-2 text-sm text-gray-700">
			{#each data.posts.slice(0, 3) as post}
				<a
					href={`/posts/${post.slug}`}
					class="flex items-baseline gap-2 no-underline text-[#294644] hover:text-[#008C86]"
				>
					<span class="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-gray-400">
						{formatDate(post.metadata.date)}
					</span>
					<span class="truncate">{post.metadata.title}</span>
				</a>
			{/each}
		</div>
	</section> -->
</section>

