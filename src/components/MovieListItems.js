import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {COLORS, scale, verticalScale} from '../assets/theme/theme';
import filledStar from '../assets/icon/star_fill.png';
import movie from '../assets/icon/movie.png';

const MovieListItems = ({item, onPress}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() => onPress(item)}
      style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={movie} resizeMode="contain" style={styles.movieIcon} />
      </View>
      <View style={styles.detailsContainer}>
        <View>
          <Text style={styles.name}>{`${item?.title} (${item?.year})`}</Text>
        </View>
        <View style={styles.genreView}>
          <Text style={styles.genreName}>{item?.genre?.join(', ')}</Text>
        </View>

        <View style={styles.ratingView}>
          <View>
            <Text style={styles.genreName}>{item?.rating}</Text>
          </View>
          <View style={styles.ratingImage}>
            <Image
              source={filledStar}
              resizeMode="contain"
              style={styles.movieIcon}
            />
          </View>
        </View>
      </View>
    </TouchableOpacity>
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

    shadowColor: '#00000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 3,
    paddingHorizontal: '15@s',
  },
  imageContainer: {
    width: verticalScale(75),
    height: verticalScale(100),
    borderRadius: verticalScale(8),
    backgroundColor: 'gray',
    overflow: 'hidden',
  },
  movieIcon: {height: '100%', width: '100%', resizeMode: 'cover'},

  detailsContainer: {
    flex: 1,
    alignItems: 'flex-start',
    marginLeft: scale(10),
    // backgroundColor: 'red',
    marginVertical: 16,
  },
  genreView: {flexDirection: 'row'},
  name: {
    fontSize: scale(14),
    marginBottom: verticalScale(8),
    fontFamily: 'Poppins-Regular',
    fontWeight: '500',
    color: COLORS.black,
  },
  genreName: {
    fontSize: scale(13),
    marginBottom: verticalScale(8),
    fontFamily: 'Poppins-Regular',

    color: COLORS.black,
    textAlign: 'center',
  },
  ratingView: {
    flexDirection: 'row',
  },
  ratingImage: {
    marginStart: 4,
    alignItems: 'center',
    width: verticalScale(12),
    height: verticalScale(12),
  },
});

export default MovieListItems;
