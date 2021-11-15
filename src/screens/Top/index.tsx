import React, {useEffect, useState} from 'react';
import {FlatList, Image, RefreshControl, View} from 'react-native';

import {Loading, Modal, Page, Post, Text, ViewMore} from '../../components';
import {useReddit} from '../../context';
import {Post as PostType} from '../../types';

const Top = () => {
  const {topPosts, loading, loadPosts} = useReddit();
  const [showPost, setShowPost] = useState<PostType | null>(null);
  useEffect(() => {
    loadPosts('top');
  }, []);
  return (
    <>
      <Page>
        <View>
          <Text type="h1">Top</Text>
        </View>
        <FlatList
          refreshControl={
            <Loading onRefresh={() => loadPosts('top')} refreshing={loading} />
          }
          refreshing={loading}
          data={topPosts}
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

export default Top;
