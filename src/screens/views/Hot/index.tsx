import React, {useEffect} from 'react';
import {useReddit} from '../../../context';
import {Content} from '../../components';

const Hot = () => {
  const {loadPosts, loading, hotPosts} = useReddit();
  useEffect(() => {
    loadPosts('hot');
  }, []);
  return (
    <Content
      postType="hot"
      title="Hot"
      posts={hotPosts}
      loadPosts={() => loadPosts('hot')}
      loading={loading}
    />
  );
};

export default Hot;
