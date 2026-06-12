import React from 'react';
import { View, StyleSheet } from 'react-native';
import HomeScreen from '../src/screens/HomeScreen'; 
  return (
    <View style={styles.wrapper}>
      <HomeScreen />
    </View>
  );

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
});
