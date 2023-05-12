import { combineReducers } from 'redux';

import {blogOpenClose,userAuthObj, loginOpenClose, sectionAdd, editBlog} from './AuthReducer';

export default combineReducers({
   blogOpenClose, sectionAdd, editBlog, loginOpenClose,userAuthObj
})