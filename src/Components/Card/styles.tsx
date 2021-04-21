import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from '../../Utils/Helper/responsive';

const styles = StyleSheet.create({
  container: {},
  cardContainer: {
    flexDirection: 'row',
    marginTop: hp(0.5),
  },
  avatarContainer: {
    marginLeft: wp(1),
  },
  postContainer: {
    marginLeft: wp(1),
  },
  name: {},

  bodyContainer: {
    marginLeft: wp(1),
  },
  bodyText: {
    flexWrap: 'wrap',
    flexShrink: 1,
    lineHeight: hp(2.2),
    marginTop: hp(0.4),
    marginBottom: hp(0.4),
  },
  image: {
    height: hp(15),
    width: wp(80),
    borderRadius: wp(2),
    marginTop: hp(0.5),
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: hp(0.5),
    alignItems: 'center',
  },
});

export default styles;
