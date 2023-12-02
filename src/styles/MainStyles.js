import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#fff',
  },
  search: {
    margin: 16,
    elevation: 2,
    width: width - 32, // subtract margins
  },
  card: {
    marginHorizontal: 16,
    marginTop: 16,
    elevation: 2,
    width: width - 32, // subtract margins
  },
  match: {
    marginHorizontal: 16,
    marginTop: 16,
    elevation: 2,
    width: width - 32,
  },
  section: {
    marginTop: 16,
  },
  sectionTitle: {
    marginLeft: 16,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  scrollView: {
    backgroundColor: '#f5f5f5',
  },
  boldText: {
    fontFamily: 'Comfortaa-Bold',
  },
  lightText: {
    fontFamily: 'Comfortaa-Light',
  },
  mediumText: {
    fontFamily: 'Comfortaa-Medium',
  },
});
