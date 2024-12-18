import React from 'react';
import {StyleSheet, View} from 'react-native';
import Header from '../components/Header';
import MovieList from '../components/MovieList';
import {removeAsyncStorageItem} from '../utils/localStore/localStorage';

const MainScreen = ({navigation}) => {
  return (
    <View>
      <Header
        title="Movie List"
        isLogOut={true}
        onBackPress={() => {
          removeAsyncStorageItem('USERINFO');
          navigation.replace('LoginScreen');
        }}
      />
      <MovieList />
    </View>
  );
};

export default MainScreen;
