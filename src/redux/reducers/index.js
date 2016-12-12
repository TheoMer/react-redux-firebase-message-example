import { combineReducers } from 'redux';
import messageListReducer from './message_list_reducer';

const rootReducer = combineReducers({
  messageList: messageListReducer
});

export default rootReducer;
