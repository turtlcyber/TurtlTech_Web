import axios from "axios";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import NoImage from "../assets/images/NoImage.jpg";
import { getAllServiceCategoryApi } from "../apis/Apis";

const AllServices = () => {
   const navigate = useNavigate();
   const [data, setData] = useState([]);
   const getData = async () => {
      await getAllServiceCategoryApi()
         .then((res) => {
            console.log(res.data.data);
            setData(res.data.data);
         })
         .catch((err) => {
            console.log(err);
         });
   };
   useEffect(() => {
      getData();
   }, []);
   return (
      <>
         <Helmet>
            <title>Services</title>
         </Helmet>
         <section class="services services-boxed mega-section" id="services">
            <div class="container">
               <div class="row gx-4 gy-4 services-row text-start justify-content-start">
                  {data  && data.map((el, index) => (
                     <div
                        onClick={() => {
                           navigate(`/services/service_category/${el.slug}`);
                        }}
                        key={el._id}
                        class="col-12 col-md-6 col-lg-4 mx-auto"
                     >
                        <div
                           class="box service-box bg-white wow fadeInUp reveal-start"
                           data-wow-offset="0"
                           data-wow-delay=".1s"
                        >
                           <div class="service-icon">
                              <img
                                 src={el.categoryIcon.iconUrl}
                                 width={130}
                                 alt={el.categoryIcon.iconAlt ? el.categoryIcon.iconAlt : "TurtlTech.com"}
                              />
                           </div>
                           <span class="service-num hollow-text">1 </span>
                           <div class="service-content">
                              <h3 class="service-title">
                                 &nbsp;&nbsp;&nbsp;{el.title}
                              </h3>
                              <p class="service-text">
                                 {el.description.slice(0, 200)}
                                 {el.description.length > 200 && "..."}
                              </p>
                           </div>
                           <p class="read-more">
                              read more<i class="bi bi-arrow-right icon"></i>
                           </p>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </section>
      </>
   );
};

export default AllServices;
