import React, {forwardRef, useImperativeHandle, useState} from 'react';
import {StyleSheet, View, ActivityIndicator} from 'react-native';
import {Colors} from '../utils/AppConstant';
import LottieView from 'lottie-react-native';
import AppLoader from '../assets/animation/app_loader.json';

const Loader = forwardRef((props, ref) => {
  const [loading, setLoading] = useState(false);

  // Forwarding the ref to the outermost View
  useImperativeHandle(ref, () => ({
    toggleLoader: show => setLoading(show),
  }));

  if (!loading) return null;

  return (
    <View style={styles.vwMain}>
      <LottieView source={AppLoader} autoPlay loop style={styles.appLoader} />
      {/* <ActivityIndicator size="large" color={Colors.darkTheme.primary} /> */}
    </View>
  );
});

export default Loader;

const styles = StyleSheet.create({
  vwMain: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999,
  },

  appLoader: {
    width: '100%',
    height: '100%',
  },
});
