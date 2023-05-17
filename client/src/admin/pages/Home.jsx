import React from "react";
import { Helmet } from "react-helmet";
import Header from "../components/header";
import Sidebar from "../components/sidebar";
import { Route, Routes } from "react-router-dom";
import BlogPost from './BlogPost';
import FileManager from "../components/FileManager";

const Homo = ( {component}) => {
   
   return (
      <React.Fragment>
       <FileManager/>
         <Helmet>
            <title>Admin Home</title>
            <meta name="title" property="og:title" content="Admin Page"/>
            <meta property="og:image" content="https://w7.pngwing.com/pngs/870/20/png-transparent-graphy-50-years-emblem-label-trademark-thumbnail.png"/>
         </Helmet>
         <Header />
         <div className="row mt-5">
            <div className="col-2" style={{height:'100vh', marginTop:55}}>
               <Sidebar />
            </div>
            <div className="col" style={{overflowY:'scroll', marginTop:5}}>
               <div style={{marginTop:'70px'}}>
               {component && component}
               </div>
            </div>
         </div>
      </React.Fragment>
   );
};

export default Homo;
