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
  homeContainer: {
    width: '90%',
    backgroundColor: theme.colors.primary,
    paddingLeft: '5%',
    paddingRight: '8%',
    paddingTop: '17%',
    paddingBottom: '8%',
    borderBottomRightRadius: 90,
    elevation: 10,
  },
  headerText: {
    color: '#FFF',
    fontSize: 24,
    fontFamily: theme.fonts.Bold,
  },
  headerDescription: {
    color: '#FFF',
    fontSize: 14,
    fontFamily: theme.fonts.Regular,
  },
});
