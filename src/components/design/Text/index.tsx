import React from 'react';
import {View, Text as T} from 'react-native';
type Props = {
  children: string;
};
const Text = ({children}: Props) => {
  return <T>{children}</T>;
};

export default Text;
