import React from 'react';
import { StyleSheet, View } from 'react-native';
import LottieView from 'lottie-react-native';

import lottieAnimantion from '../assets/load.json';

export function Load() {
  return (
    <View style={styles.container}>
      <LottieView
        style={styles.animation}
        source={lottieAnimantion}
        autoPlay
        loop
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  animation: {
    width: 200,
    height: 200,
    backgroundColor: 'transparent',
  },
});