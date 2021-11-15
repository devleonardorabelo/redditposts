import React, {useRef} from 'react';
import {
  ScrollView,
  SafeAreaView,
  Platform,
  KeyboardAvoidingView,
  View,
  StatusBar,
} from 'react-native';
import styles from './styles';
type Props = {
  children: React.ReactNode;
  scrolled?: boolean;
};
const Page = ({children, scrolled}: Props) => {
  const scrollRef: any = useRef(null);
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.container}>
        {scrolled ? (
          <KeyboardAvoidingView
            style={styles.keyboardContainer}
            keyboardVerticalOffset={8}
            behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
            <ScrollView ref={scrollRef} style={styles.content}>
              {children}
            </ScrollView>
          </KeyboardAvoidingView>
        ) : (
          <View style={styles.content}>{children}</View>
        )}
      </SafeAreaView>
    </View>
  );
};

export default Page;
