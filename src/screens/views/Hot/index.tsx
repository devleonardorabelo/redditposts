import React, {useEffect} from 'react';
import {useReddit} from '../../../context';
import {Content} from '../../components';

const Hot = () => {
  const {hotPosts} = useReddit();
  return <Content postType="hot" title="Hot" posts={hotPosts} />;
};

export default Hot;
