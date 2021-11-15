import React from 'react';
import {Image} from 'react-native';
type Props = {
  source: any;
};
const Icon = ({source}: Props) => {
  return <Image source={source} />;
};

export default Icon;
