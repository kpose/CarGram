import React, {useContext} from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {Surface, Text, Avatar, Button} from 'react-native-paper';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from '../../Utils/Helper/responsive';
import {CustomStyles} from '../../Utils/Style';
import styles from './styles';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import {COLORS} from '../../Utils';
import {ThemeContext} from '../../Contexts';
import {UserContext} from '../../Contexts/UserProvider';

type CardProps = {
  post: any;
};

const imag = require('../..//Assets/Images/1.jpg');

const Card = (props: CardProps) => {
  const {removeToken} = useContext(UserContext);
  const {
    body,
    userHandle,
    createdAt,
    commentCount,
    likeCount,
    userImage,
  } = props.post;
  const {theme} = React.useContext(ThemeContext);
  dayjs.extend(relativeTime);
  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <View style={styles.avatarContainer}>
          <Avatar.Image size={40} source={{uri: userImage}} />
        </View>

        <View style={styles.postContainer}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={[styles.name, CustomStyles.name]}> Yudimy</Text>
            <Text> @{userHandle} . </Text>
            <Text>{dayjs(createdAt).fromNow()}</Text>
          </View>
          <View style={styles.bodyContainer}>
            <View style={{width: widthPercentageToDP(80)}}>
              <Text style={[styles.bodyText, CustomStyles.postBody]}>
                {body}
              </Text>
            </View>

            <TouchableOpacity onPress={() => removeToken()}>
              <Image source={imag} style={styles.image} />
            </TouchableOpacity>
            <View style={styles.buttonsContainer}>
              <Button icon="chat">
                {commentCount > 0 ? commentCount : null}
              </Button>
              <Button icon="heart">{likeCount > 0 ? likeCount : null}</Button>
              <Button icon="share-variant"></Button>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          height: widthPercentageToDP(0.1),
          backgroundColor: COLORS.DARK_GRAY,
          marginRight: widthPercentageToDP(1),
          marginLeft: widthPercentageToDP(1),
          marginTop: heightPercentageToDP(0.5),
        }}
      />
    </View>
  );
};

export default Card;
