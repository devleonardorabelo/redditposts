import React from 'react';
import {ScrollView, View, SafeAreaView, Text} from 'react-native';
import styles from './styles';
type Props = {
  children: React.ReactNode;
};
const Page = ({children}: Props) => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <ScrollView>{children}</ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default Page;
