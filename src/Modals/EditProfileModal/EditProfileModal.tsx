import React, {useState} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {Text, TextInput, Avatar, Button} from 'react-native-paper';
import {useSelector, useDispatch} from 'react-redux';
import styles from './styles';
import {Spinner} from '../../Components';
import * as ImagePicker from 'react-native-image-picker';
import {CustomStyles} from '../../Utils/Style';
import {
  authenticated,
  editUserDetails,
  uploadProfileImage,
} from '../../Redux/Actions/UserActions';
import {CLEAR_ERRORS} from '../../Redux/Constants';

type EditProfileProps = {
  close: any;
};

const EditProfileModal = (props: EditProfileProps) => {
  const {credentials} = useSelector(state => state.user);
  const {loading} = useSelector(state => state.UI);
  const [imageSource, setImageSource] = useState('');
  const [imageName, setImageName] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [bio, setBio] = useState('');
  const [website, setWebsite] = useState('');
  const [location, setLocation] = useState('');
  const dispatch = useDispatch();

  console.log(loading);

  const selectImage = () => {
    ImagePicker.launchImageLibrary(
      {mediaType: 'photo', includeBase64: false, maxHeight: 200, maxWidth: 200},
      response => {
        if (response.didCancel) {
          console.log('canceled');
        } else {
          const photo = response.uri;
          setImageSource(photo);
          setImageName(response.fileName);
        }
      },
    );
  };

  const saveProfile = () => {
    const formData = new FormData();
    formData.append('image', {uri: imageSource, name: imageName});
    if (imageSource) {
      dispatch(uploadProfileImage(formData));
    } else {
      console.log('no image selected');
    }
    const userDetails = {
      firstname: firstname,
      lastname: lastname,
      bio: bio,
      website: website,
      location: location,
    };
    dispatch(editUserDetails(userDetails));
    dispatch({type: CLEAR_ERRORS});
    props.close();
  };

  return (
    <View style={styles.container}>
      {loading && <Spinner />}
      <View style={styles.avatarContainer}>
        <TouchableOpacity onPress={selectImage}>
          <Avatar.Image
            source={{uri: imageSource ? imageSource : credentials.imageUrl}}
            size={120}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.nameContainer}>
        <TextInput
          label="First Name"
          //value={firstname}
          defaultValue={credentials.firstname}
          onChangeText={text => setFirstname(text)}
          mode="outlined"
          style={[styles.smallInput, CustomStyles.textInput]}
        />

        <TextInput
          label="Last Name"
          onChangeText={text => setLastname(text)}
          defaultValue={credentials.lastname}
          mode="outlined"
          style={[styles.smallInput, CustomStyles.textInput]}
        />
      </View>

      <View style={styles.largeInputContainer}>
        <TextInput
          label="Bio"
          mode="outlined"
          defaultValue={credentials.bio}
          onChangeText={text => setBio(text)}
          multiline={true}
          style={[styles.bioInput, CustomStyles.textInput]}
        />
        <TextInput
          label="Website"
          defaultValue={credentials.website}
          onChangeText={text => setWebsite(text)}
          mode="outlined"
          style={[styles.largeInput, CustomStyles.textInput]}
        />
        <TextInput
          label="Location"
          defaultValue={credentials.location}
          onChangeText={text => setLocation(text)}
          mode="outlined"
          style={[styles.largeInput, CustomStyles.textInput]}
        />

        <Button
          icon="content-save-edit-outline"
          mode="contained"
          onPress={saveProfile}
          style={styles.button}>
          {' '}
          Save
        </Button>
      </View>
    </View>
  );
};

export default EditProfileModal;
