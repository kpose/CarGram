import {
  LOADING_DATA,
  SET_POSTS,
  SET_POST,
  LIKE_POST,
  UNLIKE_POST,
  DELETE_POST,
  LOADING_UI,
  STOP_LOADING_UI,
  MAKE_POST,
  SET_ERRORS,
  CLEAR_ERRORS,
} from '../Constants';
import axios from 'axios';

/* get all posts */
export const getPosts = () => (dispatch: any) => {
  dispatch({type: LOADING_DATA});
  axios
    .get('https://us-central1-cargram-72669.cloudfunctions.net/api/posts')
    .then(res => {
      dispatch({
        type: SET_POSTS,
        payload: res.data,
      });
    })
    .catch(err => {
      dispatch({
        type: SET_POSTS,
        payload: [],
      });
    });
};

/* like post */
export const likePost = (postId: string) => (dispatch: any) => {
  axios
    .get(
      `https://us-central1-cargram-72669.cloudfunctions.net/api/post/${postId}/like`,
    )
    .then(res => {
      dispatch({type: LIKE_POST, payload: res.data});
    })
    .catch(err => {
      console.log(err);
    });
};

/* unlike post */
export const unlikePost = (postId: string) => (dispatch: any) => {
  axios
    .get(
      `https://us-central1-cargram-72669.cloudfunctions.net/api/post/${postId}/unlike`,
    )
    .then(res => {
      dispatch({type: UNLIKE_POST, payload: res.data});
    })
    .catch(err => {
      console.log(err);
    });
};

/* delete post */
export const deletePost = (postId: string) => (dispatch: any) => {
  axios
    .delete(
      `https://us-central1-cargram-72669.cloudfunctions.net/api/post/${postId}`,
    )
    .then(() => {
      dispatch({type: DELETE_POST, payload: postId});
    })
    .catch(err => console.log(err));
};

/* make new post */

export const makePost = (newPost: any) => (dispatch: any) => {
  dispatch({type: LOADING_UI});
  axios
    .post(
      'https://us-central1-cargram-72669.cloudfunctions.net/api/post',
      newPost,
    )
    .then(res => {
      dispatch({type: MAKE_POST, payload: res.data});
      dispatch({type: CLEAR_ERRORS});
    })
    .catch(err => {
      dispatch({type: SET_ERRORS, payload: err.response.data});
    });
};

/* get post details */
export const getPost = (postId: string) => (dispatch: any) => {
  dispatch({type: LOADING_UI});
  axios
    .get(
      `https://us-central1-cargram-72669.cloudfunctions.net/api/post/${postId}`,
    )
    .then(res => {
      dispatch({
        type: SET_POST,
        payload: res.data,
      });
      dispatch({type: STOP_LOADING_UI});
    })
    .catch(err => {
      console.log(err);
    });
};
