import React, {useContext} from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import {UserContext} from '../../Contexts/UserProvider';

const Notification = () => {
  const {user} = useContext(UserContext);
  console.log(user);
  return (
    <View style={styles.container}>
      <Text>Notification</Text>
    </View>
  );
};

export default Notification;
