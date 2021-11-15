import React, {useEffect} from 'react';
import {useReddit} from '../../../context';
import {Content} from '../../components';

const Top = () => {
  const {loadPosts, loading, topPosts} = useReddit();
  useEffect(() => {
    loadPosts('top');
  }, []);
  return (
    <Content
      postType="top"
      title="Top"
      posts={topPosts}
      loadPosts={() => loadPosts('top')}
      loading={loading}
    />
  );
};

export default Top;
