import {Dimensions} from 'react-native';

const DesignHeight = 667;
const DesignWidth = 375;
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const vw = (width: any) => {
  // const elemWidth = parseFloat(widthPercent);
  // return PixelRatio.roundToNearestPixel(screenWidth * elemWidth / 100);
  const percent = (width / DesignWidth) * 100;
  return (percent / 100) * screenWidth;
};

const vh = (height: any) => {
  // const elemHeight = parseFloat(heightPercent);
  // return PixelRatio.roundToNearestPixel(screenHeight * elemHeight / 100);
  const percent = (height / DesignHeight) * 100;
  return (percent / 100) * screenHeight;
};

export {DesignHeight, DesignWidth, vh, vw};
