import React, { useState } from "react";
import { TfiClose } from "react-icons/tfi";
import "./styles/loginform.css";
import { useDispatch, useSelector } from "react-redux";
import { loginFormFnClose } from "../redux/R_Action";
import {BsEye, BsEyeSlash} from 'react-icons/bs';
const LoginForm = () => {
   const dispatch = useDispatch();
   const [isPasswordVisible, setIsPasswordVisibal] = useState(false);
   const {loginOpenClose} = useSelector(state => state);
   return (
      <div
         className="position-fixed border bg-white rounded rounded-4 border border-3"
         style={{
            minHeight: "500px",
            maxHeight: "500px",
            width: "40%",
            maxWidth: "40%",
            left: "50%",
            top: 100,
            transform: "translateX(-50%)",
            zIndex: 5000,
            display: loginOpenClose ? 'block' :'none'
         }}
      >
         <div>
            <div className="d-flex justify-content-end mt-3 me-3">
               <TfiClose role="button" onClick={() => dispatch(loginFormFnClose())}/>
            </div>

            <div className="" style={{padding:'100px'}}>
               <div class="input-group mb-3">
                  <span class="input-group-text" id="basic-addon1" style={{width:'100px'}}>
                     Email
                  </span>
                  <input
                     type="email"
                     class="form-control"
                     placeholder="Username"
                     aria-label="Username"
                     aria-describedby="basic-addon1"
                  />
               </div>
               <div class="input-group mb-3">
                  <span class="input-group-text" id="basic-addon1" style={{width:'100px'}}>
                     Password
                  </span>
                  <input
                     type={isPasswordVisible ? 'text' : 'password'}
                     class="form-control"
                     placeholder="Password"
                     aria-label="Password"
                     aria-describedby="basic-addon1"
                  />
                  <div className="position-absolute mt-1" style={{right:10,}}>
                     {
                        isPasswordVisible ? <BsEyeSlash role="button" size={25} onClick={() => setIsPasswordVisibal(false)}/> : <BsEye role="button" size={25} onClick={() => setIsPasswordVisibal(true)}/>
                     }
                  </div>
               </div>
               <div id="signInDiv"></div>
            </div>
         </div>
      </div>
   );
};

export default LoginForm;
