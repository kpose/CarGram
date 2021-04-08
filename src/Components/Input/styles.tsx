import {StyleSheet} from 'react-native';
import {COLORS} from '../../Utils';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from '../../Utils/Helper/responsive';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    width: wp(85),
    height: hp(8),
    borderRadius: wp(10),
    color: COLORS.WHITE,
    textAlign: 'center',
    backgroundColor: COLORS.DARK_GRAY,
    marginTop: hp(2),
  },
});

export default styles;
