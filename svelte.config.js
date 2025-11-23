import { mdsvex } from 'mdsvex';
import * as remarkMathImport from 'remark-math';
import * as rehypeKatexImport from 'rehype-katex';
import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const remarkMath = remarkMathImport.default ?? remarkMathImport;
const rehypeKatex = rehypeKatexImport.default ?? rehypeKatexImport;

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: [
		vitePreprocess(),
		mdsvex({
			extensions: ['.md', '.svx'],
			remarkPlugins: [remarkMath],
			rehypePlugins: [rehypeKatex]
		})
	],
	kit: { adapter: adapter() },
	extensions: ['.svelte', '.svx', '.md']
};

export default config;
