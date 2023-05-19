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
import { getPageImagesByPageName, getSeoByPageName } from "../apis/Apis";
import { Link } from "react-router-dom";

const slideWidth = 30;

const _items = [
   {
      player: {
         title: "Efren Reyes",
         desc: 'Known as "The Magician", Efren Reyes is well regarded by many professionals as the greatest all around player of all time.',
         image: "https://i.postimg.cc/RhYnBf5m/er-slider.jpg",
      },
   },
   {
      player: {
         title: "Ronnie O'Sullivan",
         desc: "Ronald Antonio O'Sullivan is a six-time world champion and is the most successful player in the history of snooker.",
         image: "https://i.postimg.cc/qBGQNc37/ro-slider.jpg",
      },
   },
   {
      player: {
         title: "Shane Van Boening",
         desc: 'The "South Dakota Kid" is hearing-impaired and uses a hearing aid, but it has not limited his ability.',
         image: "https://i.postimg.cc/cHdMJQKG/svb-slider.jpg",
      },
   },
   {
      player: {
         title: "Mike Sigel",
         desc: 'Mike Sigel or "Captain Hook" as many like to call him is an American professional pool player with over 108 tournament wins.',
         image: "https://i.postimg.cc/C12h7nZn/ms-1.jpg",
      },
   },
   {
      player: {
         title: "Willie Mosconi",
         desc: 'Nicknamed "Mr. Pocket Billiards," Willie Mosconi was among the first Billiard Congress of America Hall of Fame inductees.',
         image: "https://i.postimg.cc/NfzMDVHP/willie-mosconi-slider.jpg",
      },
   },
];
const data1 = [
   {
      picture: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp",
      name: "Lucy Maclen",
      designation: "Senior Software Engineer",
      story: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab hic tenetur.",
      rating: 3.5,
   },
   {
      picture: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp",
      name: "Maria Smantha",
      designation: "Web Developer",
      story: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab hic tenetur.",
      rating: 2.5,
   },
   {
      picture: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp",
      name: "John Martin",
      designation: "Android Developer",
      story: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab hic tenetur.",
      rating: 4,
   },
   {
      picture: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp",
      name: "Vinarak Kishor",
      designation: "Security Analyst",
      story: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab hic tenetur.",
      rating: 5,
   },
];

const AboutUs = () => {
   const [testimonialData, setTestimonial] = useState([]);
   const [coverImage, setCoverImage] = useState({ url: "", alt: "" });
   const [seoDataFromServer, setSeoDataFromServer] = useState({});
   const getCoverImageByPageName = () => {
      getPageImagesByPageName("ABOUTUS").then((res) => {
         setCoverImage({
            url: res.data.data.imageUrl,
            alt: res.data.data.altText,
         });
      });
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
         <section>
            <div class="row d-flex justify-content-center">
               <div class="col-md-10 col-xl-8 text-center">
                  <h3 class="mb-4">Testimonials</h3>
                  <p class="mb-4 pb-2 mb-md-5 pb-md-0">
                     Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                     Fugit, error amet numquam iure provident voluptate esse
                     quasi, veritatis totam voluptas nostrum quisquam eum porro
                     a pariatur veniam.
                  </p>
               </div>
            </div>
           
            <div class="row text-center">
               {data1.map((el, i) => (
                  <Testimonials
                  key={i}
                     picture={el.picture}
                     name={el.name}
                     designation={el.designation}
                     story={el.story}
                     rating={el.rating}
                  />
               ))}
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
                           <div class="col-12 col-lg-4">
                              <div class="post-box">
                                 <a
                                    class="post-link"
                                    title="How litespeed technology works to speed up your site "
                                 >
                                    <div class="post-img-wrapper">
                                       <img
                                          class="parallax-img post-img"
                                          loading="lazy"
                                          src={blog2_home}
                                          alt=""
                                       />
                                       <span class="post-date">
                                          <span class="day">05 </span>oct 2022
                                       </span>
                                    </div>
                                 </a>
                                 <div class="post-summary">
                                    <div class="post-info">
                                       <a class="info post-cat" href="#">
                                          <i class="bi bi-bookmark icon"></i>
                                          TURTL CYBER SECURIY
                                       </a>
                                       <a class="info post-author" href="#">
                                          <i class="bi bi-person icon"></i> Jiya
                                          Srivastava
                                       </a>
                                    </div>
                                    <div class="post-text">
                                       <a class="post-link">
                                          <h2 class="post-title">
                                             Cyber Security Awareness
                                          </h2>
                                       </a>
                                       <p class="post-excerpt">
                                          With an elevation in utilization of
                                          cyber services, there has been noticed
                                          a significant increase in cyber
                                          threats as well.
                                       </p>
                                       <a
                                          class="read-more"
                                          title="How litespeed technology works to speed up your site "
                                       >
                                          read more
                                          <i class="bi bi-arrow-right icon"></i>
                                       </a>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div class="col-12 col-lg-4">
                              <div class="post-box">
                                 <a
                                    class="post-link"
                                    title="give your website a new look and feel with themes"
                                 >
                                    <div class="post-img-wrapper">
                                       <img
                                          class="parallax-img post-img"
                                          loading="lazy"
                                          src={blog2}
                                          alt=""
                                       />
                                       <span class="post-date">
                                          <span class="day">15 </span>sep 2022
                                       </span>
                                    </div>
                                 </a>
                                 <div class="post-summary">
                                    <div class="post-info">
                                       <a class="info post-cat" href="#">
                                          <i class="bi bi-bookmark icon"></i>web
                                          dev
                                       </a>
                                       <a class="info post-author" href="#">
                                          <i class="bi bi-person icon"></i>mhmd
                                          amin
                                       </a>
                                    </div>
                                    <div class="post-text">
                                       <a class="post-link">
                                          <h2 class="post-title">
                                             give your website a new look and
                                             feel with themes
                                          </h2>
                                       </a>
                                       <p class="post-excerpt">
                                          Lorem ipsum dolor sit, amet
                                          consectetur adipisicing elit.Iure
                                          nulla dolorem, voluptates molestiae
                                       </p>
                                       <a
                                          class="read-more"
                                          title="give your website a new look and feel with themes"
                                       >
                                          read more
                                          <i class="bi bi-arrow-right icon"></i>
                                       </a>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div class="col-12 col-lg-4">
                              <div class="post-box">
                                 <a
                                    class="post-link"
                                    title="the role of domain names in SEO world explained "
                                 >
                                    <div class="post-img-wrapper">
                                       <img
                                          class="parallax-img post-img"
                                          loading="lazy"
                                          src={blog3}
                                          alt=""
                                       />
                                       <span class="post-date">
                                          <span class="day">27 </span>aug 2022
                                       </span>
                                    </div>
                                 </a>
                                 <div class="post-summary">
                                    <div class="post-info">
                                       <a class="info post-cat" href="#">
                                          <i class="bi bi-bookmark icon"></i>SEO
                                       </a>
                                       <a class="info post-author" href="#">
                                          <i class="bi bi-person icon"></i>yusuf
                                          amin
                                       </a>
                                    </div>
                                    <div class="post-text">
                                       <a class="post-link">
                                          <h2 class="post-title">
                                             the role of domain names in SEO
                                             world explained
                                          </h2>
                                       </a>
                                       <p class="post-excerpt">
                                          Lorem ipsum dolor sit, amet
                                          consectetur adipisicing elit.Iure
                                          nulla dolorem, voluptates molestiae
                                       </p>
                                       <a
                                          class="read-more"
                                          title="the role of domain names in SEO world explained "
                                       >
                                          read more
                                          <i class="bi bi-arrow-right icon"></i>
                                       </a>
                                    </div>
                                 </div>
                              </div>
                           </div>
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
