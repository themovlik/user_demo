import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {COLORS, scale, SIZES, verticalScale} from '../assets/theme/theme';
import movie from '../assets/icon/movie.png';
import filledStar from '../assets/icon/star_fill.png';

const DetailScreen = ({route}) => {
  const {selectedItem} = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={movie} resizeMode="contain" style={styles.movieIcon} />
      </View>
      <View style={styles.mainView}>
        <View style={styles.detailView}>
          <View style={styles.secondImageContainer}>
            <Image
              source={movie}
              resizeMode="contain"
              style={styles.movieIcon}
            />
          </View>

          <View style={styles.detailsContainer}>
            <View>
              <Text
                style={
                  styles.name
                }>{`${selectedItem?.title} (${selectedItem?.year})`}</Text>
            </View>
            <View style={styles.genreView}>
              <Text style={styles.genreName}>
                {selectedItem?.genre?.join(', ')}
              </Text>
            </View>

            <View style={styles.ratingView}>
              <View>
                <Text style={styles.ratingTextStyle}>
                  {selectedItem?.rating}
                </Text>
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
        </View>
        <View style={styles.detailContainer}>
          <View>
            <Text style={styles.detailTe}>{selectedItem?.plot}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {backgroundColor: COLORS.white, flex: 1},
  imageContainer: {
    width: SIZES.width,
    height: SIZES.width / 1,
    // borderRadius: verticalScale(8),
    overflow: 'hidden',
  },
  movieIcon: {height: '100%', width: '100%', resizeMode: 'cover'},
  mainView: {
    position: 'absolute',
    padding: scale(10),
    marginTop: SIZES.width / 2,
    width: '100%',
  },
  detailView: {
    flexDirection: 'row',
    backgroundColor: 'rgba(1, 0, 0, 0.6)',
    alignItems: 'center',
    padding: scale(10),

    borderRadius: verticalScale(10),
  },
  backImgContainer: {
    marginTop: SIZES.width / 2,
    width: scale(12),
    height: scale(12),
    borderRadius: verticalScale(8),
    overflow: 'hidden',
  },
  secondImageContainer: {
    width: SIZES.width / 2.5,
    height: SIZES.width / 2,
    borderRadius: verticalScale(8),
    overflow: 'hidden',
  },
  detailsContainer: {
    flexShrink: 1,
    alignItems: 'flex-start',
    marginLeft: scale(10),
    marginVertical: 16,
  },
  genreView: {flexDirection: 'row'},
  name: {
    fontSize: scale(14),
    marginBottom: verticalScale(8),
    fontFamily: 'Poppins-Regular',
    fontWeight: '500',
    color: COLORS.white,
  },
  genreName: {
    fontSize: scale(13),
    marginBottom: verticalScale(8),
    fontFamily: 'Poppins-Regular',
    fontWeight: '500',

    color: COLORS.white,
    textAlign: 'center',
  },
  ratingView: {
    flexDirection: 'row',
    backgroundColor: COLORS.yellow,
    borderRadius: 20,
    height: scale(30),
    width: scale(70),
    // alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ratingTextStyle: {
    fontSize: scale(14),
    fontFamily: 'Poppins-Regular',
    fontWeight: '500',
    color: COLORS.black,
  },
  ratingImage: {
    marginStart: 4,
    alignItems: 'center',
    width: verticalScale(12),
    height: verticalScale(12),
  },
  detailContainer: {
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
});
export default DetailScreen;
