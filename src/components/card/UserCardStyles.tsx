import {StyleSheet} from 'react-native';

export const UserCardStyles = StyleSheet.create({
  animatedContainer: {
    padding: 15,
    marginVertical: 8,
    borderRadius: 12,
    backgroundColor: '#0A0A0A', // Deep black background
    shadowColor: '#FFD700', // Rich golden glow
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 8,
  },
  container: {
    borderWidth: 1,
    borderColor: '#D4AF37', // Elegant gold border
    borderRadius: 15,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardData: {gap: 5, width: '70%'},
  text: {
    color: '#F5E6C8', // Champagne Gold text
    fontSize: 16,
  },
  buttonContainer: {gap: 10},
  button: {
    borderWidth: 1,
    borderColor: '#D4AF37',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    backgroundColor: '#D4AF37', // Gold button
  },
  buttonText: {
    color: '#0A0A0A', // Deep black text for contrast
    fontWeight: 'bold',
  },
});
