import React, {useEffect} from 'react';
import {FlatList, RefreshControl, View} from 'react-native';
import {Page, Post, Text} from '../../components';
import {useReddit} from '../../context';

const Top = () => {
  const {topPosts, loading, loadPosts} = useReddit();
  useEffect(() => {
    loadPosts('top');
  }, []);
  return (
    <Page>
      <View>
        <Text type="h1">Top</Text>
      </View>
      <FlatList
        refreshControl={
          <RefreshControl
            refreshing={loading}
            onRefresh={() => loadPosts('top')}
          />
        }
        data={topPosts}
        keyExtractor={e => e.data.url}
        renderItem={({item}) => <Post post={item} />}
      />
    </Page>
  );
};

export default Top;
