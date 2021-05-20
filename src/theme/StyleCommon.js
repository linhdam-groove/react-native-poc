import { StyleSheet } from 'react-native';

const StyleCommon = StyleSheet.create({
  centerContent: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    fontSize: 14,
    paddingHorizontal: 15,
  },
  input: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 3,
    paddingVertical: 10,
    paddingHorizontal: 5,
    shadowColor: '#ccc',
    shadowOpacity: 0.8,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 10,
  },
  button: {
    textAlign: 'center',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
});

export default StyleCommon;
