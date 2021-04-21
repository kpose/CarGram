import React, {useEffect, useState, useContext} from 'react';
import {View, FlatList} from 'react-native';
import {Text, Surface} from 'react-native-paper';
import {Card} from '../../Components';
import styles from './styles';
import axios from 'axios';
import {Spinner} from '../../Components';

const Home = () => {
  const [posts, setPosts] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get('https://us-central1-cargram-72669.cloudfunctions.net/api/posts')
      .then(response => {
        setPosts(response.data);
        setLoading(false);
      })
      .catch(err => {
        setLoading(false);
        console.log(err);
      });
  }, []);

  const renderItem = ({item}: any) => {
    return <Card post={item} />;
  };

  {
    console.log(posts);
  }
  return (
    <View style={styles.container}>
      {console.log(posts)}
      {loading && <Spinner />}
      {!posts && (
        <View>
          <Text>No Posts</Text>
        </View>
      )}
      <FlatList
        data={posts}
        renderItem={renderItem}
        keyExtractor={item => item.postId}
      />
    </View>
  );
};

export default Home;
