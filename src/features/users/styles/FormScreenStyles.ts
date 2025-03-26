import {StyleSheet} from 'react-native';

export const FormScreenStyles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {marginTop: 30, width: '90%', alignItems: 'center'},
  form: {width: '100%', gap: 10},
  button: {
    width: 100,
    height: 50,
    borderRadius: 20,
    backgroundColor: '#4CAF50',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFF',
  },
  activeButton: {
    backgroundColor: '#4CAF50', // Green when active
  },
  inactiveButton: {
    backgroundColor: '#D3D3D3', // Light gray when inactive
  },
});
