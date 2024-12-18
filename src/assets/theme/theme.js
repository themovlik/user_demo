import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

// height and width scale counting
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

export const scale = size => (width / guidelineBaseWidth) * size;
export const verticalScale = size => (height / guidelineBaseHeight) * size;

// global color
export const COLORS = {
  white: '#FFFFFF',
  lightGreen: '#C7F6C7',
  lightGreen60: '#25db9460',
  black: '#000000',
  gray: '#25282f',
  lightgray: '#CCCCCC',
  red: '#FF0000',
  lightRed: '#FFD6D7',
  skyBlue: '#edf7fc',
  blueGray: '#E9F2FF',
};

export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 20,
  padding: 24,
  margin: 10,

  // font sizes
  hugeTitle: 44,
  bigTitle: 30,
  title: 24,
  smallTitle: 20,
  caption: 13,
  body: 14,
  buttonText: 14,
  smallText: 12,
  inputs: 16,

  // app dimensions
  width,
  height,
};

const appTheme = {COLORS, SIZES};

export default appTheme;