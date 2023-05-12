import React from "react";
import { Helmet } from "react-helmet";
import Header from "../components/header";
import Sidebar from "../components/sidebar";
import { Route, Routes } from "react-router-dom";
import BlogPost from './BlogPost';

const Homo = ( {component}) => {
   
   return (
      <React.Fragment>
         <Helmet>
            <title>Admin Home</title>
         </Helmet>
         <Header />
         <div className="row"  style={{marginTop:'65px'}}>
            <div className="col-2" style={{height:'100vh'}}>
               <Sidebar />
            </div>
            <div className="col" style={{overflowY:'scroll', marginTop:5}}>
               {component && component}
            </div>
         </div>
      </React.Fragment>
   );
};

export default Homo;
