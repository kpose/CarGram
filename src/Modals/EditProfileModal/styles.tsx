import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../Utils/Helper/responsive';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  avatarContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  smallInput: {
    width: wp(40),
    height: hp(4),
  },

  largeInput: {
    width: wp(90),
    marginTop: hp(1),
    marginBottom: hp(1),
    height: hp(4),
  },
  bioInput: {
    width: wp(90),
    marginTop: hp(1),
    marginBottom: hp(1),
    //height: hp(4),
  },
  nameContainer: {
    marginTop: hp(1),
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  largeInputContainer: {
    //marginTop: hp(1),
    marginLeft: wp(5),
  },
});

export default styles;
