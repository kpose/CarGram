import React from 'react';
import {View, TouchableOpacity, ImageBackground} from 'react-native';
import {Text, Button} from 'react-native-paper';
import styles from './styles';
import {useSelector} from 'react-redux';
import {HomeStackProps} from '../../Navigation/NavigationTypes';
import {ProfileHeader} from '../../Components';

const Profile = ({navigation}: HomeStackProps) => {
  const {credentials} = useSelector(state => state.user);
  console.log(credentials);
  return (
    <View style={styles.container}>
      <ProfileHeader
        onBackPress={() => navigation.navigate('Home')}
        profileImage={credentials.imageUrl}
      />
    </View>
  );
};

export default Profile;
