import { ActionType } from "../ActionType"
const sections = {
   title:'',
   bannerImg:'',
   content:[],
   quoet:'',
 }
 const blogInitial = {
   blogTitle:'',
   coverImg:'',
   tags:[],
   description:'',
   sections:[]
 }
 const userInfo = {
    aud: "",
    azp: "",
    email: "",
    email_verified:false,
    exp: "",
    family_name:"",
    given_name:"",
    iat: "",
    iss: "",
    name :"",
    picture:"",
    sub: "",
  }
  
export const blogOpenClose = (state = false,action) => {
   switch (action.type){
      case ActionType.BLOG_MODEL_OPEN:
         return true;
      case ActionType.BLOG_MODEL_CLOSE : 
         return false;
      default : return false;
   }
}

export const sectionAdd = (state = sections, action) => {
   switch(action.type){
      case ActionType.BLOG_SEC_ADD:
         return action.payload;
      case ActionType.BLOG_SEC_CLEAR:
         return action.payload;
      default : return sections;
   }
}

export const editBlog = (state={}, action) => {
   switch(action.type){
      case ActionType.BLOG_EDIT :
         return action.payload;
      default: return {}
   }
}

export const loginOpenClose = (state={}, action) => {
   switch(action.type){
      case ActionType.LOGIN_FORM_OPEN :
         return true;
      case ActionType.LOGIN_FORM_CLOSE :
         return false;
      default: return false;
   }
}

export const userAuthObj = (state=userInfo, action) => {
   switch(action.type){
      case ActionType.USER_FETCH :
         return action.payload;
      case ActionType.LOGIN_FORM_CLOSE :
         return userInfo;
      default: return userInfo;
   }
}

export const fileManagerOpenClose = (state=false, action) => {
   switch(action.type){
      case ActionType.ADMIN_FILEMANAGER_OPEN :
         state = true;
         return state;
      case ActionType.ADMIN_FILEMANAGER_CLOSE :
         state = false;
         return state;
      default: return state;
   }
}

export const SpinnerOpenClose = (state=false, action) => {
   switch(action.type){
      case ActionType.SPINNER_OPEN :
         state = true;
         return state;
      case ActionType.SPINNER_CLOSE :
         state = false;
         return state;
      default: return state;
   }
}

export const adminLoginToken = (state={token:'', flag:false}, action) => {
   switch(action.type){
      case ActionType.ADMIN_LOGIN_TOKEN :
         state.flag = true;
         state.token = action.payload;
         return state;
      case ActionType.ADMIN_LOGIN_LOST :
         state.flag = false;
         state.token = "";
         return state;
      default: return state;
   }
}



export const companyInfoFetchLost = (state = {}, action) => {
   
   switch(action.type){
      case ActionType.COMPANY_INFO_FETCH :
         state = action.payload;
         return state;
      case ActionType.COMPANY_INFO_LOST :
         state = {};
         return state;
      default: return state;
   }
}