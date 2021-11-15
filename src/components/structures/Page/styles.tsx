import {Dimensions, StyleSheet} from 'react-native';
import THEME from '../../../Theme';

const {height, width} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    backgroundColor: THEME.backPrimary,
    height,
    width,
  },
});
export default styles;
