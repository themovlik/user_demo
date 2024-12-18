import React, {useEffect} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {COLORS, scale} from '../assets/theme/theme';
import {fetchMovieList} from '../helper/MovieDetailList';
import {setMovieList} from '../utils/redux/store/dataSlice';
import MovieListItems from './MovieListItems';

const MovieList = ({navigation}) => {
  const dispatch = useDispatch();
  const {isMovieList} = useSelector(state => state.data);

  useEffect(() => {
    getMovieList();
  }, []);

  // fetch MovieList from API & set in to redux
  const getMovieList = async () => {
    const data = await fetchMovieList();
    dispatch(setMovieList(data?.body));
  };

  // handle onPress of movie Item
  const handlePress = movie => {};

  // renderItem of movie list
  const renderMovieItem = item => {
    return <MovieListItems item={item} onPress={handlePress} />;
  };

  return (
    <View style={{}}>
      <FlatList
        data={isMovieList}
        keyExtractor={item => item?.id.toString()}
        renderItem={renderMovieItem}
        style={styles.container}
        //   onEndReached={onEndReached || handleEndReached}
        onEndReachedThreshold={0.5}
        // ListFooterComponent={!true && <Loader size="small" />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {height: '100%'},
  errorContainer: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    fontFamily: 'Poppins-Regular',
    fontSize: scale(14),
    color: COLORS.red,
  },
  loaderContainer: {
    height: '90%',
    alignSelf: 'center',
  },
});

export default MovieList;