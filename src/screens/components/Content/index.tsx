import React, {useEffect} from 'react';
import {FlatList, View} from 'react-native';

import {Loading, Page, Text} from '../../../components';
import {useReddit} from '../../../context';
import {Post as PostData, PostTypes} from '../../../types';
import {Post, ViewMore} from '../../components';
type Props = {
  title: string;
  postType: PostTypes;
  posts: PostData[];
};
const Content = ({postType, title, posts}: Props) => {
  const {loadPosts, loading, selectPost, selectedPost} = useReddit();
  useEffect(() => {
    loadPosts(postType);
  }, [postType]);
  return (
    <>
      <Page>
        <View>
          <Text type="h1">{title}</Text>
        </View>
        <FlatList
          refreshControl={
            <Loading
              onRefresh={() => loadPosts(postType)}
              refreshing={loading}
            />
          }
          refreshing={loading}
          data={posts}
          keyExtractor={e => e.data.url}
          renderItem={({item}) => (
            <Post post={item} onPress={() => selectPost(item)} />
          )}
        />
      </Page>
      <ViewMore post={selectedPost} onClose={() => selectPost(null)} />
    </>
  );
};

export default Content;
