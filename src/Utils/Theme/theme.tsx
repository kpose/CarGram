import {
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme,
} from '@react-navigation/native';

import {
  DarkTheme as PaperDark,
  DefaultTheme as PaperDefault,
} from 'react-native-paper';

export const navLight = {
  ...NavigationDefaultTheme,
  colors: {
    ...NavigationDefaultTheme.colors,
    primary: '#085001',
    accent: '#710D7A',
  },
};

export const navDark = {
  ...NavigationDarkTheme,
  colors: {
    ...NavigationDarkTheme.colors,
    primary: '#085001',
    accent: '#710D7A',
  },
};

export const customLight = {
  ...PaperDefault,
  dark: false,
  roundness: 4,
  colors: {
    ...PaperDefault.colors,
    primary: '#085001',
    accent: '#9924A3',
    surface: '#501A55',
  },
  fonts: {
    regular: {
      fontFamily: 'System',
      fontWeight: '400' as '400',
    },
    medium: {
      fontFamily: 'System',
      fontWeight: '500' as '500',
    },
    light: {
      fontFamily: 'System',
      fontWeight: '300' as '300',
    },
    thin: {
      fontFamily: 'System',
      fontWeight: '100' as '100',
    },
  },
  animation: {
    scale: 1.0,
  },
};

export const customDark = {
  ...PaperDark,
  dark: true,
  roundness: 4,
  mode: 'adaptive',
  colors: {
    ...PaperDark.colors,
    primary: '#085001',
    accent: '#710D7A',
    surface: '#2C152E',
  },
  fonts: {
    regular: {
      fontFamily: 'System',
      fontWeight: '400' as '400',
    },
    medium: {
      fontFamily: 'System',
      fontWeight: '500' as '500',
    },
    light: {
      fontFamily: 'System',
      fontWeight: '300' as '300',
    },
    thin: {
      fontFamily: 'System',
      fontWeight: '100' as '100',
    },
  },
  animation: {
    scale: 1.0,
  },
};
