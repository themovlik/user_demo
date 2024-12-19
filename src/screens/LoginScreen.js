import React, { memo, useEffect, useState } from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Input from '../components/Input';
import Loader from '../components/Loader';
import {
  getAsyncStorageItem,
  setAsyncStorageItem,
} from '../utils/localStore/localStorage';
import { COLORS, scale, verticalScale } from '../assets/theme/theme';

const LoginScreen = ({ navigation }) => {
  // loginState
  const [loginState, setLoginState] = useState({
    email: 'demo@gmail.com',
    password: '123456',
    emailError: null,
    passwordError: null,
    loading: true,
  });

  // Fetch userInfo from local storage
  useEffect(() => {
    const fetchCredentials = async () => {
      const storedEmail = await getAsyncStorageItem('USERINFO');
      if (storedEmail) {
        navigation.replace('MainScreen');
      } else {
        setLoginState({ ...loginState, loading: false });
      }
    };
    fetchCredentials();
  }, []);

  // handle OnChangeEmail Input
  const handleEmailChange = text => {
    setLoginState({ ...loginState, email: text, emailError: null });
  };

  // handle OnChangePassword Input
  const handlePasswordChange = text => {
    setLoginState({ ...loginState, password: text, passwordError: null });
  };

  // handle Login Button
  const handleLoginPress = () => {
    const { email, password } = loginState;
    const isValid = {
      email: email.toLowerCase() === 'demo@gmail.com',
      password: password === '123456',
    };
    if (isValid.email && isValid.password) {
      navigation.replace('MainScreen');
      setAsyncStorageItem('USERINFO', email);
      setLoginState({
        email: '',
        password: '',
        emailError: null,
        passwordError: null,
      });
    } else {
      setLoginState({
        ...loginState,
        emailError: isValid.email ? null : 'Invalid email',
        passwordError: isValid.password ? null : 'Invalid password',
      });
    }
  };

  const { email, password, emailError, passwordError } = loginState;

  return (
    <View style={styles.container}>
      {loginState.loading ? (
        <Loader />
      ) : (
        <>
          <View style={styles.titleView}>
            <Text style={styles.title}>Login</Text>
          </View>
          <Input
            title={'Email'}
            value={email}
            onChangeText={handleEmailChange}
            placeholder="Email"
            keyboardType="email-address"
            errorMessage={emailError}
          />
          <Input
            title={'Password'}
            value={password}
            onChangeText={handlePasswordChange}
            placeholder="Password"
            secureTextEntry
            errorMessage={passwordError}
          />
          <TouchableOpacity style={styles.button} onPress={handleLoginPress}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleView: { marginBottom: verticalScale(50) },
  title: {
    fontFamily: 'Poppins-Regular',
    fontSize: scale(24),
    fontWeight: 'bold',
    color: COLORS.gray,
  },
  button: {
    backgroundColor: COLORS.lightGreen,
    padding: scale(12),
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
    marginTop: verticalScale(16),
  },
  buttonText: {
    fontFamily: 'Poppins-Regular',
    color: COLORS.black,
    fontSize: scale(18),
  },
});

export default memo(LoginScreen);
