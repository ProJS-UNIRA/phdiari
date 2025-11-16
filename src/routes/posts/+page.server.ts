import type { PostMetadata, PostModule } from '$lib/types';
import type { PageServerLoad } from './$types';

export const load = (async () => {
  const allPosts = import.meta.glob<PostModule>('/src/lib/posts/*.md', { eager: true });

  let posts: {
    slug: string;
    metadata: PostMetadata;
  }[] = [];
  
  for (const path in allPosts) {
    const post = allPosts[path];
    const slug = path.split('/').at(-1)?.replace('.md', '');
    
    if (post && typeof post === 'object' && 'metadata' in post && post.metadata.published) {
      posts.push({
        slug: slug ?? '',
        metadata: post.metadata
      });
    }
  }

  // sort posts by date
  posts.sort((a, b) => new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime());

  return {
    posts
  };
}) satisfies PageServerLoad;