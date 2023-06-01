import React, { useEffect, useState } from "react";
import contact from "../assets/images/bg-contact.jpg";
import { Helmet } from "react-helmet";
import {
   getPageImagesByPageName,
   getSeoByPageName,
   sendQueryApi,
} from "../apis/Apis";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { SpinnerClose, SpinnerOpen } from "../redux/R_Action";


const Contact = () => {
   const dispatch = useDispatch();
   const state = useSelector((state) => state);
   const [coverImage, setCoverImage] = useState({ url: "", alt: "" });
   const [seoDataFromServer, setSeoDataFromServer] = useState({});
   const [contactFormData, setContactFormData] = useState({
      name: "",
      email: "",
      subject: "",
      text: "",
   });
   const getCoverImageByPageName = () => {
      getPageImagesByPageName("CONTACT").then((res) => {
         setCoverImage({
            url: res.data.data.imageUrl,
            alt: res.data.data.altText,
         });
      });
   };

   const getSEOdata = () => {
      getSeoByPageName("CONTACTUS")
         .then((res) => {
            console.log(res.data.data);
            setSeoDataFromServer(res.data.data);
         })
         .catch((err) => {
            console.log(err);
         });
   };
   const sendQuery = async () => {
      if (contactFormData.name === "") {
         alert("Name field is required");
      } else if (contactFormData.email === "") {
         alert("Email field is required");
      } else if (contactFormData.subject === "") {
         alert("Subject field is required");
      } else if (contactFormData.text === "") {
         alert("Subject field is required");
      } else {
         dispatch(SpinnerOpen());
         await sendQueryApi(contactFormData)
            .then((res) => {
               console.log(res.data);
               alert(res.data.message);
               setContactFormData({
                  name: "",
                  email: "",
                  subject: "",
                  text: "",
               });
               dispatch(SpinnerClose());
            })
            .catch((err) => {
               console.log(err);
               alert(err.response.data.message);
               dispatch(SpinnerClose());
            });
      }
   };
   useEffect(() => {
      getCoverImageByPageName();
      getSEOdata();
   }, []);
   return (
      <div>
         <Helmet>
            <title>
               {seoDataFromServer.seoData
                  ? seoDataFromServer.seoData.pageTitle
                  : "Contact us"}
            </title>

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
               <div
                  style={{
                     position: "relative",
                     height: "100%",
                     maxHeight: "900px",
                     overflow: "hidden",
                  }}
               >
                  <div className="coverImageTextDiv">
                     <div class="container">
                        <div class="hero-text-area centerd">
                           <h1
                              class="hero-title  wow fadeInUp"
                              data-wow-delay=".2s"
                              style={{ fontSize: "4rem", fontWeight: "bold" }}
                           >
                              Contact us
                           </h1>
                           <nav aria-label="breadcrumb ">
                              <ul
                                 class="breadcrumb wow fadeInUp"
                                 data-wow-delay=".6s"
                              >
                                 <li class="breadcrumb-item">
                                    <Link class="breadcrumb-link" to="/contact">
                                       <i class="bi bi-house icon "></i>home
                                    </Link>
                                 </li>
                                 <li class="breadcrumb-item active">
                                    contact us
                                 </li>
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

         <section class="contact-us  mega-section  pb-0" id="contact-us">
            <div class="container">
               <section
                  class="locations-section  mega-section "
                  style={{ alignItems: "center" }}
               ></section>

               <section class="contact-us-form-section  mega-section  ">
                  <div class="row">
                     <div class="col-12 ">
                        <div class="contact-form-panel">
                           <div class="sec-heading centered    ">
                              <div class="content-area">
                                 <h2
                                    class=" title    wow fadeInUp"
                                    data-wow-delay=".4s"
                                 >
                                    Have any questions? Let's answer them
                                 </h2>
                              </div>
                           </div>
                           <div
                              class="contact-form-inputs wow fadeInUp"
                              data-wow-delay=".6s"
                           >
                              <div class="custom-form-area input-boxed">
                                 <span class="done-msg"></span>
                                 <div class="row ">
                                    <div class="col-12 col-lg-6">
                                       <div class="   input-wrapper">
                                          <input
                                             class="text-input"
                                             id="user-name"
                                             name="UserName"
                                             type="text"
                                             value={contactFormData.name}
                                             onChange={(e) =>
                                                setContactFormData((old) => {
                                                   return {
                                                      ...old,
                                                      name: e.target.value,
                                                   };
                                                })
                                             }
                                          />
                                          <label
                                             class="input-label"
                                             for="user-name"
                                          >
                                             {" "}
                                             Name <span class="req">*</span>
                                          </label>
                                          <span class="b-border"></span>
                                          <span class="error-msg"></span>
                                       </div>
                                    </div>
                                    <div class="col-12 col-lg-6">
                                       <div class="   input-wrapper">
                                          <input
                                             class="text-input"
                                             id="user-email"
                                             name="UserEmail"
                                             type="email"
                                             value={contactFormData.email}
                                             onChange={(e) =>
                                                setContactFormData((old) => {
                                                   return {
                                                      ...old,
                                                      email: e.target.value,
                                                   };
                                                })
                                             }
                                          />
                                          <label
                                             class="input-label"
                                             for="user-email"
                                          >
                                             {" "}
                                             E-mail <span class="req">*</span>
                                          </label>
                                          <span class="b-border"></span>
                                          <span class="error-msg"></span>
                                       </div>
                                    </div>
                                    <div class="col-12 ">
                                       <div class="   input-wrapper">
                                          <input
                                             class="text-input"
                                             id="msg-subject"
                                             name="subject"
                                             type="text"
                                             value={contactFormData.subject}
                                             onChange={(e) =>
                                                setContactFormData((old) => {
                                                   return {
                                                      ...old,
                                                      subject: e.target.value,
                                                   };
                                                })
                                             }
                                          />
                                          <label
                                             class="input-label"
                                             for="msg-subject"
                                          >
                                             {" "}
                                             Subject <span class="req">*</span>
                                          </label>
                                          <span class="b-border"></span>
                                          <span class="error-msg"></span>
                                       </div>
                                    </div>
                                    <div class="col-12 ">
                                       <div class="input-wrapper">
                                          <textarea
                                             class=" text-input"
                                             id="msg-text"
                                             name="message"
                                             value={contactFormData.text}
                                             onChange={(e) =>
                                                setContactFormData((old) => {
                                                   return {
                                                      ...old,
                                                      text: e.target.value,
                                                   };
                                                })
                                             }
                                          ></textarea>
                                          <label
                                             class="input-label"
                                             for="msg-text"
                                          >
                                             {" "}
                                             your message{" "}
                                             <span class="req">*</span>
                                          </label>
                                          <span class="b-border"></span>
                                          <i></i>
                                          <span class="error-msg"></span>
                                       </div>
                                    </div>
                                    <div class="col-12 submit-wrapper">
                                       <button
                                          class=" btn-solid"
                                          id="submit-btn"
                                          name="UserSubmit"
                                          onClick={() => sendQuery()}
                                       >
                                          Send your message
                                       </button>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </section>
               
               <div>
                  <section class="map-section  elf-section">
                     <div class="sec-heading  centered   ">
                        <div class="content-area">
                           <h2
                              class=" title    wow fadeInUp"
                              data-wow-delay=".4s"
                           >
                              find us on google maps
                           </h2>
                        </div>
                     </div>
                     <div class="map-box  wow fadeInUp" data-wow-delay=".6s">
                        <div class="mapouter">
                           <div class="gmap_canvas">
                              <iframe
                                 src={
                                    state.companyInfoFetchLost &&
                                    state.companyInfoFetchLost.googleMap
                                       ? state.companyInfoFetchLost.googleMap
                                       : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d218.96164933453073!2d77.31333650288445!3d28.588183105401974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce58230fc6369%3A0xec5e3080120cdafb!2sTurtl%20Cyber%20Security%20Industry%20And%20Development%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1684131846444!5m2!1sen!2sin"
                                 }
                                 width="1350"
                                 height="480"
                                 style={{ border: 0 }}
                                 allowfullscreen=""
                                 loading="lazy"
                                 referrerpolicy="no-referrer-when-downgrade"
                              ></iframe>
                           </div>
                        </div>
                     </div>
                  </section>
               </div>
            </div>
         </section>
      </div>
   );
};

export default Contact;
