import {StyleSheet} from 'react-native';
import {COLORS} from '../../Utils';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from '../../Utils/Helper/responsive';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: hp(1),
  },
  avatarContainer: {
    marginLeft: wp(3),
    flexDirection: 'row',
    alignItems: 'center',
  },
  nameContainer: {
    marginLeft: wp(1),
  },
  bodyContainer: {
    marginLeft: wp(3),
    marginTop: hp(1),
  },
  dateContainer: {
    marginTop: hp(2),
    marginBottom: hp(1),
    flexDirection: 'row',
  },
  retweetContainer: {
    marginTop: hp(1),
    marginBottom: hp(1),
    flexDirection: 'row',
  },
  retweetIcons: {
    marginTop: hp(1),
    marginBottom: hp(1),
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  divide: {
    width: '100%',
    height: hp(0.1),
    opacity: 0.5,
    backgroundColor: COLORS.PRIMARY,
  },
  comment: {
    marginLeft: wp(3),
  },
});

export default styles;
