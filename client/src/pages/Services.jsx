import React, { useEffect, useState } from "react";
import image1 from "../assets/img/HsPiR2R.webp";
import { Link } from "react-router-dom";
import AllServices from "../components/AllServices";
import { getPageImagesByPageName, getSeoByPageName } from "../apis/Apis";
import { Helmet } from "react-helmet";

const Services = () => {
   const [coverImage, setCoverImage] = useState({ url: "", alt: "" });
   const [seoDataFromServer, setSeoDataFromServer] = useState({});
   const getSEOdata = () => {
      getSeoByPageName("SERVICES")
         .then((res) => {
            console.log(res.data.data);
            setSeoDataFromServer(res.data.data);
         })
         .catch((err) => {
            console.log(err);
         });
   };
   const getCoverImageByPageName = () => {
      getPageImagesByPageName("SERVICES").then((res) => {
         setCoverImage({
            url: res.data.data.imageUrl,
            alt: res.data.data.altText,
         });
      });
   };
   
   useEffect(() => {
      getCoverImageByPageName();
      getSEOdata();
   },[])
   return (
      <div>
      <Helmet>
            
            <title>{seoDataFromServer.seoData ? seoDataFromServer.seoData.pageTitle : 'Services'}</title>
               
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
                     Services
                  </h1>
                  <nav aria-label="breadcrumb ">
                     <ul class="breadcrumb wow fadeInUp" data-wow-delay=".6s">
                        <li class="breadcrumb-item">
                           <Link class="breadcrumb-link" to="/service">
                              <i class="bi bi-house icon "></i>home
                           </Link>
                        </li>
                        <li class="breadcrumb-item active">services</li>
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
         <section class="services services-boxed mega-section  " id="services">
            <div class="container">
               <div class="sec-heading  ">
                  <div class="content-area">
                     <span
                        class=" pre-title       wow fadeInUp "
                        data-wow-delay=".2s"
                     >
                        services
                     </span>
                     <h2 class=" title    wow fadeInUp" data-wow-delay=".4s">
                        <span class="hollow-text">services</span> we offer
                     </h2>
                     <p class="subtitle   wow fadeInUp " data-wow-delay=".6s">
                        Our mission is to attract and retain customers by
                        providing Best in Class solutions and fostering a
                        profitable, disciplined culture of safety, service, and
                        trust.
                     </p>
                  </div>
                  <div class=" cta-area   wow fadeInUp" data-wow-delay=".8s">
                     <a href="#" class="cta-btn btn-solid">
                        see all services <i class="bi bi-arrow-right icon "></i>
                     </a>
                  </div>
               </div>
            </div>
         </section>
         <AllServices />
         <section
            class="testimonials testimonials-1-col   has-dark-bg  mega-section "
            id="testimonials-img-bg"
         >
            <div
               class="overlay-photo-image-bg parallax "
               data-bg-img="assets/images/sections-bg-images/1.jpg"
               data-bg-opacity=".25"
            ></div>
            <div class="container">
               <div class="sec-heading  centered ">
                  <div class="content-area">
                     <span
                        class=" pre-title       wow fadeInUp "
                        data-wow-delay=".2s"
                     >
                        testimonials
                     </span>
                     <h2 class=" title    wow fadeInUp" data-wow-delay=".4s">
                        customers <span class="hollow-text">testmonials</span>
                     </h2>
                  </div>
               </div>
               <div class="row d-flex align-items-center">
                  <div class="col-12 col-md-10  mx-auto">
                     <div
                        class="swiper-container  wow fadeInUp  "
                        data-wow-delay="0.2s"
                     >
                        <div class="swiper-wrapper">
                           <div class="swiper-slide">
                              <div class="testmonial-card d-flex align-items-center justify-content-center">
                                 <div class="testimonial-content">
                                    <div class="customer-img ">
                                       <img
                                          class="img-fluid "
                                          loading="lazy"
                                          src="assets/images/testimonials/1.png"
                                          alt="First Slide "
                                       />
                                    </div>
                                    <div class="customer-testimonial">
                                       <div class="content">
                                          <p class="testimonial-text ">
                                             {" "}
                                             ipsum dolor sit amet consectetur
                                             adipisicing elit. Quod, id sequi
                                             aut qui est ab, corporis quis
                                             maiores reiciendis explicabo odio
                                             tenetur nulla sint vel.
                                          </p>
                                       </div>
                                    </div>
                                    <div class="customer-info ">
                                       <div class="customer-details">
                                          <p class="customer-name">
                                             Yusuf amin
                                          </p>
                                          <p class="customer-role">founder</p>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>

                        <div class="swiper-button-prev">
                           <div class="left-arrow">
                              <i class="bi bi-chevron-left icon "></i>
                           </div>
                        </div>
                        <div class="swiper-button-next">
                           <div class="right-arrow">
                              <i class="bi bi-chevron-right icon "></i>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         <section class="take-action elf-section has-dark-bg" id="take-action">
            <div
               class="overlay-photo-image-bg  "
               data-bg-img="assets/images/sections-bg-images/2.jpg"
               data-bg-opacity=".25"
            ></div>
            <div class="cta-wrapper">
               <div class="container">
                  <div class="sec-heading  centered mb-0 ">
                     <div class="content-area">
                        <span
                           class=" pre-title       wow fadeInUp "
                           data-wow-delay=".2s"
                        >
                           contact us
                        </span>
                        <h2 class=" title    wow fadeInUp" data-wow-delay=".4s">
                           get in totch with us
                        </h2>
                        <p
                           class="subtitle   wow fadeInUp "
                           data-wow-delay=".6s"
                        >
                           Lorem ipsum dolor sit amet consectetur adipisicing
                           elit Omnis <br />
                           id atque dignissimos repellat quae ullam.
                        </p>
                     </div>
                  </div>

                  <div
                     class=" see-more-area wow fadeInUp"
                     data-wow-delay="0.8s"
                  >
                     <a class=" btn-solid cta-link" href="contact-us.html">
                        contact us
                     </a>
                  </div>
               </div>
            </div>
         </section>
      </div>
   );
};

export default Services;
