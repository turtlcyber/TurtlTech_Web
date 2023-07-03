import React, { useState } from "react";
import Logo from "../../assets/img/logo-default1.png";
import { loginAdmin } from "../../apis/Apis";
import { useDispatch } from "react-redux";
import { loginAdminFn } from "../../redux/R_Action";
import { useNavigate } from "react-router-dom";

const LoginAdmin = () => {
   const history = useNavigate();
   const [loginData, setLoginData] = useState({
      email: "",
      password: "",
   });

   const dispatch = useDispatch();

   const loginFn = async () => {
      const EmailRegex = /^\w+([\.]?\w+)*@\w+([\.]?\w+)*(\.\w{2,3})+$/;
      const PasswordRegex = /^[a-zA-Z0-9*@]{8,15}$/;
      if(EmailRegex.test(loginData.email) && PasswordRegex.test(loginData.password)){
           await loginAdmin(loginData).then(res => {
            console.log(res.data);
            alert(res.data.message);
            dispatch(loginAdminFn(res.data.data));
            history("/admin");
           }).catch(err => {
            alert(err.response.data.message);
            console.log(err);
           })
      }
      else{
         alert('Please provide valid Credentials');
      }
   };

   return (
      <div className="text-start" style={{ margin: "120px 0 120px 0" }}>
         <div class="container">
            <div class="row">
               <div class="col-lg-10 offset-lg-1">
                  <h3 class="mb-3">Admin Login</h3>
                  <div class="bg-white shadow rounded">
                     <div class="row">
                        <div class="col-md-7 pe-0">
                           <div class="form-left h-100 py-5 px-5">
                              <div class="row g-5">
                                 <div class="col-12">
                                    <label>
                                       Admin Email
                                       <span class="text-danger">*</span>
                                    </label>
                                    <div class="input-group">
                                       <div class="input-group-text">
                                          <i class="bi bi-person-fill"></i>
                                       </div>
                                       <input
                                          type="text"
                                          class="form-control"
                                          placeholder="Enter Email"
                                          value={loginData.email}
                                          onChange={(e) =>
                                             setLoginData((old) => {
                                                return {
                                                   ...old,
                                                   email: e.target.value,
                                                };
                                             })
                                          }
                                       />
                                    </div>
                                 </div>

                                 <div class="col-12">
                                    <label>
                                       Password
                                       <span class="text-danger">*</span>
                                    </label>
                                    <div class="input-group">
                                       <div class="input-group-text">
                                          <i class="bi bi-lock-fill"></i>
                                       </div>
                                       <input
                                          type="text"
                                          class="form-control"
                                          placeholder="Enter Password 8-15 character"
                                          value={loginData.password}
                                          onChange={(e) =>
                                             setLoginData((old) => {
                                                return {
                                                   ...old,
                                                   password: e.target.value,
                                                };
                                             })
                                          }
                                       />
                                    </div>
                                 </div>

                                 <div class="col-12">
                                    <button
                                       type="submit"
                                       class="btn btn-primary px-4 float-end mt-4"
                                       onClick={() => loginFn()}
                                    >
                                       login
                                    </button>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="col-md-5 ps-0 d-none d-md-block">
                           <div class="form-right h-100 bg-primary text-white text-center pt-5">
                              <img src={Logo} width={300} />
                              <h2 class="fs-1">Admin Dashboard!!!</h2>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default LoginAdmin;
