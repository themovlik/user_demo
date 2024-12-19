import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS, scale } from '../assets/theme/theme';

// Header Component
const Header = ({ title, isLogOut, onBackPress }) => {
  return (
    <SafeAreaView style={styles.headerContainer}>
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
  headerContainer: {
    backgroundColor: COLORS.lightGreen,
    height: scale(45),
    justifyContent: 'center',
  },
  header: {
    backgroundColor: COLORS.lightGreen,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    height: scale(25),
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
    fontFamily: 'Poppins-Semibold',
  },
});

export default Header;
