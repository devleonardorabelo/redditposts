import {Dimensions, StyleSheet} from 'react-native';
import THEME from '../../../theme';
const {width} = Dimensions.get('screen');
const styles = StyleSheet.create({
  content: {
    width: width - 48,
    backgroundColor: THEME.backSecondary,
    borderRadius: 24,
  },
});
export default styles;
