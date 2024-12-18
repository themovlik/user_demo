import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import {COLORS, scale} from '../assets/theme/theme';
import {SafeAreaView} from 'react-native-safe-area-context';

// Header Component
const Header = ({title, isLogOut, onBackPress}) => {
  return (
    <SafeAreaView style={{backgroundColor: COLORS.lightGreen}}>
      <StatusBar barStyle="light-content" />
      <View style={styles.header}>
        {onBackPress && (
          <TouchableOpacity style={styles.backButton} onPress={onBackPress}>
            <Text style={styles.backButtonText}>
              {isLogOut ? 'Logout' : 'Back'}
            </Text>
          </TouchableOpacity>
        )}
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: COLORS.lightGreen,
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.lightgray,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: scale(18),
    fontFamily: 'Poppins-Semibold',
    color: COLORS.black,
  },
  backButton: {
    paddingRight: 10,
    paddingVertical: 5,
    position: 'absolute',
    left: 10,
  },
  backButtonText: {
    fontSize: scale(15),
    color: COLORS.red,
  },
});

export default Header;
