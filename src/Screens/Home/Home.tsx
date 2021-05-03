import React, {useEffect, useState} from 'react';
import {View, FlatList} from 'react-native';
import {Card} from '../../Components';
import styles from './styles';
import axios from 'axios';
import {Spinner} from '../../Components';
import {useDispatch, useSelector} from 'react-redux';
import {getPosts} from '../../Redux/Actions/DataActions';

const Home = () => {
  const {loading, posts} = useSelector(state => state.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  const renderItem = ({item}: any) => {
    return <Card post={item} />;
  };

  return (
    <View style={styles.container}>
      {loading && <Spinner />}
      {posts && (
        <FlatList
          data={posts}
          renderItem={renderItem}
          keyExtractor={item => item.postId}
        />
      )}
    </View>
  );
};

export default Home;
