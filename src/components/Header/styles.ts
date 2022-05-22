import { theme } from '@mobile/global/styles/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    marginTop: '25%',
  },

  title: {
    color: '#000',
    fontSize: 32,
    fontFamily: theme.fonts.Bold,
    textAlign: 'center',
  },
});
