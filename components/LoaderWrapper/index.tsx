import React from 'react'
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { green } from '../../colors';

const LoaderWrapper = () => {
  return(
    <View style={styles.loaderWrapper}>
      <ActivityIndicator color={green} size="large" />
    </View>
  )
}

const styles = StyleSheet.create({
  loaderWrapper: {
    height: '80%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default LoaderWrapper;
