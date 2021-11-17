import React from 'react';
import {useReddit} from '../../../context';
import {Content} from '../../components';

const Popular = () => {
  const {popularPosts} = useReddit();
  return <Content postType="rising" title="Popular" posts={popularPosts} />;
};

export default Popular;
