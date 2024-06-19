import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#2C0066',
  },
  searchBar: {
    height: 40,
    borderColor: '#B43E8F',
    backgroundColor: '#F5E1EE',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  picker: {
    height: 50,
    width: '60%',
    backgroundColor: '#B43E8F',
    color: '#fafafa',
  },
  pickerItem: {
    backgroundColor: '#B43E8F',
    color: '#fafafa',
  },
  card: {
    marginBottom: 20,
    padding: 20,
    backgroundColor: '#F5E1EE',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor: '#B43E8F',
  },
  name: {
    fontSize: 24,
    color: '#290628',
  },
  japaneseName: {
    fontSize: 12,
    marginBottom: 10,
  },
  standInfo: {
    fontSize: 16,
    color: '#060606',
  },
});