import React, { useState } from "react";
import Header from "../admin/components/header";
import Home from "../admin/pages/Home";
import { Route, Routes } from "react-router-dom";
import BlogPost from "../admin/pages/BlogPost";
import CreateBlog from "../admin/pages/CreateBlog";
import Homepage from "../admin/pages/Homepage";
import TurtlsInfo from "../admin/pages/TurtlsInfo";
import Portfolio from "../admin/pages/Portfolio";
import ServiceCategory from "../admin/pages/ServiceCategory";
import LoginAdmin from "../admin/pages/LoginAdmin";
import { useSelector } from "react-redux";

const AdminRoute = () => {
    const state = useSelector(state => state);
    
   return (
      <>
         {state.adminLoginToken.flag ? (
            <Routes>
               <Route
                  path="/admin"
                  element={<Home component={<Homepage />} />}
               />
               <Route
                  path="/admin/home"
                  element={<Home component={<Homepage />} />}
               />
               <Route
                  path="/admin/turtlsinfo"
                  element={<Home component={<TurtlsInfo />} />}
               />
               <Route
                  path="/admin/blogpost"
                  element={<Home component={<BlogPost />} />}
               />
               <Route
                  path="/admin/createblog"
                  element={<Home component={<CreateBlog />} />}
               />
               <Route
                  path="/admin/portfolio"
                  element={<Home component={<Portfolio />} />}
               />
               <Route
                  path="/admin/servicecategory"
                  element={<Home component={<ServiceCategory />} />}
               />
            </Routes>
         ) : (
          <Routes>
            <Route path="/admindashboard" element={<LoginAdmin/>} />
          </Routes>
         )}
      </>
   );
};

export default AdminRoute;
