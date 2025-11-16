<script lang="ts">
  import type { PageData } from './$types';
  import { onMount } from 'svelte';

  let { data }: { data: PageData } = $props();
  let Content = $state<any>(null);

  onMount(async () => {
    const module = await import(`$lib/posts/${data.slug}.md`);
    Content = module.default;
  });
</script>

<section class="container mx-auto px-6 py-12">
  <article class="card mx-auto p-8 md:p-9 shadow-md bg-white rounded">
    <header class="mb-5">
      <h1 class="text-3xl font-bold leading-snug text-[#008C86] mb-3">
        {data.metadata.title}
      </h1>
      <div class="space-y-1 text-sm text-gray-500">
        <p>
          <strong class="font-semibold text-gray-600">Tanggal:</strong>
          <span class="ml-1">{data.metadata.date}</span>
        </p>
        <p>
          <strong class="font-semibold text-gray-600">Kategori:</strong>
          <span class="ml-1">{data.metadata.category}</span>
        </p>
      </div>
    </header>

    <div class="text-[0.95rem] leading-relaxed text-gray-800 space-y-3">
      <div class="prose prose-neutral max-w-none">
        {#if Content}
          <Content />
        {:else}
          <p class="text-sm text-gray-500">Memuat konten...</p>
        {/if}
      </div>

      <!-- <div class="mt-6 rounded-md bg-[#111827] text-gray-100 text-xs font-mono p-4 leading-relaxed overflow-x-auto">
        <span class="block opacity-80 mb-1">// Contoh snippet output eksperimen</span>
        <span>Loren 130x35681 (len=512)</span><br />
        <span>Context: 4.3523s · acc: 0.9486</span><br />
        <span>device: nvidia-a100 · lr: 6e-5 · steps: 4201</span><br />
        <span>checkpoint: 3b1c10ed (epoch=4, iter=12810)</span>
      </div>

      <div class="mt-7">
        <a href="/services" class="inline-block bg-[#E47A53] text-white px-4 py-2 rounded-md font-medium">
          Diskusi Kebutuhan Riset Anda
        </a>
      </div> -->
    </div>
  </article>
</section>
