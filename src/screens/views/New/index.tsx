import React from 'react';
import {useReddit} from '../../../context';
import {Content} from '../../components';

const New = () => {
  const {newPosts} = useReddit();
  return <Content postType="new" title="New" posts={newPosts} />;
};

export default New;
