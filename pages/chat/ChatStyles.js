import { StyleSheet } from 'react-native';
import { Kcolors } from '../../components/Constants';

export default ChatStyles = StyleSheet.create({
  ImageIcon: {
    width: 50,
    height: 50,
    backgroundColor: Kcolors.gray,
    borderRadius: 50,
    marginRight: 10,
  },
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 10,
  },
  header: {
    height: 50,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  messageList: {
    flex: 1,
    marginBottom: 10,
    marginTop: 20,
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
  },
  input: {
    flex: 1,
    marginRight: 10,
    fontSize: 16,
    padding: 5,
    maxHeight: 100,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
  },
});
