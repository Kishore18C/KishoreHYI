import {StyleSheet} from 'react-native';

export const TextFieldStyle = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#FFF',
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ADD8E6',
    borderRadius: 15,
    paddingHorizontal: 5,
  },
  header: {
    fontSize: 16,
    fontWeight: 'bold',
    // paddingLeft: 10,
    marginBottom: 5,
    color: '#000',
  },
  errorText: {
    fontSize: 12,

    paddingLeft: 2,
    marginBottom: 5,
    color: '#FF0000',
  },
});
