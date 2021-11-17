import {Dimensions, StyleSheet} from 'react-native';
import THEME from '../../../theme';
const {width, height} = Dimensions.get('screen');
const styles = StyleSheet.create({
  content: {
    width: width - 48,
    backgroundColor: THEME.backSecondary,
    borderRadius: 24,
  },
  full: {
    width: '100%',
    height: height * 0.8,
    backgroundColor: THEME.backSecondary,
    borderRadius: 24,
  },
});
export default styles;
