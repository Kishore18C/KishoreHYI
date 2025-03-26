import {StyleSheet} from 'react-native';

export const UserCardStyles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 20,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardData: {gap: 5},
  buttonContainer: {gap: 10},
  button: {
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
});
