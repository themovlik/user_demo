import AsyncStorage from '@react-native-async-storage/async-storage';

// ==> common functions of get, set, and remove local data

export const getAsyncStorageItem = async key => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value;
  } catch (error) {
    console.log(`Error getting item from AsyncStorage: ${error}`);
    return null;
  }
};

export const setAsyncStorageItem = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    console.log(`Error setting item in AsyncStorage: ${error}`);
  }
};

export const removeAsyncStorageItem = async key => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.log(`Error removing item from AsyncStorage: ${error}`);
  }
};
