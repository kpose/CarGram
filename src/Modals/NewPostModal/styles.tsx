import {StyleSheet} from 'react-native';
import {COLORS} from '../../Utils';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../Utils/Helper/responsive';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cancel: {
    marginLeft: wp(2),
    marginTop: hp(1),
    color: COLORS.PRIMARY,
  },
  post: {
    marginRight: wp(2),
    marginTop: hp(1),
    color: COLORS.PRIMARY,
  },
  bodyContainer: {
    flexDirection: 'row',
    //alignItems: 'center',
    marginLeft: wp(2),
    marginTop: hp(1),
  },
  input: {
    width: '100%',
    marginLeft: wp(1),
    flexWrap: 'wrap',
    flexShrink: 1,
  },
  pickers: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  pickerContainer: {
    position: 'absolute',
    top: hp(50),
  },
  divide: {
    width: wp(100),
    height: hp(0.05),
    backgroundColor: COLORS.PRIMARY,
  },
});

export default styles;
