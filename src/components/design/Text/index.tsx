import React from 'react';
import {View, Text as T} from 'react-native';
import styles from './styles';
type Props = {
  children: string;
  type?: 'h1' | 'h2' | 'p';
};
const Text = ({children, type = 'p'}: Props) => {
  switch (type) {
    case 'h1':
      return <T style={styles.h1}>{children}</T>;
    case 'h2':
      return <T style={styles.h2}>{children}</T>;
    default:
      return <T style={styles.p}>{children}</T>;
  }
};
export default Text;
