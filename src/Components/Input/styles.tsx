import {StyleSheet} from 'react-native';
import {COLORS} from '../../Utils';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from '../../Utils/Helper/responsive';

const styles = StyleSheet.create({
  container: {
    //flex: 1,
  },
  input: {
    width: wp(80),
    height: hp(6),
    borderRadius: wp(5),
    borderWidth: wp(0.3),
    //borderWidth: 5,
    color: COLORS.WHITE,
    textAlign: 'center',
    backgroundColor: COLORS.DARK_GRAY,
    marginTop: hp(2),
  },
  error: {
    textAlign: 'center',
    marginTop: hp(0.2),
    color: COLORS.WARNING,
  },
});

export default styles;
