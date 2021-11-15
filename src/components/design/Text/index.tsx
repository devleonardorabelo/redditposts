import React from 'react';
import {View, Text as T} from 'react-native';
import styles from './styles';
type Props = {
  children: string;
};
const Text = ({children}: Props) => {
  return <T style={styles.text}>{children}</T>;
};

export default Text;
