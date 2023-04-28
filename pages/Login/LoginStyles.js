import { StyleSheet } from 'react-native';
import { Kcolors } from '../../components/Constants';

export const LoginStyles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 60,
    color: Kcolors.red1,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  checkBoxContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '80%',
  },
  checkBox: {
    margin: 8,
    width: 25,
    height: 25,
    borderColor: Kcolors.dark1,
  },
  showPasswordText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Kcolors.dark1,
  },
  buttonContainer: {
    width: '80%',
    marginTop: 10,
  },
});
