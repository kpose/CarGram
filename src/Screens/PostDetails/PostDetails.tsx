import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';
import styles from './styles';
import {DetailsPost} from '../../Components';

const PostDetails = ({route, navigation}) => {
  const post = route.params.post;
  return (
    <View style={styles.container}>
      <DetailsPost
        handle={post.userHandle}
        image={post.userImage}
        body={post.body}
        likes={post.likeCount}
        comments={post.commentCount}
      />
    </View>
  );
};

export default PostDetails;
