import React, {useRef} from 'react';
import {
  ScrollView,
  SafeAreaView,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';
import styles from './styles';
type Props = {
  children: React.ReactNode;
};
const Page = ({children}: Props) => {
  const scrollRef: any = useRef(null);
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.keyboardContainer}
        keyboardVerticalOffset={8}
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
        <ScrollView ref={scrollRef} style={styles.content}>
          {children}
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Page;
