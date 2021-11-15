import React from 'react';
import {View} from 'react-native';
import M, {ModalProps} from 'react-native-modal';
import styles from './styles';
type Props = {
  children: React.ReactNode;
  show: boolean;
};
const Modal = ({
  children,
  show = false,
  ...props
}: Props & Partial<ModalProps>) => {
  return (
    <View>
      <M {...props} isVisible={show}>
        <View style={styles.content}>{children}</View>
      </M>
    </View>
  );
};

export default Modal;
