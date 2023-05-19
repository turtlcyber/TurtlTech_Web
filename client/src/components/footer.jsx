import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Footer = () => {
   const state = useSelector((state) => state);
   return (
      <footer
         //  style={{ paddingLeft: "17%" }}
         class="page-footer dark-color-footer"
         id="page-footer"
      >
         <div
            class="overlay-photo-image-bg"
            data-bg-img="img/home-page-bg-img.jpg"
            data-bg-opacity=".25"
         ></div>
         <div class="container">
            {state.companyInfoFetchLost &&
               state.companyInfoFetchLost.subsidiaryAddress && (
                  <div className="row mb-5  text-white text-start">
                     <div className="text-center">
                        <h1>Our Offices</h1>
                     </div>
                     {state.companyInfoFetchLost.subsidiaryAddress.map(
                        (el, i) => (
                           <div
                              className="col border border-white rounded-3 mx-1"
                              style={{ minHeight: "200px" }}
                           >
                              <h3>
                                 <i class="bi bi-geo-alt icon"></i>
                                 {el.city}, {el.state}, {el.country}
                              </h3>
                              {el.address}
                           </div>
                        )
                     )}
                  </div>
               )}

            <div class="row footer-cols">
               <div class="col-12 col-md-8 col-lg-4 footer-col">
                  <img
                     class="img-fluid footer-logo"
                     loading="lazy"
                     src="img/logo1-removebg-preview.png"
                     width="100%"
                     alt="logo"
                  />
                  <div class="footer-col-content-wrapper">
                     <p class="footer-text-about-us">
                        Turtltech provides a full range of business consulting &
                        advisory services to small, medium, and international
                        companies worldwide. We use innovations and experience
                        to drive your success.
                     </p>
                  </div>
                  <div class="form-area">
                     <div class="mailchimp-form">
                        <form class="one-field-form" method="post" action="#0">
                           <div class="field-group">
                              <label class="email-label" for="email-input">
                                 Subscribe to our news letter
                              </label>
                              <input
                                 class="email-input"
                                 type="email"
                                 value=""
                                 name="EMAIL"
                                 id="email-input"
                                 placeholder="Email Address"
                                 autocomplete="off"
                              />
                              <div class="cta-area">
                                 <input
                                    class="btn-solid subscribe-btn"
                                    type="submit"
                                    value="Subscribe"
                                    name="subscribe"
                                 />
                              </div>
                           </div>
                           <span class="email-notice">
                              *we will not share your personal info
                           </span>
                        </form>
                     </div>
                  </div>
               </div>
               <div class="col-6 col-lg-2 footer-col">
                  <h2 class="footer-col-title">useful links</h2>
                  <div class="footer-col-content-wrapper">
                     <ul class="footer-menu">
                        <li class="footer-menu-item">
                           <i class="bi bi-arrow-right icon"></i>
                           <Link class="footer-menu-link" to="/">
                              Home
                           </Link>
                        </li>
                        <li class="footer-menu-item">
                           <i class="bi bi-arrow-right icon"></i>
                           <Link class="footer-menu-link" to="/aboutus">
                              About Us
                           </Link>
                        </li>
                        <li class="footer-menu-item">
                           <i class="bi bi-arrow-right icon"></i>
                           <Link class="footer-menu-link" to="/services">
                              Services
                           </Link>
                        </li>
                        <li class="footer-menu-item">
                           <i class="bi bi-arrow-right icon"></i>
                           <Link class="footer-menu-link" to="/blog">
                              blogs
                           </Link>
                        </li>
                        <li class="footer-menu-item">
                           <i class="bi bi-arrow-right icon"></i>
                           <Link class="footer-menu-link" to="/contact">
                              Contact
                           </Link>
                        </li>
                     </ul>
                  </div>
               </div>
               <div class="col-12 col-lg-4 footer-col">
                  <h2 class="footer-col-title">contact information</h2>
                  <div class="footer-col-content-wrapper">
                     <div class="contact-info-card">
                        <i class="bi bi-envelope icon"></i>
                        <a
                           class="text-lowercase info"
                           href="mailto:info@turtltech.com"
                        >
                           info@turtltech.com
                        </a>
                     </div>
                     <div class="contact-info-card">
                        <a href="https://goo.gl/maps/bxvUwxyb6wLGqHst7">
                           {" "}
                           <i class="bi bi-geo-alt icon"></i>
                           <span class="text-lowercase info">
                              B-25, Sector-1, Noida, Uttar Pradesh 201301
                           </span>
                        </a>
                     </div>
                     <div class="contact-info-card">
                        <i class="bi bi-phone icon"></i>
                        <a class="info" href="tel:+919958040595">
                           +91-9958040595{" "}
                        </a>
                     </div>
                     <div class="contact-info-card">
                        <div class="social-icons">
                           <div class="sc-wrapper dir-row sc-size-32">
                              <ul class="sc-list">
                                 <li class="sc-item" title="Facebook">
                                    <a
                                       class="sc-link"
                                       href="#0"
                                       title="social media icon"
                                    >
                                       <i class="fab fa-facebook-f sc-icon"></i>
                                    </a>
                                 </li>
                                 <li class="sc-item" title="youtube">
                                    <a
                                       class="sc-link"
                                       href="#0"
                                       title="social media icon"
                                    >
                                       <i class="fab fa-youtube sc-icon"></i>
                                    </a>
                                 </li>
                                 <li class="sc-item" title="instagram">
                                    <a
                                       class="sc-link"
                                       href="#0"
                                       title="social media icon"
                                    >
                                       <i class="fab fa-instagram sc-icon"></i>
                                    </a>
                                 </li>
                                 <li class="sc-item" title="twitter">
                                    <a
                                       class="sc-link"
                                       href="https://twitter.com/TurtlTech"
                                       title="social media icon"
                                    >
                                       <i class="fab fa-twitter sc-icon"></i>
                                    </a>
                                 </li>
                                 <li class="sc-item" title="linkedin">
                                    <a
                                       class="sc-link"
                                       href="https://www.linkedin.com/company/turtltech/"
                                       title="social media icon"
                                    >
                                       <i class="fab fa-linkedin-in"></i>
                                    </a>
                                 </li>
                              </ul>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div class="copyrights">
            <div class="container">
               <div class="row">
                  <div class="col-12 col-md-6 d-flex justify-content-start">
                     <p class="creadits">
                        &copy; 2023 Created by:
                        <a class="link" href="#0">
                           Turtltech
                        </a>
                     </p>
                  </div>
                  <div class="col-12 col-md-6 d-flex justify-content-end">
                     <div class="terms-links">
                        <a href="#0">Terms of Use </a> |{" "}
                        <a href="#0">Privacy Policy</a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
