import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from '../../Utils/Helper/responsive';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: hp(2),
    marginLeft: wp(4),
  },
  bio: {
    marginTop: hp(1),
    fontWeight: '500',
  },
  locationContainer: {
    marginTop: hp(1),
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default styles;
