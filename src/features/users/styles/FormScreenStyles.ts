import {StyleSheet} from 'react-native';

export const FormScreenStyles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
  },
  container: {
    marginTop: 50,
    width: '90%',
    alignItems: 'center',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#FFD700',
  },
  form: {
    width: '100%',
    gap: 15,
  },
  button: {
    width: 120,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    shadowColor: '#FFD700',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 6,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
  },
  activeButton: {
    backgroundColor: '#FFD700',
  },
  inactiveButton: {
    backgroundColor: '#444444',
  },
});
