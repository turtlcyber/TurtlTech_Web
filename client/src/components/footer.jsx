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
                  <div className="row col-12 mb-5  text-white text-start">
                     <div className="text-center">
                        <h1>Our Offices</h1>
                     </div>
                     {state.companyInfoFetchLost.subsidiaryAddress.map(
                        (el, i) => (
                           <div
                              className="col-sm col-md col-lg border border-white rounded-3 m-1"
                              style={{ minHeight: "200px", minWidth:'300px' }}
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

            <div class="row footer-cols justify-content-between">
               <div class="col-sm-12 col-lg-4 footer-col">
                  <img
                     class="img-fluid footer-logo"
                     loading="lazy"
                     src={require(".././assets/img/logo1-removebg-preview.png")}
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
                  {/* <div class="form-area">
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
                  </div> */}
               </div>
               <div class="col-sm col-lg-4 footer-col text-start">
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
               <div class="col-sm col-lg-4  footer-col  text-start">
                  <h2 class="footer-col-title">contact information</h2>
                  <div class="footer-col-content-wrapper">
                     {state.companyInfoFetchLost &&
                        state.companyInfoFetchLost.serviceEmail && (
                           <div class="contact-info-card">
                              <i class="bi bi-envelope icon"></i>
                              <a
                                 class="text-lowercase info"
                                 href="mailto:info@turtltech.com"
                              >
                                 {state.companyInfoFetchLost.serviceEmail}
                              </a>
                           </div>
                        )}
                     {state.companyInfoFetchLost &&
                        state.companyInfoFetchLost.address && (
                           <div class="contact-info-card">
                              <a href="https://goo.gl/maps/bxvUwxyb6wLGqHst7">
                                 {" "}
                                 <i class="bi bi-geo-alt icon"></i>
                                 <span class="text-lowercase info">
                                    {state.companyInfoFetchLost.address}
                                 </span>
                              </a>
                           </div>
                        )}

                     {state.companyInfoFetchLost &&
                        state.companyInfoFetchLost.contactNumber && (
                           <div class="contact-info-card">
                              <i class="bi bi-phone icon"></i>
                              {state.companyInfoFetchLost.contactNumber.map(
                                 (el, i) => (
                                    <a class="info me-2" href={`tel:+91${el}`}>
                                       +91-{el}
                                    </a>
                                 )
                              )}
                           </div>
                        )}

                     <div class="contact-info-card">
                        <div class="social-icons">
                           <div class="sc-wrapper dir-row sc-size-32">
                              {state.companyInfoFetchLost &&
                                 state.companyInfoFetchLost
                                    .socialMediaLinks && (
                                    <ul class="sc-list">
                                       {state.companyInfoFetchLost.socialMediaLinks.map(
                                          (el, i) => (
                                             <li
                                                class="sc-item"
                                                title={el.types}
                                                key={el._id}
                                             >
                                                <a
                                                   class="sc-link"
                                                   href={el.url}
                                                   target="__black"
                                                   title="social media icon"
                                                >
                                                   {el.types === "facebook" ? (
                                                      <i class="fab fa-facebook-f sc-icon"></i>
                                                   ) : el.types ===
                                                     "twitter" ? (
                                                      <i class="fab fa-twitter sc-icon"></i>
                                                   ) : el.types ===
                                                     "youtube" ? (
                                                      <i class="fab fa-youtube sc-icon"></i>
                                                   ) : el.types ===
                                                     "instagram" ? (
                                                      <i class="fab fa-instagram sc-icon"></i>
                                                   ) : el.types ===
                                                     "linkedin" ? (
                                                      <i class="fab fa-linkedin-in"></i>
                                                   ) : (
                                                      ""
                                                   )}
                                                </a>
                                             </li>
                                          )
                                       )}
                                    </ul>
                                 )}
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
