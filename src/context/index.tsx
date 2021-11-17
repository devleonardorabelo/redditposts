import React, {useContext, createContext, useState, useCallback} from 'react';
import request from '../services';
import {Post, PostTypes} from '../types';

interface RedditContextData {
  newPosts: Post[];
  topPosts: Post[];
  popularPosts: Post[];
  hotPosts: Post[];
  loadPosts: (type: PostTypes) => void;
  loading: boolean;
  selectedPost: Post | null;
  selectPost: (post: Post | null) => void;
}

export const RedditContext = createContext<RedditContextData>(
  {} as RedditContextData,
);

type ContextProps = {
  children: React.ReactNode;
};

const RedditProvider = ({children}: ContextProps) => {
  const [newPosts, setNewPosts] = useState<Post[]>([]);
  const [topPosts, setTopPosts] = useState<Post[]>([]);
  const [popularPosts, setPopularPosts] = useState<Post[]>([]);
  const [hotPosts, setHotPosts] = useState<Post[]>([]);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  const [loading, setLoading] = useState(true);

  const handlePostTypes = useCallback((type: PostTypes, posts: Post[]) => {
    switch (type) {
      case 'new':
        setNewPosts(posts);
        break;
      case 'top':
        setTopPosts(posts);
        break;
      case 'rising':
        setPopularPosts(posts);
        break;
      default:
        setHotPosts(posts);
        break;
    }
  }, []);

  const selectPost = useCallback(
    (post: Post | null) => setSelectedPost(post),
    [],
  );

  const loadPosts = useCallback(async (type: PostTypes) => {
    setLoading(true);

    const response = await request({
      url: `https://api.reddit.com/r/pics/${type}`,
      method: 'GET',
    });
    if (response.data?.error) {
      return;
    } else {
      handlePostTypes(type, response.data.children);
    }

    setLoading(false);
  }, []);

  return (
    <RedditContext.Provider
      value={{
        newPosts,
        topPosts,
        popularPosts,
        hotPosts,
        loadPosts,
        loading,
        selectPost,
        selectedPost,
      }}>
      {children}
    </RedditContext.Provider>
  );
};

const useReddit = () => useContext(RedditContext);

export {RedditProvider, useReddit};
