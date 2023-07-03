import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { blogBySlug } from "../apis/Apis";
import Parser from "html-react-parser";
import "./blogPreview.css";
import { TbHeartPlus } from "react-icons/tb";
import likeImg from "../assets/like_icon/like.png";
import loveImg from "../assets/like_icon/love.png";
import hahaImg from "../assets/like_icon/haha.png";
import wowImg from "../assets/like_icon/wow.png";
import angryImg from "../assets/like_icon/angry.png";
import fireImg from "../assets/like_icon/fire.png";
import { LikeEnum } from "../utils/Enums";
import Cookies from 'js-cookie';
import Prism from "prismjs";
import LoginForm from "../components/LoginForm";
import { Helmet } from "react-helmet";
const BlogPreview = () => {
   const params = useParams();
   const [blog, setBlog] = useState(null);
   const [seoDataFromServer, setSeoDataFromServer] = useState({});
   let ipAddress = "localhost";
   // let ipAddress = "192.168.1.167";
   let port = 4001;

   const likeHandler = (likeType) => {
      console.log(Cookies);
      localStorage.setItem('userId', '@imniraj');
      Cookies.set('visitor',"this is a user id");
      console.log(likeType);
   }


   useEffect(() => {
      Prism.highlightAll();
      blogBySlug(params.slug)
         .then((res) => {
            console.log(res.data);
            setBlog(res.data.blog);
            if(res.data.blog.seoData){
               console.log("in",res.data.blog.seoData);
               setSeoDataFromServer({seoData: res.data.blog.seoData});
            }
            
         })
         .catch((err) => {
            console.log(err);
         });
   }, []);
   return (
      <>
      <Helmet>
            {seoDataFromServer.seoData &&
               seoDataFromServer.seoData.pageTitle && (
                  <title>{seoDataFromServer.seoData.pageTitle}</title>
               )}
            {seoDataFromServer.seoData &&
               seoDataFromServer.seoData.pageTitle && (
                  <meta
                     name="title"
                     property="og:title"
                     content={seoDataFromServer.seoData.pageTitle}
                  />
               )}
            {seoDataFromServer.seoData &&
               seoDataFromServer.seoData.pageDescription && (
                  <meta
                     name="description"
                     property="og:description"
                     content={seoDataFromServer.seoData.pageDescription}
                  />
               )}
            {seoDataFromServer.seoData &&
               seoDataFromServer.seoData.pageKeywords && (
                  <meta
                     name="keywords"
                     property="og:keywords"
                     content={seoDataFromServer.seoData.pageKeywords}
                  />
               )}
            {seoDataFromServer.seoData && seoDataFromServer.seoData.pageUrl && (
               <meta
                  name="url"
                  property="og:url"
                  content={seoDataFromServer.seoData.pageUrl}
               />
            )}
            {seoDataFromServer.seoData &&
               seoDataFromServer.seoData.siteName && (
                  <meta
                     name="site_name"
                     property="og:site_name"
                     content={seoDataFromServer.seoData.siteName}
                  />
               )}
            {seoDataFromServer.seoData &&
               seoDataFromServer.seoData.imageUrl && (
                  <meta
                     name="image"
                     property="og:image"
                     content={seoDataFromServer.seoData.imageUrl}
                  />
               )}
            {seoDataFromServer.seoData &&
               seoDataFromServer.seoData.imageUrl && (
                  <meta property="og:image:type" content="image/png" />
               )}
            {seoDataFromServer.seoData &&
               seoDataFromServer.seoData.imageWidth && (
                  <meta
                     property="og:image:width"
                     content={seoDataFromServer.seoData.imageWidth}
                  />
               )}
            {seoDataFromServer.seoData &&
               seoDataFromServer.seoData.imageHight && (
                  <meta
                     property="og:image:height"
                     content={seoDataFromServer.seoData.imageHight}
                  />
               )}
         </Helmet>
      
         <div
            class="blog"
            style={{ paddingTop: "5rem", backgroundColor: "#f5f5f5" }}
         >
            
            <div className="container">
               <div className="row">
                  <div className="col-12 col-xl-1" style={{zIndex:2000}}>
                     <div className="blog-sidebar">
                        <div class="like-container">
                           <div role="button" className="row">
                              <TbHeartPlus size={30} color="#727375" />
                              <span>10</span>
                           </div>
                           <div class="popup-like">
                              
                              <div className="d-flex justify-content-between align-items-center p-3">
                                 <div role="button" className="likeicon" onClick={() => likeHandler(LikeEnum.LIKE)}>
                                    <img
                                       src={likeImg}
                                       width={50}
                                       className="mx-3"
                                    />
                                    <span>10</span>
                                 </div>
                                 <div role="button" className="likeicon" onClick={() => likeHandler(LikeEnum.LOVE)}>
                                    <img
                                       src={loveImg}
                                       width={50}
                                       className="mx-3"
                                    />
                                    <span>10</span>
                                 </div>
                                 <div role="button" className="likeicon" onClick={() => likeHandler(LikeEnum.WOW)}>
                                    <img
                                       src={wowImg}
                                       width={50}
                                       className="mx-3"
                                    />
                                    <span>10</span>
                                 </div>
                                 <div role="button" className="likeicon" onClick={() => likeHandler(LikeEnum.HAHA)}>
                                    <img
                                       src={hahaImg}
                                       width={50}
                                       className="mx-3"
                                    />
                                    <span>10</span>
                                 </div>
                                 <div role="button" className="likeicon" onClick={() => likeHandler(LikeEnum.FIRE)}>
                                    <img
                                       src={fireImg}
                                       width={50}
                                       className="mx-3"
                                    />
                                    <span>10</span>
                                 </div>
                                 <div role="button" className="likeicon" onClick={() => likeHandler(LikeEnum.ANGRY)}>
                                    <img
                                       src={angryImg}
                                       width={50}
                                       className="mx-3"
                                    />
                                    <span>10</span>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className="col-12 col-xl-11 border border-1 rounded-3 bg-white" >
                     <div className="posts-grid horizontal py-5">
                        {blog && (
                           <div class="row">
                              <div class="col-12 col-lg-10 mx-auto">
                                 <h2 class="post-title text-start">{blog.blogTitle}</h2>
                                 <div class="post-img-wrapper post-featured-area">
                                    {
                                       <img
                                          class="featured-img"
                                          loading="lazy"
                                          src={blog.coverImg.imageUrl}
                                          alt={blog.coverImg.altText}
                                       />
                                    }
                                 </div>
                                 
                              </div>
                              <div class="col-12 col-lg-10 mx-auto">
                                 <div class="post-main-area">
                                    {<p className="blogdesc">{blog.description}</p>}
                                    <hr />
                                    {blog.sections.map((el, idx) => (
                                       <>
                                          <div className="turtlBlog parsedContent text-start mb-5">
                                             {Parser(el.content)}
                                          </div>
                                          {el.imgUrl && (
                                             <img
                                                width={"100%"}
                                                src={`http://${ipAddress}:${port}${el.imgUrl}`}
                                             />
                                          )}
                                       </>
                                    ))}

                                    {blog.tags.length && (
                                       <div class="tags panel">
                                          <ul class="sidebar-list tags-list ">
                                             <li class="tags-icon-label ">
                                                <i class="fas fa-tags icon"></i>
                                             </li>
                                             {blog.tags.map((el, i) => (
                                                <li
                                                   class="tag-item"
                                                   key={`${i}_tag`}
                                                >
                                                   <a
                                                      class="tag-link"
                                                      href="all-services.html"
                                                   >
                                                      #{el}
                                                   </a>
                                                </li>
                                             ))}
                                          </ul>
                                       </div>
                                    )}
                                 </div>
                              </div>
                           </div>
                        )}
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default BlogPreview;
