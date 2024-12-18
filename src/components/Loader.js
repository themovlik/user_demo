import React, {memo} from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {COLORS} from '../assets/theme/theme';

// Loader Component
const Loader = ({size = 'large', color = COLORS.lightGreen, style}) => {
  return (
    <View style={[styles.container, style]}>
      <ActivityIndicator size={size} color={color} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default memo(Loader);
