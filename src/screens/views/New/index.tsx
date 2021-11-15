import React, {useEffect} from 'react';
import {useReddit} from '../../../context';
import {Content} from '../../components';

const New = () => {
  const {loadPosts, loading, newPosts} = useReddit();
  useEffect(() => {
    loadPosts('new');
  }, []);
  return (
    <Content
      postType="new"
      title="New"
      posts={newPosts}
      loadPosts={() => loadPosts('new')}
      loading={loading}
    />
  );
};

export default New;
