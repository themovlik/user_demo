import React from 'react';
import {StyleSheet, View} from 'react-native';
import {COLORS} from '../assets/theme/theme';

const DetailScreen = ({route}) => {
  const {selectedItem} = route.params;
  return <View style={styles.container}></View>;
};

const styles = StyleSheet.create({
  container: {backgroundColor: COLORS.white, flex: 1},
});
export default DetailScreen;
