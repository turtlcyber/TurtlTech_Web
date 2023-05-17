import React from "react";
import image1 from "../assets/img/HsPiR2R.webp";
import { Link } from "react-router-dom";
import AllServices from "../components/AllServices";

const Services = () => {
   return (
      <div>
         <section
            class="d-flex align-items-center page-hero  inner-page-hero "
            id="page-hero"
            style={{
               background: `url(${image1})`,
               backgroundRepeat: "no-repeat",
               width: "100%",
            }}
         >
            <div class="overlay-photo-image-bg parallax"></div>
            <div class="overlay-color" data-bg-opacity=".75"></div>
            <div class="container">
               <div class="hero-text-area centerd">
                  <h1 class="hero-title  wow fadeInUp" data-wow-delay=".2s">
                     Services{" "}
                  </h1>
                  <nav aria-label="breadcrumb ">
                     <ul class="breadcrumb wow fadeInUp" data-wow-delay=".6s">
                        <li class="breadcrumb-item">
                           <Link class="breadcrumb-link" to="/">
                              <i class="bi bi-house icon "></i>home
                           </Link>
                        </li>
                        <li class="breadcrumb-item active">services</li>
                     </ul>
                  </nav>
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
