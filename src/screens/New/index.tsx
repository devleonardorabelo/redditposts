import React, {useEffect} from 'react';
import {FlatList, RefreshControl, View} from 'react-native';
import {Page, Post, Text} from '../../components';
import {useReddit} from '../../context';

const New = () => {
  const {newPosts, loading, loadPosts} = useReddit();
  useEffect(() => {
    loadPosts('new');
  }, []);
  return (
    <Page>
      <View>
        <Text type="h1">New</Text>
      </View>
      <FlatList
        refreshControl={
          <RefreshControl
            refreshing={loading}
            onRefresh={() => loadPosts('new')}
          />
        }
        data={newPosts}
        keyExtractor={e => e.data.url}
        renderItem={({item}) => <Post post={item} />}
      />
    </Page>
  );
};

export default New;
