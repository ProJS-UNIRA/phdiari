<script lang="ts">
  import { page } from '$app/stores';
  // For demo we show static content; in real app you'd load the post by slug.
  const post = {
    title: 'Contoh Artikel: Membangun Kebiasaan Menulis Akademis',
    date: '2025-09-10',
    category: 'Refleksi Riset'
  };
</script>

<section class="max-w-5xl mx-auto px-6 py-12">
  <article class="card p-8 max-w-3xl mx-auto" style="font-family: 'Merriweather', Cambria, Georgia, 'Times New Roman', serif;">
    <header class="mb-6">
      <h1 class="text-3xl font-bold mb-2">{post.title}</h1>
      <div class="text-sm text-[#757575]">{post.date} · {post.category}</div>
    </header>

    <div class="prose prose-lg text-base leading-relaxed">
      <p>Ini adalah contoh paragraf pembuka. Fokus utama pada tampilan ini adalah keterbacaan: lebar konten dibatasi, font serif dipilih untuk kenyamanan membaca, dan jarak baris dibuat lega.</p>

      <h2>Praktik Menulis</h2>
      <p>Menulis secara teratur membantu menyelesaikan tugas akademis besar. Bagi banyak peneliti, menulis 300-500 kata sehari sudah cukup untuk membuat kemajuan signifikan pada disertasi atau laporan penelitian.</p>

      <p>Contoh kode atau blok kutipan dapat ditampilkan dengan jelas menggunakan gaya <code>prose</code> dari Tailwind Typography.</p>
    </div>

    <div class="mt-8 p-4 border-l-4 border-[#E47A53] bg-[#FFF8F5] rounded">
      <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <strong>Merasa terbantu dengan artikel ini?</strong>
          <div class="text-sm text-gray-600">Saya membuka 3 slot mentoring privat bulan ini.</div>
        </div>
        <a href="/services" class="inline-block bg-[#E47A53] text-white px-4 py-2 rounded-md font-medium">Diskusi Kebutuhan Riset Anda</a>
      </div>
    </div>
  </article>
</section>
