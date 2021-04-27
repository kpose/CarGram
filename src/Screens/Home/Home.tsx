import React, {useEffect, useState} from 'react';
import {View, FlatList} from 'react-native';
import {Card} from '../../Components';
import styles from './styles';
import axios from 'axios';
import {Spinner} from '../../Components';
import {useDispatch} from 'react-redux';

const Home = () => {
  const [posts, setPosts] = useState();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

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

  return (
    <View style={styles.container}>
      {loading && <Spinner />}

      <FlatList
        data={posts}
        renderItem={renderItem}
        keyExtractor={item => item.postId}
      />
    </View>
  );
};

export default Home;
