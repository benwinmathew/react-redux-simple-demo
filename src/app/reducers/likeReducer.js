import { LIKE, DISLIKE, REPORT, SUBSCRIBE_CHANNEL } from '../constants' 

const initialValue = {

  img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-8E9iIg9wXMDAoDBh1OU0wF_3Jvi8FYjaMA&usqp=CAU',
  isSubscribed: false
}

//Reducer
const likeReducer = (state = initialValue, action) => {
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

  export default likeReducer;