import React, { useEffect, useState } from "react";
import { TfiClose } from "react-icons/tfi";
import "./styles/loginform.css";
import { useDispatch, useSelector } from "react-redux";
import { loginFormFnClose } from "../redux/R_Action";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { GoogleLogin } from "react-google-login";
const LoginForm = () => {
   const dispatch = useDispatch();
   const [isPasswordVisible, setIsPasswordVisibal] = useState(false);
   const { loginOpenClose } = useSelector((state) => state);

   let clientId =
      "1071769691163-9qm1qs54a9vu2hst6muc7uinvvradtp0.apps.googleusercontent.com";

   const handleCallbackResponse = (response) => {
      console.log("Encoded JWT ID token: ", response.credential);
      var userObject = jwtDecode(response.credential);
      dispatch(userFetch(userObject));
      console.log(userObject);
   };

   const googleAcc = () => {
      google.accounts.id.initialize({
         client_id:
            "1071769691163-9qm1qs54a9vu2hst6muc7uinvvradtp0.apps.googleusercontent.com",
         callback: handleCallbackResponse,
      });

      google.accounts.id.renderButton(document.getElementById("signInDiv"), {
         theme: "outline",
         size: "large",
      });
   };

   const onSuccess = (res) => {
      console.log("Login Success: ", res.profileObj);
   };

   const onFailure = (res) => {
      console.log("Login Failed: ", res);
   };

   useEffect(() => {}, []);
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
            display: loginOpenClose ? "block" : "none",
         }}
      >
         <div>
            <div className="d-flex justify-content-end mt-3 me-3">
               <TfiClose
                  role="button"
                  onClick={() => dispatch(loginFormFnClose())}
               />
            </div>

            <div className="" style={{ padding: "100px" }}>
               <div class="input-group mb-3">
                  <span
                     class="input-group-text"
                     id="basic-addon1"
                     style={{ width: "100px" }}
                  >
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
                  <span
                     class="input-group-text"
                     id="basic-addon1"
                     style={{ width: "100px" }}
                  >
                     Password
                  </span>
                  <input
                     type={isPasswordVisible ? "text" : "password"}
                     class="form-control"
                     placeholder="Password"
                     aria-label="Password"
                     aria-describedby="basic-addon1"
                  />
                  <div className="position-absolute mt-1" style={{ right: 10 }}>
                     {isPasswordVisible ? (
                        <BsEyeSlash
                           role="button"
                           size={25}
                           onClick={() => setIsPasswordVisibal(false)}
                        />
                     ) : (
                        <BsEye
                           role="button"
                           size={25}
                           onClick={() => setIsPasswordVisibal(true)}
                        />
                     )}
                  </div>
               </div>
               <GoogleLogin
                  clientId={clientId}
                  buttonText="Login"
                  onSuccess={onSuccess}
                  onFailure={onFailure}
                  cookiePolicy="single_host_origin"
                  isSignedIn={true}
               />
            </div>
         </div>
      </div>
   );
};

export default LoginForm;
