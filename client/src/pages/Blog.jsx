import React from "react";
import webApplication from "../assets/img/What-is-a-Web-Application.jpg";
import recent from "../assets/img/What-is-a-Web-Application.jpg";
import blogImage from "../assets/img/blog-img.jpg";
import { Helmet } from "react-helmet";
import { useEffect } from "react";
import { useState } from "react";
import { allBlogs, getPageImagesByPageName, getSeoByPageName } from "../apis/Apis";
import LocalDateFormat from "../utils/LocalDateFormat";
import { Link, useNavigate } from "react-router-dom";
const Blog = () => {
  const history = useNavigate();
  let ipAddress = '192.168.1.136';
  let port = 4001;

  const [blogs, setBlogs] = useState([]);
  const [coverImage, setCoverImage] = useState({ url: "", alt: "" });
  const [seoDataFromServer, setSeoDataFromServer] = useState({});
   const getSEOdata = () => {
      getSeoByPageName("BLOG")
         .then((res) => {
            console.log(res.data.data);
            setSeoDataFromServer(res.data.data);
         })
         .catch((err) => {
            console.log(err);
         });
   };
   const getCoverImageByPageName = () => {
      getPageImagesByPageName("BLOG").then((res) => {
         setCoverImage({
            url: res.data.data.imageUrl,
            alt: res.data.data.altText,
         });
      });
   };

  const fetchBlogs = async () => {
    await allBlogs().then(res => {
      setBlogs(res.data.blogs);
      console.log(res.data);
    }).catch(err => {
      console.log(err);
    })
  }

  const openBLog = (slug) => {
    history(`/blog/${slug}`);
    console.log(slug);
  }
  useEffect(() => {
    fetchBlogs();
    getCoverImageByPageName();
    getSEOdata();
  },[])

  return (
    <div>
      <Helmet>
            
            <title>{seoDataFromServer.seoData ? seoDataFromServer.seoData.pageTitle : 'Blog'}</title>
               
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
      <section id="page-hero">

        <div>
            <div style={{ position: "relative", height: "100%", maxHeight:'900px', overflow:'hidden' }}>
               <div className="coverImageTextDiv">
               <div class="container">
               <div class="hero-text-area centerd">
                  <h1 class="hero-title  wow fadeInUp" data-wow-delay=".2s" style={{fontSize:'4rem', fontWeight:'bold'}}>
                  Blog
                  </h1>
                  <nav aria-label="breadcrumb ">
                     <ul class="breadcrumb wow fadeInUp" data-wow-delay=".6s">
                        <li class="breadcrumb-item">
                           <Link class="breadcrumb-link" to="/service">
                              <i class="bi bi-house icon "></i>home
                           </Link>
                        </li>
                        <li class="breadcrumb-item active">blog</li>
                     </ul>
                  </nav>
               </div>
            </div>
               </div>
               <div className="coverImageOverlayDiv"></div>
               <img
                  width={"100%"}
                  height={"100%"}
                  src={coverImage.url}
                  alt={coverImage.alt}
                  style={{ objectFit: "cover" }}
               />
              
            </div>
         </div>
      </section>
      <section className="blog blog-home mega-section">
        <div className="container ">
          <div className="row ">
            <div className="col-12 col-xl-8 ">
              <div className="posts-grid horizontal">
                <div className="row text-start">
                  {
                    blogs.map((el, idx) => (
                      <div className="col-12 ">
                    <div className="post-box">
                      {" "}
                      <a
                        className="post-link"
                       
                        title={el.blogTitle}
                      >
                        <div className="post-img-wrapper  ">
                          <img
                            className=" parallax-img   post-img"
                            loading="lazy"
                            style={{
                              width:400,
                              height:280
                            }}
                            src={el.coverImg.imageUrl}
                            alt={el.coverImg.altText}
                          />
                          <span className="post-date">
                            {/* <span className="day">05 </span>April 2023{" "} */}
                            {LocalDateFormat(el.publishedAt)}
                          </span>
                        </div>
                      </a>
                      <div className="post-summary">
                        {/* <div className="post-info">
                          <a className="info post-cat" >
                            {" "}
                            <i className="bi bi-bookmark icon"></i>hosting
                          </a>
                          <a className="info post-author" >
                            {" "}
                            <i className=" bi bi-person icon"></i>Allan Moore
                          </a>
                        </div> */}
                        <div className="post-text">
                          <a className="post-link" >
                            <h2 className="post-title">
                              {el.blogTitle}
                            </h2>
                          </a>
                          <p className="post-excerpt">
                            {el.description}
                          </p>
                          <a
                            className="read-more "
                            style={{cursor:'pointer'}}
                            title="How litespeed technology works to speed up your site "
                            onClick={() => openBLog(el.slug)}
                          >
                            read more<i className="bi bi-arrow-right icon "></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                    ))
                  }
                  
                  <div className="col-12">
                    <nav className="ma-pagination">
                      <ul className="pagination justify-content-center">
                        <li className="ma-page-item deactive-page-item">
                          <a
                            className="ma-page-link "
                            
                            title="Previous Page"
                          >
                            <i className="bi bi-chevron-left icon "></i>
                          </a>
                        </li>
                        <li className="ma-page-item active">
                          <a className="ma-page-link ">
                            1{" "}
                          </a>
                        </li>
                        <li className="ma-page-item  ">
                          <a className="ma-page-link " >
                            2{" "}
                          </a>
                        </li>
                        <li className="ma-page-item  ">
                          <a className="ma-page-link " >
                            3{" "}
                          </a>
                        </li>
                        <li className="ma-page-item  ">
                          <a className="ma-page-link " >
                            4{" "}
                          </a>
                        </li>
                        <li className="ma-page-item  ">
                          <a className="ma-page-link " >
                            5{" "}
                          </a>
                        </li>
                        <li className="ma-page-item  ">
                          <a className="ma-page-link " >
                            6{" "}
                          </a>
                        </li>
                        <li className="ma-page-item">
                          <a className="ma-page-link"  title="Next Page">
                            <i className="bi bi-chevron-right icon "></i>
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-xl-4 ">
              <div className="blog-sidebar">
                <div className="search sidebar-box">
                  <form className="search-form" action="#">
                    <input
                      className="search-input"
                      type="search"
                      name="seach_form"
                      placeholder="Search Posts..."
                    />
                    <button className="search-btn" type="submit">
                      <i className="bi bi-search icon"></i>
                    </button>
                  </form>
                </div>

                <div className="cats sidebar-box">
                  <h6 className="sidebar-box-title">Categories:</h6>
                  <ul className="sidebar-list cats-list  ">
                    <li className="cat-item">
                      <a className="cat-link" >
                        data<span className="cat-count">17</span>
                      </a>
                    </li>
                    <li className="cat-item">
                      <a className="cat-link" >
                        web dev <span className="cat-count">25</span>
                      </a>
                    </li>
                    <li className="cat-item">
                      <a className="cat-link" >
                        hosting<span className="cat-count">14</span>
                      </a>
                    </li>
                    <li className="cat-item">
                      <a className="cat-link" >
                        domain names<span className="cat-count">73</span>
                      </a>
                    </li>
                    <li className="cat-item">
                      <a className="cat-link" >
                        apps<span className="cat-count">36</span>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="recent-posts sidebar-box">
                  <h6 className="sidebar-box-title">recent posts: </h6>
                  <ul className="sidebar-list r-posts-list ">
                    <li className="r-post-item">
                      <a className="r-post-link" >
                        <div className="r-post-img-wrapper">
                          <img
                            className="r-post-img"
                            loading="lazy"
                            src={recent}
                            alt="recent post image"
                          />
                        </div>
                        <div className="content">
                          <h6 className="r-post-title">
                            this is the article title
                          </h6>
                          <span className="r-post-date">April, 15 2023 </span>
                        </div>
                      </a>
                    </li>
                    <li className="r-post-item">
                      <a className="r-post-link" >
                        <div className="r-post-img-wrapper">
                          <img
                            className="r-post-img"
                            loading="lazy"
                            src={recent}
                            alt="recent post image"
                          />
                        </div>
                        <div className="content">
                          <h6 className="r-post-title">
                            this is the article title
                          </h6>
                          <span className="r-post-date">may, 10 2023 </span>
                        </div>
                      </a>
                    </li>
                    <li className="r-post-item">
                      <a className="r-post-link" >
                        <div className="r-post-img-wrapper">
                          <img
                            className="r-post-img"
                            loading="lazy"
                            src={recent}
                            alt="recent post image"
                          />
                        </div>
                        <div className="content">
                          <h6 className="r-post-title">
                            this is the article title
                          </h6>
                          <span className="r-post-date">feb, 28 2023 </span>
                        </div>
                      </a>
                    </li>
                    <li className="r-post-item">
                      <a className="r-post-link" >
                        <div className="r-post-img-wrapper">
                          <img
                            className="r-post-img"
                            loading="lazy"
                            src={recent}
                            alt="recent post image"
                          />
                        </div>
                        <div className="content">
                          <h6 className="r-post-title">
                            this is the article title
                          </h6>
                          <span className="r-post-date">jun, 07 2023 </span>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="tags sidebar-box">
                  <h6 className="sidebar-box-title">tags:</h6>
                  <ul className="sidebar-list tags-list ">
                    <li className="tag-item">
                      <a className="tag-link" >
                        Cyber security
                      </a>
                    </li>
                    <li className="tag-item">
                      <a className="tag-link" >
                        VAPT
                      </a>
                    </li>
                    <li className="tag-item">
                      <a className="tag-link" >
                        Mobile Pen Testing
                      </a>
                    </li>
                    <li className="tag-item">
                      <a className="tag-link" >
                        Web Appliction Testing
                      </a>
                    </li>
                    <li className="tag-item">
                      <a className="tag-link" >
                        API Testing
                      </a>
                    </li>
                    <li className="tag-item">
                      <a className="tag-link" >
                        Web Developemt
                      </a>
                    </li>
                    <li className="tag-item">
                      <a className="tag-link" >
                        wordpress
                      </a>
                    </li>
                    <li className="tag-item">
                      <a className="tag-link" >
                        App Developemt
                      </a>
                    </li>
                    <li className="tag-item">
                      <a className="tag-link" >
                        Game Developemt
                      </a>
                    </li>
                    <li className="tag-item">
                      <a className="tag-link" >
                        services
                      </a>
                    </li>
                    <li className="tag-item">
                      <a className="tag-link" >
                        Billing Software
                      </a>
                    </li>
                    <li className="tag-item">
                      <a className="tag-link" >
                        SCO
                      </a>
                    </li>
                    <li className="tag-item">
                      <a className="tag-link" >
                        Digital Marketing
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
