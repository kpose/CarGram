import React, {useState} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {Text, Avatar, TextInput, Button} from 'react-native-paper';
import {Spinner} from '../../Components';
import {CustomStyles} from '../../Utils/Style';
import {useSelector, useDispatch} from 'react-redux';
import styles from './styles';
import {makePost} from '../../Redux/Actions/DataActions';
import * as Progress from 'react-native-progress';
import {COLORS} from '../../Utils';

type PostModalProps = {
  close: any;
  background: any;
};

const NewPostModal = (props: PostModalProps) => {
  const {
    credentials: {imageUrl},
  } = useSelector(state => state.user);
  const {loading, errors} = useSelector(state => state.UI);
  const [textBody, setTextBody] = useState('');
  const dispatch = useDispatch();
  const maxLength = 240;
  const progress = textBody.length / maxLength;

  /* const makePost = () => {
    dispatch(makePost({body: textBody}));
    props.close;
  }; */
  return (
    <View>
      {loading && <Spinner />}
      <View style={styles.header}>
        <TouchableOpacity onPress={props.close}>
          <Text style={[styles.cancel, CustomStyles.modalAction]}>Cancel</Text>
        </TouchableOpacity>
        <Button
          mode="contained"
          disabled={textBody ? false : true}
          onPress={() => dispatch(makePost({body: textBody}))}
          style={styles.post}>
          Post
        </Button>
      </View>
      <View style={styles.bodyContainer}>
        <Avatar.Image source={{uri: imageUrl}} size={50} />
        <TextInput
          multiline={true}
          maxLength={maxLength}
          autoFocus={true}
          placeholder="What happened?"
          onChangeText={text => setTextBody(text)}
          style={[
            styles.input,
            CustomStyles.textInput,
            {backgroundColor: props.background},
          ]}
        />
      </View>
      <View style={styles.pickerContainer}>
        <View style={styles.divide} />
        <View style={styles.pickers}>
          <Button icon="file-image-outline"></Button>
          <Button icon="delete-forever"></Button>

          <Progress.Circle
            size={20}
            progress={progress}
            color={COLORS.PRIMARY}
            borderWidth={0.2}
            borderColor={COLORS.SECONDARY}
            thickness={2}
            // strokeCap="round"
          />
        </View>
      </View>
    </View>
  );
};

export default NewPostModal;
