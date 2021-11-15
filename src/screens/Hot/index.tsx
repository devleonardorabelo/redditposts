import React, {useEffect} from 'react';
import {FlatList, View} from 'react-native';
import {Loading, Page, Post, Text} from '../../components';
import {useReddit} from '../../context';

const Hot = () => {
  const {hotPosts, loading, loadPosts} = useReddit();
  useEffect(() => {
    loadPosts('hot');
  }, []);
  return (
    <Page>
      <View>
        <Text type="h1">Hot</Text>
      </View>
      <FlatList
        refreshControl={
          <Loading onRefresh={() => loadPosts('hot')} refreshing={loading} />
        }
        refreshing={loading}
        data={hotPosts}
        keyExtractor={e => e.data.url}
        renderItem={({item}) => <Post post={item} />}
      />
    </Page>
  );
};

export default Hot;
