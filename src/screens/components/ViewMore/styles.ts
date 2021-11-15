import {StyleSheet} from 'react-native';
import THEME from '../../../theme';

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderTopEndRadius: 24,
    borderTopStartRadius: 24,
    backgroundColor: THEME.backSecondary,
  },
  footer: {
    paddingHorizontal: 24,
    paddingVertical: 16,
    backgroundColor: THEME.primary,
    borderBottomEndRadius: 24,
    borderBottomStartRadius: 24,
  },
  about: {
    flexDirection: 'row',
    marginTop: 16,
    justifyContent: 'flex-end',
  },
  image: {
    width: '100%',
    resizeMode: 'cover',
    height: 400,
  },
  iconImage: {
    marginRight: 8,
  },
  icon: {
    flexDirection: 'row',
    paddingLeft: 16,
  },
  user: {
    marginVertical: 16,
    flexDirection: 'row',
  },
});
export default styles;
