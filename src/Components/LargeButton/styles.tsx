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

  button: {
    height: hp(7),
    width: wp(70),
    borderRadius: wp(10),
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: wp(0.3),
    borderColor: COLORS.PRIMARY,
    backgroundColor: COLORS.PRIMARY,
  },
  buttonText: {
    color: COLORS.WHITE,
  },
});

export default styles;
