import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  COLORS,
  hitSlop,
  scale,
  SIZES,
  verticalScale,
} from '../assets/theme/theme';
import movie from '../assets/icon/movie.png';
import filledStar from '../assets/icon/star_fill.png';
import backIcon from '../assets/icon/backIcon.png';

const DetailScreen = ({navigation, route}) => {
  const {selectedItem} = route.params;

  const onPressGoBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={movie} style={styles.movieIcon} />
      </View>
      <TouchableOpacity
        hitSlop={hitSlop}
        onPress={() => {
          onPressGoBack();
        }}
        style={styles.blackIcon}>
        <Image source={backIcon} style={styles.movieIcon} />
      </TouchableOpacity>
      <View style={styles.mainView}>
        <View style={styles.detailView}>
          <View style={styles.secondImageContainer}>
            <Image
              source={{uri: selectedItem?.poste}}
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
            <Text
              style={
                styles.titleText
              }>{`Director : ${selectedItem?.director}`}</Text>
          </View>
          <View>
            <Text style={styles.detailText}>{selectedItem?.plot}</Text>
          </View>
          <View style={styles.castView}>
            <Text style={styles.titleText}>Cast</Text>
          </View>
          <View style={styles.actorsView}>
            {selectedItem?.actors?.map(i => (
              <View style={styles.castTextView}>
                <Text style={styles.detailText}>{i}</Text>
              </View>
            ))}
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
  blackIcon: {
    width: scale(22),
    height: scale(22),
    // bottom: 40,
    overflow: 'hidden',
    position: 'absolute',
    top: scale(50),
    left: scale(20),
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
    borderWidth: 1,
    borderColor: COLORS.textGray,
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
    marginVertical: scale(20),

    shadowColor: '#00000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 3,
    paddingHorizontal: '15@s',
  },
  castView: {marginTop: scale(15)},
  titleText: {
    fontSize: scale(14),
    marginBottom: verticalScale(8),
    fontFamily: 'Poppins-Bold',
    color: COLORS.black,
  },
  castTextView: {
    padding: scale(8),
    borderWidth: 1,
    borderColor: COLORS.textGray,
    // backgroundColor: COLORS.lightGreen,
    borderRadius: scale(8),
    marginHorizontal: 5,
    marginVertical: 5,
    alignItems: 'center',
  },
  detailText: {
    fontSize: scale(13),
    marginBottom: verticalScale(8),
    fontFamily: 'Poppins-Regular',
    color: COLORS.black,
  },
  actorsView: {flexDirection: 'row', flexWrap: 'wrap'},
});
export default DetailScreen;
