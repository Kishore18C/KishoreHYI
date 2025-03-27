import {StyleSheet} from 'react-native';

export const HomeScreenStyles = StyleSheet.create({
  safeArea: {flex: 1, backgroundColor: '#0A0A0A'},
  container: {flex: 1, marginTop: 10},
  contentContainer: {gap: 20, paddingHorizontal: 20},

  buttonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },
  button: {
    borderWidth: 1,
    borderColor: '#D4AF37',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    backgroundColor: '#D4AF37', // Gold button
  },
});
