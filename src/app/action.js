import { LIKE, DISLIKE, REPORT, SUBSCRIBE_CHANNEL } from './constants' 

//Actions
export const likeAction = () => ({type: LIKE});
export const dislikeAction = () => ({type: DISLIKE});
export const reportAction = () => ({type: REPORT});
export const subscribeAction = () => ({type: SUBSCRIBE_CHANNEL});