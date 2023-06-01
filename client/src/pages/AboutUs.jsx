import React, { useEffect, useState } from "react";
import image1 from "../assets/images/img01.jpg";
import ExperienceTeam from "../assets/icons/EXPERIENCED TEAM.png";
import strategic from "../assets/icons/strategic.png";
import innovation from "../assets/icons/innovation.png";
import creative from "../assets/icons/CREATIVE APPROACH.png";
import blog2_home from "../assets/img/blog-2-home.jpg";
import blog2 from "../assets/img/d9.jpeg";
import blog3 from "../assets/img/d9.jpeg";
import abotUs from "../assets/img/abouts.jpg";
import visionImage from "../assets/img/3.png";
import { Helmet } from "react-helmet";
import Testimonials from "../components/Testimonials";
import Carousel from "carousel-react-rcdev";
import NoImage from "../assets/images/NoImage.jpg";
import { IoCaretForwardOutline, IoCaretBackOutline } from "react-icons/io5";
import { RiStarFill, RiStarHalfFill } from "react-icons/ri";
import { allBlogs, getAllTestimonialApi, getPageImagesByPageName, getSeoByPageName } from "../apis/Apis";
import { Link, useNavigate } from "react-router-dom";
import LocalDateFormat from "../utils/LocalDateFormat";

const AboutUs = () => {
   const [testimonials, setTestimonials] = useState([]);
   const [coverImage, setCoverImage] = useState({ url: "", alt: "" });
   const [seoDataFromServer, setSeoDataFromServer] = useState({});
   const [blogs, setBlogs] = useState([]);
   const history = useNavigate();
   const getCoverImageByPageName = () => {
      getPageImagesByPageName("ABOUTUS").then((res) => {
         setCoverImage({
            url: res.data.data.imageUrl,
            alt: res.data.data.altText,
         });
      });
   };

   const getAllTestimonial = () => {
      getAllTestimonialApi()
         .then((res) => {
            setTestimonials(res.data.data);
            console.log(res.data.data);
         })
         .catch((err) => {
            console.log(err);
         });
   };
   const fetchBlogs = async () => {
      await allBlogs()
         .then((res) => {
            setBlogs(res.data.blogs);
            console.log(res.data);
         })
         .catch((err) => {
            console.log(err);
         });
   };
   const openBLog = (slug) => {
      history(`/blog/${slug}`);
      console.log(slug);
   };
   const getSEOdata = () => {
      getSeoByPageName("ABOUTUS")
         .then((res) => {
            console.log(res.data.data);
            setSeoDataFromServer(res.data.data);
         })
         .catch((err) => {
            console.log(err);
         });
   };
   useEffect(() => {
      getCoverImageByPageName();
      getSEOdata();
      getAllTestimonial();
      fetchBlogs();
   }, []);
   return (
      <div>
         <Helmet>
            
            <title>{seoDataFromServer.seoData ? seoDataFromServer.seoData.pageTitle : 'About us'}</title>
               
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
         <section
            
            id="page-hero"
            
         >
            
            <div>
            <div style={{ position: "relative", height: "100%", maxHeight:'900px', overflow:'hidden' }}>
               <div className="coverImageTextDiv">
               <div class="container">
               <div class="hero-text-area centerd">
                  <h1 class="hero-title  wow fadeInUp" data-wow-delay=".2s" style={{fontSize:'4rem', fontWeight:'bold'}}>
                     About us
                  </h1>
                  <nav aria-label="breadcrumb ">
                     <ul class="breadcrumb wow fadeInUp" data-wow-delay=".6s">
                        <li class="breadcrumb-item">
                           <Link class="breadcrumb-link" to="/service">
                              <i class="bi bi-house icon "></i>home
                           </Link>
                        </li>
                        <li class="breadcrumb-item active">about us</li>
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

         <section class="about mega-section" id="about">
            <div class="container">
               <div class="content-block">
                  <div class="row">
                     <div
                        class="col-12 col-lg-6 d-flex align-items-center order-1 order-lg-0 about-col pad-end wow fadeInUp"
                        data-wow-delay="0.6s"
                     >
                        <div class="text-area">
                           <div class="sec-heading light-title">
                              <div class="content-area">
                                 <span
                                    class="pre-title wow fadeInUp"
                                    data-wow-delay=".2s"
                                 >
                                    OUR FEATURES
                                 </span>
                                 <h2
                                    class="title wow fadeInUp"
                                    data-wow-delay=".4s"
                                 >
                                    <span class="hollow-text">Why</span>
                                    Businesses
                                    <span class="featured-text">
                                       Choose Us
                                       <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 500 150"
                                          preserveAspectRatio="none"
                                       ></svg>
                                    </span>
                                 </h2>
                              </div>
                           </div>
                           <p class="about-text">
                              Cyber Security is something that every corner of
                              the world needs. Here mentioned are some features
                              that make us stand out...
                           </p>
                           <div class="info-items-list">
                              <div class="row">
                                 <div class="col-9 col-xl-6">
                                    <div class="info-item">
                                       <img
                                          src={ExperienceTeam}
                                          width={100}
                                          alt=""
                                       />{" "}
                                       <br />
                                       <div class="info-content">
                                          <h5 class="info-title">
                                             EXPERIENCED TEAM
                                          </h5>
                                          <p class="info-text">
                                             The strenght of our team lies in
                                             their passion and authenticity. We
                                             have well groomed members; bright
                                             minds with grip on the latest
                                             technology.
                                          </p>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="col-9 col-xl-6">
                                    <div class="info-item">
                                       <img
                                          src={strategic}
                                          width={100}
                                          alt=""
                                       />
                                       <div class="info-content">
                                          <h5 class="info-title">
                                             STRATEGIC THINKING
                                          </h5>
                                          <p class="info-text">
                                             Lorem ipsum dolor sit amet
                                             consectetur adipisicing elit.
                                             Aspernatur, iste
                                          </p>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="col-9 col-xl-6">
                                    <div class="info-item">
                                       <img
                                          src={innovation}
                                          width={100}
                                          alt=""
                                       />
                                       <div class="info-content">
                                          <h5 class="info-title">
                                             INNOVATIVE BUSINESS
                                          </h5>
                                          <p class="info-text">
                                             Main domain being in Cyber
                                             Security, our business also
                                             provides Game Development, App
                                             Development, Web Designing and
                                             Development, pen-testing, marketing
                                             services.
                                          </p>
                                       </div>
                                    </div>
                                 </div>

                                 <div class="col-9 col-xl-6">
                                    <div class="info-item">
                                       <img src={creative} width={100} alt="" />
                                       <div class="info-content">
                                          <h5 class="info-title">
                                             CREATIVE APPROACH
                                          </h5>
                                          <p class="info-text">
                                             Following our vision, we think
                                             strategically each step further. We
                                             aim to reach our goal via the right
                                             path.
                                          </p>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div class="cta-area">
                              <a
                                 class="btn-solid reveal-start"
                              >
                                 Get in touch
                              </a>
                              <div class="signature">
                                 <div class="signature-img"></div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div
                        class="col-12 col-lg-6 d-flex align-items-center order-0 order-lg-1 about-col wow fadeInUp"
                        data-wow-delay="0.2s"
                     >
                        <div class="img-area" data-tilt>
                           <div class="image">
                              <img
                                 class="about-img img-fluid"
                                 loading="lazy"
                                 src={visionImage}
                                 alt="Our vision"
                              />
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         <section class=" mega-section border-top">
            <div className="container">
               <h2 className="title wow fadeInUp mb-5" data-wow-delay=".4s">
                  <span className="hollow-text">Testimonials</span>
               </h2>
               <div
                  id="testimonialIndicators"
                  class="carousel slide"
                  style={{ paddingLeft: "100px", paddingRight: "100px" }}
               >
                  <div class="carousel-indicators" id="testimonialBtn">
                     {testimonials &&
                        testimonials.map((el, i) => (
                           <button
                              type="button"
                              id="testBtn"
                              data-bs-target="#testimonialIndicators"
                              data-bs-slide-to={i}
                              class="active"
                              aria-current="true"
                              aria-label={`Slide ${i + 1}`}
                           ></button>
                        ))}
                  </div>
                  <div class="carousel-inner">
                     {testimonials &&
                        testimonials.map((el, i) => (
                           <div class={`carousel-item ${i == 0 && "active"}`}>
                              <div>
                                 <div>
                                    <img
                                       className="rounded-circle object-fit-cover"
                                       width={"200px"}
                                       height={"200px"}
                                       src={el.image}
                                       alt=""
                                    />
                                 </div>
                                 <h5 className="mt-5">{el.name}</h5>
                                 <span className="text-uppercase fs-5 fw-bold text-primary">
                                    {el.designation}
                                 </span>
                                 <p className="mt-2">
                                    <i class="fas fa-quote-left pe-2"></i>
                                    {el.story}
                                 </p>
                                 <h5 className="mt-1 mb-5">
                                    {[...Array(Math.floor(el.rating))].map(el => (
                                          <RiStarFill color="#cad411" />
                                    )
                                    )}
                                    {
                                       el.rating.toString().split('.')[1] && <RiStarHalfFill color="#cad411" />
                                    }
                                 </h5>
                              </div>
                           </div>
                        ))}
                  </div>
                  <button
                     class="carousel-control-prev"
                     type="button"
                     data-bs-target="#testimonialIndicators"
                     data-bs-slide="prev"
                  >
                     <IoCaretBackOutline color="blue" size={30} />
                  </button>
                  <button
                     class="carousel-control-next text-black "
                     type="button"
                     data-bs-target="#testimonialIndicators"
                     data-bs-slide="next"
                  >
                     <IoCaretForwardOutline color="blue" size={30} />
                  </button>
               </div>
            </div>
         </section>

         <section class="blog blog-home mega-section" id="blog">
            <div class="container">
               <div class="sec-heading">
                  <div class="content-area">
                     <span class="pre-title wow fadeInUp" data-wow-delay=".2s">
                        blog
                     </span>
                     <h2 class="title wow fadeInUp" data-wow-delay=".4s">
                        latest <span class="hollow-text">news</span>
                     </h2>
                  </div>
                  <div
                     class="cta-area cta-area wow fadeInUp"
                     data-wow-delay=".8s"
                  >
                     <a class="cta-btn btn-solid cta-btn btn-solid">
                        see all posts<i class="bi bi-arrow-right icon"></i>
                     </a>
                  </div>
               </div>

               <div class="row">
                  <div class="col-12">
                     <div class="posts-grid">
                        <div class="row">
                        {blogs.slice(0, 3).map((el, i) => (
                              <div className="col-12 col-lg-4">
                                 <div
                                    className="post-box"
                                    style={{
                                       overflow: "hidden",
                                       borderRadius: "20px",
                                       height: "570px",
                                       maxHeight: "570px",
                                       minHeight: "570px",
                                    }}
                                 >
                                    <a
                                       className="post-link"
                                       onClick={() => openBLog(el.slug)}
                                       title={el.blogTitle}
                                       style={{
                                          width: "100%",
                                          position: "relative",
                                       }}
                                    >
                                       <div
                                          className="post-img-wrapper"
                                          style={{ height: "300px" }}
                                       >
                                          <img
                                             className="parallax-img  object-fit-cover"
                                             loading="lazy"
                                             src={el.coverImg.imageUrl}
                                             alt={el.coverImg.altText}
                                             onError={({ currentTarget }) => {
                                                currentTarget.onerror = null; // prevents looping
                                                currentTarget.src = NoImage;
                                             }}
                                             height={"100%"}
                                             width={"100%"}
                                          />
                                          <span className="post-date">
                                             {LocalDateFormat(el.publishedAt)}
                                          </span>
                                       </div>
                                    </a>
                                    <div className="post-summary">
                                       
                                       <div className="post-text">
                                          <a
                                             className="post-link"
                                             onClick={() => openBLog(el.slug)}
                                          >
                                             <h2 className="post-title">
                                                {el.blogTitle.slice(0, 50)}
                                                {el.blogTitle.length > 50 &&
                                                   "..."}
                                             </h2>
                                          </a>
                                          <p className="post-excerpt">
                                             {el.description.slice(0, 200)}
                                             {el.description.length > 200 &&
                                                "..."}
                                          </p>
                                          <a
                                             className="read-more"
                                             onClick={() => openBLog(el.slug)}
                                             title="give your website a new look and feel with themes"
                                          >
                                             read more
                                             <i className="bi bi-arrow-right icon"></i>
                                          </a>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           ))}
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </div>
   );
};

export default AboutUs;
