import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';

export const load = (async ({ params }) => {
  const slug = params.slug;
  const post = await import(`$lib/posts/${slug}.md`);
  if (!post) {
    throw error(404, 'Post not found');
  }

  const { metadata } = post;

  return { slug, metadata };
}) satisfies PageServerLoad;
