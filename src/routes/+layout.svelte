<script lang="ts">
	import '../app.css';
	
	let { children } = $props();
</script>


<div class="min-h-screen flex flex-col">
	<header class="pt-8">
		<div class="max-w-5xl mx-auto px-6 flex items-center justify-between">
			<a href="/" class="flex items-center gap-3">
				<img src="/img/logo.png" alt="PhDiari" class="h-16" />
				<img src="/img/logo-text.png" alt="PhDiari" class="h-8">
			</a>
			<nav class="flex items-center gap-8 font-serif text-3xl">
				<a href="/" class="nav-link nav-link--active">Beranda</a>
				<a href="/posts" class="nav-link text-[#5f5a54]">Catatan</a>
				<a href="/about" class="nav-link text-[#5f5a54]">Tentang Saya</a>
			</nav>
		</div>
	</header>

	<main class="flex-1">
		<div class="max-w-5xl mx-auto px-6 py-12 md:py-16">
			{@render children?.()}
		</div>
	</main>

	<footer class="mt-4 border-t border-orange-100/70">
		<div class="max-w-5xl mx-auto px-6 py-6 text-xs text-gray-500 uppercase">
			<strong>&copy; {new Date().getFullYear()} PhDiari</strong> — Catatan Harian Cendekia
		</div>
	</footer>
</div>