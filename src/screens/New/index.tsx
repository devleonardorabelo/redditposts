import React from 'react';
import {TextInput} from 'react-native';
import {Page, Text} from '../../components';
import Post from './components/Post';

const New = () => {
  return (
    <Page>
      <Post />
      <Post />
      <Post />
    </Page>
  );
};

export default New;
