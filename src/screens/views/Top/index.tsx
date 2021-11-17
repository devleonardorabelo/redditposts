import React, {useEffect} from 'react';
import {useReddit} from '../../../context';
import {Content} from '../../components';

const Top = () => {
  const {topPosts} = useReddit();

  return <Content postType="top" title="Top" posts={topPosts} />;
};

export default Top;
