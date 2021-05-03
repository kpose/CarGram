import React, {useContext, useEffect} from 'react';
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
import {useDispatch, useSelector} from 'react-redux';
import {authenticated, logoutUser} from '../../Redux/Actions/UserActions';
import auth from '@react-native-firebase/auth';
import {unlikePost, likePost} from '../../Redux/Actions/DataActions';

type CardProps = {
  post: any;
};

const imag = require('../..//Assets/Images/1.jpg');

const Card = (props: CardProps) => {
  const dispatch = useDispatch();
  const {
    likes,
    credentials: {handle},
  } = useSelector(state => state.user);
  console.log(props.post);
  const {
    body,
    userHandle,
    createdAt,
    commentCount,
    likeCount,
    userImage,
    postId,
  } = props.post;
  const {theme} = React.useContext(ThemeContext);
  dayjs.extend(relativeTime);

  const likedPost = () => {
    if (likes && likes.find(like => like.postId === postId)) return true;
    else return false;
  };

  const likeThisPost = () => {
    dispatch(likePost(postId));
  };

  const unlikeThisPost = () => {
    dispatch(unlikePost(postId));
  };

  return (
    <View style={styles.container}>
      {console.log(userHandle)}
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

            <TouchableOpacity onPress={() => dispatch(logoutUser)}>
              <Image source={imag} style={styles.image} />
            </TouchableOpacity>
            <View style={styles.buttonsContainer}>
              <Button icon="chat">
                {commentCount > 0 ? commentCount : null}
              </Button>

              {likedPost() ? (
                <Button
                  icon="heart"
                  color={COLORS.WARNING}
                  onPress={unlikeThisPost}>
                  {likeCount}{' '}
                </Button>
              ) : (
                <Button icon="heart-outline" onPress={likeThisPost} />
              )}

              {userHandle === handle ? (
                <Button color={COLORS.WARNING} icon="delete-forever"></Button>
              ) : (
                <Button icon="share-variant"></Button>
              )}
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
