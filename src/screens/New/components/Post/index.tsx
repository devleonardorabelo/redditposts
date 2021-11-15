import React from 'react';
import {Image, View} from 'react-native';
import IMAGES from '../../../../assets';
import {Text} from '../../../../components';
import styles from './styles';

const Post = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={IMAGES.hot} />
      <View style={styles.content}>
        <Text>Lorem ipsum</Text>
        <View style={styles.about}>
          <View style={styles.icon}>
            <Image style={styles.iconImage} source={IMAGES.user} />
            <Text>user</Text>
          </View>
          <View style={styles.icon}>
            <Image style={styles.iconImage} source={IMAGES.grade} />
            <Text>122</Text>
          </View>
          <View style={styles.icon}>
            <Image style={styles.iconImage} source={IMAGES.message} />
            <Text>42</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Post;
