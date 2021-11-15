import React from 'react';
import {Image, View} from 'react-native';
import {Text} from '..';
import {Modal} from '../..';
import IMAGES from '../../../assets';
import {Post} from '../../../types';
import styles from './styles';
type Props = {
  post: Post | null;
  onClose: () => void;
};
const ViewMore = ({post, onClose}: Props) => {
  return (
    <Modal onBackdropPress={onClose} show={!!post}>
      <View style={styles.header}>
        <Text>{post?.data.author}</Text>
      </View>
      {post?.data?.url && post?.data?.url.length > 5 && (
        <Image
          style={styles.image}
          source={{uri: post?.data.url}}
          fadeDuration={10000}
        />
      )}
      <View style={styles.footer}>
        <Text>{post?.data.title}</Text>
        <View style={styles.about}>
          <View style={styles.icon}>
            <Image style={styles.iconImage} source={IMAGES.gradeWhite} />
            <Text>{String(post?.data.score)}</Text>
          </View>
          <View style={styles.icon}>
            <Image style={styles.iconImage} source={IMAGES.messageWhite} />
            <Text>{String(post?.data.num_comments)}</Text>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ViewMore;
