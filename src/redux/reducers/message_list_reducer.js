import _ from 'lodash';
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

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_MESSAGES_REQUEST:
    case CREATE_MESSAGE_REQUEST:
    case UPDATE_MESSAGE_REQUEST:
    case DELETE_MESSAGE_REQUEST:
    case FETCH_MESSAGES_ERROR:
    case CREATE_MESSAGE_ERROR:
    case UPDATE_MESSAGE_ERROR:
    case DELETE_MESSAGE_ERROR:
      return state;

    case FETCH_MESSAGES_SUCCESS:
    case DELETE_MESSAGE_SUCCESS:
      return action.payload;

    case CREATE_MESSAGE_SUCCESS:
    case UPDATE_MESSAGE_SUCCESS:
      return { ...state, ...action.payload };

  }
  return state;
}
