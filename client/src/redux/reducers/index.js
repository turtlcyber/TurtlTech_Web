import { combineReducers } from 'redux';

import {blogOpenClose,userAuthObj,companyInfoFetchLost, SpinnerOpenClose,fileManagerOpenClose, loginOpenClose, sectionAdd, editBlog} from './AuthReducer';

export default combineReducers({
   blogOpenClose, sectionAdd, editBlog, loginOpenClose,userAuthObj, fileManagerOpenClose, SpinnerOpenClose,companyInfoFetchLost
})