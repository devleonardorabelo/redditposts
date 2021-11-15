import React from 'react';
import {Image, View} from 'react-native';
import {Text} from '..';
import IMAGES from '../../../assets';
import {Post as PostType} from '../../../types';

import styles from './styles';
type Props = {
  post: PostType;
};
const Post = ({post}: Props) => {
  return (
    <View style={styles.container}>
      {post.data.thumbnail.length > 5 && (
        <Image style={styles.image} source={{uri: post.data.thumbnail}} />
      )}
      <View style={styles.content}>
        <Text>{post.data.title}</Text>
        <View style={styles.user}>
          <Image style={styles.iconImage} source={IMAGES.user} />
          <Text>{post.data.author}</Text>
        </View>
        <View style={styles.about}>
          <View style={styles.icon}>
            <Image style={styles.iconImage} source={IMAGES.grade} />
            <Text>{String(post.data.score)}</Text>
          </View>
          <View style={styles.icon}>
            <Image style={styles.iconImage} source={IMAGES.message} />
            <Text>{String(post.data.num_comments)}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Post;
