const themeColors = {
  // Primary
  purple1: '#4C095D',
  purple2: '#600B76',
  purple3: '#730D8C',
  purple4: '#9439AB',
  purple5: '#7D14FD',

  // Secondary
  blue1: '#3424FF',
  blue2: '#3821DF',
  blue3: '#5547FF',
  blue4: '#695EFF',

  // Tertiary
  yelow1: '#FFD006',
  yelow2: '#FFD72E',
  yelow3: '#FFDF58',
  yelow4: '#FFE57C',

  // Text
  text1: '#19171A',
  text2: '#7B7583',
  text3: '#B9B5C2',
  text4: '#000000',
  text5: '#FFFFFF',

  //Background
  background1: '#E2E1E6',
  background2: '#F8F7FA',
  background3: '#FFFFFF',
  background4: '#F9F6FB',
  background5: '#05000c',

  // Notification
  green1: '#07D95A',
  green2: '#9CF0BD',
  red1: '#F8183E',
  red2: '#FCA3B2',
  greenPrimary: '#68d67c',

  //Gradient
  gradient1: '#D469C9',
  gradient2: '#A040CC',
  gradient3: '#7F26CD',
  gradient4: '#6A15CE',

  //Base
  gray: '#B9B5C2',
  grayDark: '#5A5C63',
  grayLight: '#D9D9D9',
};

const colors = {
  // color main
  primaryColor: themeColors.purple2,
  primaryAppColor: themeColors.greenPrimary,
  secondaryColor: themeColors.blue2,
  tertiaryColor: themeColors.yelow2,
  textColor: themeColors.text2,
  textBoldColor: themeColors.text1,
  backgroundColor: themeColors.background3,
  backgroundColorApp: themeColors.background5,
  shadowColor: themeColors.purple5,
  notificationSuccess: themeColors.green1,
  notificationError: themeColors.red1,
  buttonGradient: `linear-gradient(97.71deg, ${themeColors.gradient1} 13.18%, ${themeColors.gradient2} 42.81%, ${themeColors.gradient3} 76.14%, ${themeColors.gradient4} 97.53%)`,
  buttonActive: themeColors.purple1,
  buttonDisable: themeColors.gray,
  overlay: themeColors.grayLight,

  //
  other: themeColors,
};

export default colors;
