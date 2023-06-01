import { combineReducers } from 'redux';

import {blogOpenClose,userAuthObj, adminLoginToken,companyInfoFetchLost, SpinnerOpenClose,fileManagerOpenClose, loginOpenClose, sectionAdd, editBlog} from './AuthReducer';

export default combineReducers({
   blogOpenClose, sectionAdd, adminLoginToken, editBlog, loginOpenClose,userAuthObj, fileManagerOpenClose, SpinnerOpenClose,companyInfoFetchLost
})