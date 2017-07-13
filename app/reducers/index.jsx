import { combineReducers } from 'redux'

const initialState = {}



const rootReducer = function(state = initialState, action) {
  switch(action.type) {
    default: return state
  }
};

export default rootReducer

//SEE IF WE CAN USE THE CODE BELOW

// //ACTION TYPES
// const GOT_MESSAGES_FROM_SERVER = 'GOT_MESSAGES_FROM_SERVER';
// const GOT_NEW_MESSAGE_FROM_SERVER = 'GOT_NEW_MESSAGE_FROM_SERVER';
// const WRITE_MESSAGE = 'WRITE_MESSAGE';
// const POSTED_MESSAGE_TO_SERVER = 'POSTED_MESSAGE_TO_SERVER';


// //ACTION CREATORS
// export const gotMessagesFromServer = function (messages) {
// 	return {
// 	type: GOT_MESSAGES_FROM_SERVER,
// 	messages: messages
// 	};
// };

// export const gotNewMessageFromServer = function (message) {
// 	return {
// 	type: GOT_NEW_MESSAGE_FROM_SERVER,
// 	message: message
// 	};
// };

// export const writeMessage = function (inputContent) {
// 	return {
// 	type: WRITE_MESSAGE,
// 	newMessageEntry: inputContent
// 	};
// };


// //INITIAL STATE
// const initialState = {
// 	messages: [],
// 	newMessageEntry: ''
// };

// //REDUCER
// function reducer (prevState = initialState, action) {
// 	const newState = Object.assign({}, prevState);

//   switch (action.type) {
// 		case GOT_MESSAGES_FROM_SERVER:
// 		newState.messages = action.messages;
// 		return newState;

// 		case GOT_NEW_MESSAGE_FROM_SERVER:
// 		newState.messages = [...prevState.messages, action.message];
// 		return newState;

// 		case WRITE_MESSAGE:
// 		newState.newMessageEntry = action.newMessageEntry;
// 		return newState;

// 		default:
// 		return newState;
//   }
// }