import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import Parser from "html-react-parser";
import {
   portfolioBySlugApi,
   portfoliosByFieldApi,
   serviceCategoryBySlugApi,
} from "../apis/Apis";
import PortfolioTabCard from "../components/PortfolioTabCard";

const ServiceCategory = () => {
   let params = useParams();
   const [serviceCategory, setServiceCategory] = useState(null);
   const [portfolios, setPortfolios] = useState(null);
   const [seoDataFromServer, setSeoDataFromServer] = useState({});
   useEffect(() => {
      Prism.highlightAll();
      serviceCategoryBySlugApi(params.slug)
         .then((res) => {
            console.log(res.data);
            setServiceCategory(res.data.data);
            if (res.data.data.seoData) {
               console.log("in", res.data.data.seoData);
               setSeoDataFromServer({ seoData: res.data.data.seoData });
            }
         })
         .catch((err) => {
            console.log(err);
         });
      portfoliosByFieldApi(params.slug)
         .then((res) => {
            setPortfolios(res.data.data);
            console.log(res.data.data);
         })
         .catch((err) => {
            console.log(err);
         });
   }, []);
   return (
      <>
         <Helmet>
            {seoDataFromServer.seoData &&
               seoDataFromServer.seoData.pageTitle && (
                  <title>{seoDataFromServer.seoData.pageTitle}</title>
               )}
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
         <div
            class="blog"
            style={{ paddingTop: "5rem", backgroundColor: "#f5f5f5" }}
         >
            <div className="container">
               <div className="row">
                  <div className="col-1"></div>

                  <div className="col-8  border border-1 rounded-3 bg-white text-start">
                     <div className="posts-grid horizontal py-5">
                        {serviceCategory && (
                           <div class="row">
                              <div class="col-12 col-lg-10 mx-auto">
                                 <div class="post-img-wrapper post-featured-area">
                                    {
                                       <img
                                          class=""
                                          loading="lazy"
                                          src={
                                             serviceCategory.categoryIcon
                                                .iconUrl
                                          }
                                          alt={
                                             serviceCategory.categoryIcon
                                                .iconAlt
                                          }
                                          width={150}
                                       />
                                    }
                                 </div>
                                 <h2 class="post-title text-start">
                                    {serviceCategory.title}
                                 </h2>
                              </div>
                              <div class="col-12 col-lg-10 mx-auto">
                                 <div class="post-main-area">
                                    {
                                       <p className="blogdesc">
                                          {serviceCategory.description}
                                       </p>
                                    }
                                    <hr />
                                    <div className="parsedContent">
                                    {Parser(serviceCategory.content)}
                                    </div>

                                    {serviceCategory.tags.length && (
                                       <div class="tags panel">
                                          <ul class="sidebar-list tags-list ">
                                             <li class="tags-icon-label ">
                                                <i class="fas fa-tags icon"></i>
                                             </li>
                                             {serviceCategory.tags.map(
                                                (el, i) => (
                                                   <li
                                                      class="tag-item"
                                                      key={`${i}_tag`}
                                                   >
                                                      <a
                                                         class="tag-link"
                                                         href="all-services.html"
                                                      >
                                                         #{el}
                                                      </a>
                                                   </li>
                                                )
                                             )}
                                          </ul>
                                       </div>
                                    )}
                                 </div>
                              </div>
                           </div>
                        )}

                        <div className="row">
                     <div className="col-12 col-lg-10 mx-auto">
                     {
                        portfolios && portfolios.map((el, i) => (
                           <PortfolioTabCard image={el.coverImage.coverImgUrl} title={el.title} slug={el.slug}/>
                        ))
                     }
                     </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-3"></div>
               </div>
            </div>
         </div>
      </>
   );
};

export default ServiceCategory;
