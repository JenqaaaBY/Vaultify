import React from 'react';
import {View, Text} from 'react-native';
import styles from './HomeScreen.styles';

const HomeScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>{'HomeScreen'}</Text>
    </View>
  );
};

export default HomeScreen;
