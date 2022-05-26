import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },

  formContainer: {
    marginTop: '5%',
    width: '90%',
    marginBottom: '10%',
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
    width: 150,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 20,
    borderWidth: 1.5,
    borderColor: '#dddddd',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },

  changePhoto: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,

    top: '25%',
    width: '70%',
    height: '25%',
    borderRadius: 16,
    backgroundColor: '#FAFAFA',
    shadowColor: '#000',
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowRadius: 5,
    shadowOpacity: 0.5,
  },
});
