import {Dimensions, StyleSheet} from 'react-native';
const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 24,
  },
  content: {
    justifyContent: 'space-between',
    flex: 1,
    padding: 8,
  },
  image: {
    width: width / 5,
    height: width / 5,
    borderRadius: 24,
  },
  about: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconImage: {
    marginRight: 8,
  },
  icon: {
    flexDirection: 'row',
  },
});
export default styles;
