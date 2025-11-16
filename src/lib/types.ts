export type PostMetadata = {
  title: string;
  date: string;
  category: string;
  excerpt: string;
  published: boolean;
  description: string;
};

export type PostModule = {
  metadata: PostMetadata;
};

