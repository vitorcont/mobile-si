import { theme } from '@mobile/global/styles/theme';
import Window from '@mobile/services/dimensions';
import { Platform } from 'react-native';

interface IProps {
  side?: 'left' | 'right';
  color?: string;
}

export const tabBarOptions = {
  tabStyle: {
    backgroundColor: 'transparent',
    height: Window.heightScale(0.06),
    alignSelf: 'center',
  },
  style: {
    backgroundColor: theme.colors.primary,
    width: Window.widthScale(1),
    height: Platform.OS === 'ios' ? Window.heightScale(0.1) : Window.heightScale(0.09),
    borderColor: theme.colors.primary,
    elevation: 5,
    paddingBottom: Platform.OS === 'ios' ? 20 : 3,
    alignItems: 'center',
  },
  labelStyle: {
    fontSize: Window.fontScale(11),
    textTransform: 'none',
    alignSelf: 'center',
  },
  keyboardHidesTabBar: true,
};
