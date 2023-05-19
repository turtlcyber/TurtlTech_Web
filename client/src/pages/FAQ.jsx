import React, { useEffect, useState } from "react";
import {
   getAllFaqApi,
   getPageImagesByPageName,
   getSeoByPageName,
} from "../apis/Apis";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const FAQ = () => {
   const [listOfFaq, setListOfFaq] = useState([]);
   const [filterFaq, setFilterFaq] = useState([]);
   const [coverImage, setCoverImage] = useState({ url: "", alt: "" });
   const [seoDataFromServer, setSeoDataFromServer] = useState({});
   const getAllFaq = () => {
      getAllFaqApi()
         .then((res) => {
            setListOfFaq(res.data.data);
            setFilterFaq(res.data.data);
            console.log(res.data.data);
         })
         .catch((err) => {
            alert("Something went wrong");
         });
   };
   const getCoverImageByPageName = () => {
      getPageImagesByPageName("FAQ").then((res) => {
         setCoverImage({
            url: res.data.data.imageUrl,
            alt: res.data.data.altText,
         });
      });
   };
   const filterFaqFn = (category) => {
      if (category === "ALL") {
         setFilterFaq(listOfFaq);
      } else {
         let arr = listOfFaq.filter((curr, idx, arr) => {
            return curr.category === category;
         });
         setFilterFaq(arr);
         // console.log(arr);
      }
   };
   const getSEOdata = () => {
      getSeoByPageName("FAQ")
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
      getAllFaq();
      getSEOdata();
   }, []);
   return (
      <div className="mt-5">
         <Helmet>
            <title>
               {seoDataFromServer.seoData
                  ? seoDataFromServer.seoData.pageTitle
                  : "FAQ"}
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
         <div>
            <div
               style={{
                  position: "relative",
                  height: "100%",
                  maxHeight: "900px",
                  overflow: "hidden",
                  zIndex: 1000,
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
                           Frequently Ask Questions
                        </h1>
                        <nav aria-label="breadcrumb ">
                           <ul
                              class="breadcrumb wow fadeInUp"
                              data-wow-delay=".6s"
                           >
                              <li class="breadcrumb-item">
                                 <Link class="breadcrumb-link" to="/faq">
                                    <i class="bi bi-house icon "></i>home
                                 </Link>
                              </li>
                              <li class="breadcrumb-item active">faq</li>
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

         <div className="row text-start">
            <div className="col-3 my-5 ps-5">
               <ul class="list-group">
                  <li
                     class="list-group-item liHover"
                     role="button"
                     onClick={() => filterFaqFn("ALL")}
                  >
                     All
                  </li>
                  {[...new Set(listOfFaq.map((el) => el.category))]
                     .sort()
                     .map((el) => (
                        <li
                           key={el._id}
                           class="list-group-item liHover"
                           role="button"
                           onClick={() => filterFaqFn(el)}
                        >
                           {el}
                        </li>
                     ))}
               </ul>
            </div>
            <div className="col-8 my-5 text-start">
               <div class="accordion" id="accordionFaqPage">
                  {filterFaq.map((el, i) => (
                     <div class="accordion-item" key={el._id}>
                        <h2 class="accordion-header">
                           <button
                              class="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target={`#collapse_${el._id}`}
                              aria-expanded="false"
                              aria-controls={`collapse_${el._id}`}
                           >
                              {el.question}
                           </button>
                        </h2>
                        <div
                           id={`collapse_${el._id}`}
                           class="accordion-collapse collapse"
                           data-bs-parent="#accordionFaqPage"
                        >
                           <div class="accordion-body">{el.answer}</div>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
            <div className="col-1"></div>
         </div>
      </div>
   );
};

export default FAQ;
