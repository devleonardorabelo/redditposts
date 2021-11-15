import React, {useState} from 'react';
import {FlatList, View} from 'react-native';

import {Loading, Modal, Page, Text} from '../../../components';
import {Post as PostData, PostTypes} from '../../../types';
import {Post, ViewMore} from '../../components';
type Props = {
  title: string;
  postType: PostTypes;
  posts: PostData[];
  loading: boolean;
  loadPosts: () => void;
};
const Content = ({postType, title, loadPosts, loading, posts}: Props) => {
  const [showPost, setShowPost] = useState<PostData | null>(null);
  return (
    <>
      <Page>
        <View>
          <Text type="h1">{title}</Text>
        </View>
        <FlatList
          refreshControl={
            <Loading onRefresh={loadPosts} refreshing={loading} />
          }
          refreshing={loading}
          data={posts}
          keyExtractor={e => e.data.url}
          renderItem={({item}) => (
            <Post post={item} onPress={() => setShowPost(item)} />
          )}
        />
      </Page>
      <ViewMore post={showPost} onClose={() => setShowPost(null)} />
    </>
  );
};

export default Content;
