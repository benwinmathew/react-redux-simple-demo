import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from "redux";
import { Provider } from 'react-redux';


//Selector
const LIKE = "LIKE";
const DISLIKE = "DISLIKE";
const REPORT = "REPORT"
const SUBSCRIBE_CHANNEL = "SUBSCRIBE_CHANNEL";

//Actions
export const likeAction = () => ({type: LIKE});
export const dislikeAction = () => ({type: DISLIKE});
export const reportAction = () => ({type: REPORT});
export const subscribeAction = () => ({type: SUBSCRIBE_CHANNEL});

const initialValue = {

  img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-8E9iIg9wXMDAoDBh1OU0wF_3Jvi8FYjaMA&usqp=CAU',
  isSubscribed: false

}

//Reducer
const likesReducer = (state = initialValue, action) => {
  switch (action.type) {
    case SUBSCRIBE_CHANNEL:
      return {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-8E9iIg9wXMDAoDBh1OU0wF_3Jvi8FYjaMA&usqp=CAU',
          isSubscribed: !state.isSubscribed
      }
      case LIKE:
        return {
          ...state,
          img: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/285/thumbs-up_1f44d.png'
        }
        case DISLIKE:
          return {
            ...state,
            img: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/285/thumbs-down_1f44e.png'
          }
          case REPORT:
            return {
              ...state,
              img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYgz9CGTL0zN1KncxOIrJfJ-1twdl1XEuHopy5BHLpQuR6XLyfvtwZj6zwfD_F-xLS5MM&usqp=CAU'
            }
            default:
              return {
                ...state
              }
  }
}

//Store
let store = createStore(likesReducer);


ReactDOM.render( 
  <Provider store = {store} >
    <App /> 
  </Provider>,
  document.getElementById('root')
);