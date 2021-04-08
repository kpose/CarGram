import {StyleSheet} from 'react-native';
import {COLORS} from '../../Utils';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from '../../Utils/Helper/responsive';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.PRIMARY,
    //alignItems: 'center',
  },
  header: {
    marginTop: hp(6),
    marginLeft: wp(2),
  },
  headerTitle: {
    marginLeft: wp(7),
    marginTop: hp(3),
    color: COLORS.LIGHT_BLUE,
    marginBottom: hp(5),
  },
  inputContainer: {
    alignItems: 'center',
  },
  forgotContainer: {
    marginTop: hp(2),
    marginLeft: wp(7),
    marginBottom: hp(4),
  },
  forgot: {
    color: COLORS.LIGHT_BLUE,
  },
});

export default styles;
