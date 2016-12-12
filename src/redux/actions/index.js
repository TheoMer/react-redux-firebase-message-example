// "firebase": "^3.6.3"
import firebase from 'firebase';
import _ from 'lodash';
import { firebaseConfig, dbRoot, initialMessage } from './../../../config/settings';
import { setMessageData, randomUsername } from './../../helpers';
import {
  FETCH_MESSAGES_REQUEST,
  FETCH_MESSAGES_SUCCESS,
  FETCH_MESSAGES_ERROR,
  CREATE_MESSAGE_REQUEST,
  CREATE_MESSAGE_SUCCESS,
  CREATE_MESSAGE_ERROR,
  UPDATE_MESSAGE_REQUEST,
  UPDATE_MESSAGE_SUCCESS,
  UPDATE_MESSAGE_ERROR,
  DELETE_MESSAGE_REQUEST,
  DELETE_MESSAGE_SUCCESS,
  DELETE_MESSAGE_ERROR
} from './../constants';

const app = firebase.initializeApp(firebaseConfig);
const rootNodeRef = firebase.database().ref(dbRoot)
const messagesRef = rootNodeRef.child('messages');
const username  = randomUsername();

function createMessage(post) {
  return (dispatch, getState) => {
    const currentMessages = getState().messageList;
    //record instance
    const message = messagesRef.push();
    dispatch({
      type: CREATE_MESSAGE_REQUEST,
      payload: currentMessages
    });
    //set record instance
    message.set( setMessageData(username, post) )
      .catch(function(error) {
        dispatch({
          type: CREATE_MESSAGE_ERROR,
          payload: currentMessages
        });
        console.log("Create failed: " + error.message);
      });
  }
}

// idea from:
// https://github.com/erikras/react-redux-universal-hot-example/issues/252
function fetchMessagesListener() {
  return (dispatch, getState) => {
    const currentMessages = getState().messageList;
    dispatch({
      type: FETCH_MESSAGES_REQUEST,
      payload: currentMessages
    });
    messagesRef.on('value', snapshot => {
      dispatch({
        type: FETCH_MESSAGES_SUCCESS,
        payload: snapshot.val()
      });
    });
  };
}

function updateMessage(key=null, post) {
  return (dispatch, getState) => {
    const currentMessages = getState().messageList;
    dispatch({
      type: UPDATE_MESSAGE_REQUEST,
      payload: currentMessages
    });
    messagesRef.child(key).set( setMessageData(username, post) )
      .catch(function(error) {
        dispatch({
          type: UPDATE_MESSAGE_ERROR,
          payload: currentMessages
        });
        console.log("Update failed: " + error.message);
      });
  }
}

function deleteMessage(key) {
  return (dispatch, getState) => {
    const currentMessages = getState().messageList;
    dispatch({
      type: DELETE_MESSAGE_REQUEST,
      payload: currentMessages
    });
    messagesRef.child(key).remove()
      .catch(function(error) {
        dispatch({
          type: DELETE_MESSAGE_ERROR,
          payload: currentMessages
        });
        console.log("Delete failed: " + error.message);
      });
  }
}


// add more event listeners if needed:
// child_added
// child_changed
// child_moved
// child_removed


export {
  fetchMessagesListener,
  createMessage,
  updateMessage,
  deleteMessage
};
