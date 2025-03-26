import {StyleSheet} from 'react-native';

export const HomeScreenStyles = StyleSheet.create({
  safeArea: {flex: 1, backgroundColor: '#FFF'},
  container: {flex: 1, marginTop: 10},
  contentContainer: {gap: 20, paddingHorizontal: 20},

  buttonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },
  button: {
    alignSelf: 'flex-start',
    borderWidth: 1,
    padding: 5,
    borderRadius: 5,
    marginLeft: 15,
  },
});
