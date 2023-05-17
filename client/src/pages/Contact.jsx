import React, { useEffect, useState } from "react";
import contact from "../assets/images/bg-contact.jpg";
import { Helmet } from "react-helmet";
import { getPageImagesByPageName } from "../apis/Apis";
import { Link } from "react-router-dom";
const Contact = () => {
   const [coverImage, setCoverImage] = useState({ url: "", alt: "" });
   const getCoverImageByPageName = () => {
      getPageImagesByPageName("CONTACT").then((res) => {
         setCoverImage({
            url: res.data.data.imageUrl,
            alt: res.data.data.altText,
         });
      });
   };
   useEffect(() => {
      getCoverImageByPageName();
   }, []);
   return (
      <div>
         <Helmet>
            <title>Contact Us</title>
         </Helmet>
         <section id="page-hero">
         <div>
            <div style={{ position: "relative", height: "100%", maxHeight:'900px', overflow:'hidden' }}>
               <div className="coverImageTextDiv">
               <div class="container">
               <div class="hero-text-area centerd">
                  <h1 class="hero-title  wow fadeInUp" data-wow-delay=".2s" style={{fontSize:'4rem', fontWeight:'bold'}}>
                     Contact us
                  </h1>
                  <nav aria-label="breadcrumb ">
                     <ul class="breadcrumb wow fadeInUp" data-wow-delay=".6s">
                        <li class="breadcrumb-item">
                           <Link class="breadcrumb-link" to="/contact">
                              <i class="bi bi-house icon "></i>home
                           </Link>
                        </li>
                        <li class="breadcrumb-item active">contact us</li>
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
                                 <form
                                    class="main-form"
                                    id="contact-us-form"
                                    action="php/send-mail.php"
                                    method="post"
                                 >
                                    <span class="done-msg"></span>
                                    <div class="row ">
                                       <div class="col-12 col-lg-6">
                                          <div class="   input-wrapper">
                                             <input
                                                class="text-input"
                                                id="user-name"
                                                name="UserName"
                                                type="text"
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
                                             />
                                             <label
                                                class="input-label"
                                                for="user-email"
                                             >
                                                {" "}
                                                E-mail{" "}
                                                <span class="req">*</span>
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
                                             />
                                             <label
                                                class="input-label"
                                                for="msg-subject"
                                             >
                                                {" "}
                                                Subject{" "}
                                                <span class="req">*</span>
                                             </label>
                                             <span class="b-border"></span>
                                             <span class="error-msg"></span>
                                          </div>
                                       </div>
                                       <div class="col-12 ">
                                          <div class="   input-wrapper">
                                             <textarea
                                                class=" text-input"
                                                id="msg-text"
                                                name="message"
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
                                             type="submit"
                                             name="UserSubmit"
                                          >
                                             Send your message
                                          </button>
                                       </div>
                                    </div>
                                 </form>
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
                                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d218.96164933453073!2d77.31333650288445!3d28.588183105401974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce58230fc6369%3A0xec5e3080120cdafb!2sTurtl%20Cyber%20Security%20Industry%20And%20Development%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1684131846444!5m2!1sen!2sin"
                                 width="1350"
                                 height="480"
                                 style={{border:0}}
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


