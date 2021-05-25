import { StyleSheet } from 'react-native';

const StyleCommon = StyleSheet.create({
  fullWidth: {
    width: '100%',
  },
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
  wrapperInputIcon: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    color: '#424242',
    shadowColor: '#ccc',
    shadowOpacity: 0.8,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 10,
  },
  inputIcon: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
  },
  iconInput: {
    padding: 10,
  },
  button: {
    textAlign: 'center',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    overflow: 'hidden',
  },
  textBtn: {
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
});

export default StyleCommon;
