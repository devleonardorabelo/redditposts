import React, {useEffect} from 'react';
import {FlatList, View} from 'react-native';
import {Loading, Page, Post, Text} from '../../components';
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
          <Loading onRefresh={() => loadPosts('new')} refreshing={loading} />
        }
        refreshing={loading}
        data={newPosts}
        keyExtractor={e => e.data.url}
        renderItem={({item}) => <Post post={item} />}
      />
    </Page>
  );
};

export default New;
