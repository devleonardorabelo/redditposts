import {Dimensions, StyleSheet} from 'react-native';
const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 24,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'rgba(255,255,255,0.15)',
    paddingBottom: 16,
    alignItems: 'center',
  },
  content: {
    justifyContent: 'space-between',
    flex: 1,
    paddingHorizontal: 16,
    paddingBottom: 8,
  },
  image: {
    width: width / 5,
    height: width / 5,
    borderRadius: 24,
  },
  about: {
    flexDirection: 'row',
  },
  iconImage: {
    marginRight: 8,
  },
  icon: {
    flexDirection: 'row',
    paddingRight: 16,
  },
  user: {
    marginVertical: 16,
    flexDirection: 'row',
  },
});
export default styles;
