export interface Post {
  data: {
    num_comments: number;
    score: number;
    author: string;
    thumbnail: string;
    title: string;
    url: string;
    permalink: string;
  };
}
export type PostTypes = 'hot' | 'new' | 'rising' | 'top';
