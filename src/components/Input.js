import React, {memo} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {COLORS, scale, verticalScale} from '../assets/theme/theme';

const Input = ({
  placeholder,
  secureTextEntry,
  value,
  onChangeText,
  keyboardType,
  errorMessage,
}) => {
  // Input Component
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={COLORS.lightgray}
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
      />
      {errorMessage ? (
        <Text style={styles.error}>{errorMessage}</Text>
      ) : (
        <Text style={styles.error} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    width: '80%',
    marginBottom: verticalScale(12),
  },
  input: {
    fontFamily: 'Poppins-Regular',
    borderWidth: 1,
    borderColor: COLORS.lightgray,
    borderRadius: 5,
    padding: scale(8),
    fontSize: scale(16),
    color: COLORS.gray,
  },
  error: {
    fontFamily: 'Poppins-Regular',
    color: COLORS.red,
    marginTop: verticalScale(5),
  },
});

export default memo(Input);
