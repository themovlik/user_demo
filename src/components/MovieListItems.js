import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {scale} from '../assets/theme/theme';

const MovieListItems = ({item, onPress}) => {
  return (
    <View style={styles.container}>
      <View style={styles.detailsContainer}>
        <Text style={styles.name}>{'item?.title'}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: scale(16),
    borderRadius: 8,
    marginHorizontal: 16,
    marginVertical: 8,
    elevation: 2,
  },
});

export default MovieListItems;
