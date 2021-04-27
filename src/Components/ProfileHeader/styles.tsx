import {StyleSheet} from 'react-native';
import {COLORS} from '../../Utils';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from '../../Utils/Helper/responsive';
import {CustomStyles} from '../../Utils/Style';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
  },
  profileHeader: {
    height: hp(16),
    backgroundColor: 'red',
  },
  backIcon: {
    marginTop: hp(5),
    marginLeft: wp(4),
    backgroundColor: COLORS.DARK_GRAY,
    width: wp(12),
    justifyContent: 'center',
    borderRadius: 10,
    alignItems: 'center',
  },
  avatarContainer: {
    position: 'absolute',
    top: hp(13),
    left: wp(4),
    height: hp(9),
    width: wp(20),
    //justifyContent: 'center',
    //alignItems: 'center',
    borderRadius: 50,
  },
  buttonStyle: {
    marginLeft: wp(65),
    marginTop: hp(0.5),
    width: wp(30),
    justifyContent: 'center',
    borderRadius: 30,
    borderWidth: wp(0.3),
    borderColor: COLORS.PRIMARY,
  },
  label: {
    //fontSize: CustomStyles.smallButtonText,
  },
  avatar: {
    resizeMode: 'contain',
  },
  headerImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});

export default styles;
