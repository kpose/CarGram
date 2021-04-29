import React from 'react';
import {View, TouchableOpacity, ImageBackground} from 'react-native';
import {Text, Avatar, Button} from 'react-native-paper';
import styles from './styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {CustomStyles, navigationIcon} from '../../Utils/Style';

type HeaderProps = {
  profileImage: string;
  profileHeader: string;
  buttonTitle: string;
  active?: boolean;
  onButtonPress: any;
  onAvatarPress: () => {};
  onBackPress: any;
};

const ProfileHeader = (props: HeaderProps) => {
  const {
    profileHeader,
    profileImage,
    active,
    onButtonPress,
    onAvatarPress,
    onBackPress,
  } = props;
  return (
    <>
      <View style={styles.profileHeader}>
        <ImageBackground
          style={styles.headerImage}
          source={require('../../Assets/Images/5.jpg')}>
          <TouchableOpacity onPress={onBackPress} style={styles.backIcon}>
            <MaterialCommunityIcons
              size={navigationIcon}
              name="chevron-left"
              color="#fff"
            />
          </TouchableOpacity>
        </ImageBackground>
      </View>

      <TouchableOpacity style={styles.avatarContainer} onPress={onAvatarPress}>
        <Avatar.Image source={{uri: profileImage}} size={75} />
      </TouchableOpacity>

      <Button
        mode={active ? 'contained' : 'outlined'}
        onPress={onButtonPress}
        style={styles.buttonStyle}
        labelStyle={[CustomStyles.smallButtonText]}>
        Edit Profile
      </Button>
    </>
  );
};

export default ProfileHeader;
