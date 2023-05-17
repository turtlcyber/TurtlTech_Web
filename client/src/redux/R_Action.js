import {ActionType} from './ActionType';
export const blogModelOpenFn = () => {
   return {
      type: ActionType.BLOG_MODEL_OPEN,
   }
}
export const blogModelCloseFn = () => {
   return {
      type: ActionType.BLOG_MODEL_CLOSE,
   }
}

export const blogSectionAdd = (data) => {
   return {
      type: ActionType.BLOG_SEC_ADD,
      payload: data,
   }
}

export const blogSectionClear = () => {
   return {
      type: ActionType.BLOG_SEC_CLEAR
   }
}

export const blogEditFn = (data) => {
   return {
      type: ActionType.BLOG_EDIT,
      payload: data,
   }
}

export const loginFormFnOpen = () => {
   return {
      type: ActionType.LOGIN_FORM_OPEN,
   }
}

export const loginFormFnClose = () => {
   return {
      type: ActionType.LOGIN_FORM_CLOSE,
   }
}


export const userFetch = (data) => {
   return {
      type: ActionType.USER_FETCH,
      payload:data,
   }
}


export const userClear = () => {
   return {
      type: ActionType.USER_CLEAR,
   }
}

export const filemanagerOpen = () => {
   return {
      type: ActionType.ADMIN_FILEMANAGER_OPEN,
   }
}
export const filemanagerClose = () => {
   return {
      type: ActionType.ADMIN_FILEMANAGER_CLOSE,
   }
}