import {StyleSheet} from 'react-native';
import {COLORS} from '../../Utils';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from '../../Utils/Helper/responsive';

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  button: {
    height: hp(7),
    width: wp(70),
    //backgroundColor: COLORS.LIGHT_BLUE,
    borderRadius: wp(10),
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: wp(0.3),
    borderColor: COLORS.LIGHT_BLUE,
  },
  buttonText: {
    color: COLORS.WHITE,
  },
});

export default styles;
