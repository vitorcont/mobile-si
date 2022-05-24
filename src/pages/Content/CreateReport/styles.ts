import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },

  formContainer: {
    marginTop: '15%',
    width: '90%',
    marginBottom: '15%',
  },

  roundButton: {
    width: 150,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 20,
    borderWidth: 1.5,
    backgroundColor: '#eeeeee',
    borderColor: '#dddddd',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },

  disabledColor: {
    backgroundColor: '#E4E4E4',
  },

  changePhoto: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,

    top: 200,
    width: '80%',
    height: '30%',
    borderRadius: 32,
    backgroundColor: '#FAFAFA',
  },
});