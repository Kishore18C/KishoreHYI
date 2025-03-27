import {StyleSheet} from 'react-native';

export const TextFieldStyle = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#000000',
  },
  input: {
    width: '100%',
    height: 45,
    borderWidth: 1,
    borderColor: '#FFD700',
    borderRadius: 15,
    paddingHorizontal: 10,
    fontSize: 16,
    color: '#FFD700',
    backgroundColor: '#1A1A1A',
  },
  header: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#FFD700',
  },
  errorInput: {
    borderColor: '#FF4444',
    shadowColor: '#FF4444',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.6,
    shadowRadius: 4,
    elevation: 5,
  },
  errorText: {
    fontSize: 12,
    paddingLeft: 2,
    marginTop: 3,
    color: '#FF4444',
  },
});
