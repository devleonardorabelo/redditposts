import React, {useEffect} from 'react';
import {useReddit} from '../../../context';
import {Content} from '../../components';

const Popular = () => {
  const {loadPosts, loading, popularPosts} = useReddit();
  useEffect(() => {
    loadPosts('rising');
  }, []);
  return (
    <Content
      postType="rising"
      title="Popular"
      posts={popularPosts}
      loadPosts={() => loadPosts('rising')}
      loading={loading}
    />
  );
};

export default Popular;
