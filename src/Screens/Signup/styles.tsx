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
  header: {
    marginLeft: wp(3),
  },
  icon: {
    color: COLORS.PRIMARY,
  },
  title: {
    marginLeft: wp(3),
    marginTop: hp(3),
    color: COLORS.PRIMARY,
  },

  inputContainer: {
    marginTop: hp(3),
    alignItems: 'center',
  },
  forgot: {
    marginTop: hp(1),
    marginLeft: wp(60),
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: hp(3),
  },
});

export default styles;
