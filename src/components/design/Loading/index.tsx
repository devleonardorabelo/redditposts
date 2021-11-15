import React from 'react';
import {RefreshControl, View} from 'react-native';
import {Text} from '..';
import styles from './styles';
type Props = {
  title?: string;
  onRefresh: () => void;
  refreshing: boolean;
};
const Loading = ({title = 'Loading...', onRefresh, refreshing}: Props) => {
  return (
    <RefreshControl
      refreshing={refreshing}
      tintColor="transparent"
      colors={['transparent']}
      style={{backgroundColor: 'transparent'}}
      onRefresh={onRefresh}>
      <View style={styles.text}>
        <Text>{title}</Text>
      </View>
    </RefreshControl>
  );
};

export default Loading;
