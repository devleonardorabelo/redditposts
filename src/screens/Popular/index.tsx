import React, {useEffect} from 'react';
import {FlatList, View} from 'react-native';
import {Loading, Page, Post, Text} from '../../components';
import {useReddit} from '../../context';

const Popular = () => {
  const {popularPosts, loading, loadPosts} = useReddit();
  useEffect(() => {
    loadPosts('rising');
  }, []);
  return (
    <Page>
      <View>
        <Text type="h1">Popular</Text>
      </View>
      <FlatList
        refreshControl={
          <Loading onRefresh={() => loadPosts('rising')} refreshing={loading} />
        }
        refreshing={loading}
        data={popularPosts}
        keyExtractor={e => e.data.url}
        renderItem={({item}) => <Post post={item} />}
      />
    </Page>
  );
};

export default Popular;
