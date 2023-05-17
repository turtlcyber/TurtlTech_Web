import React, { useEffect, useState } from "react";
import { getAllFaqApi, getPageImagesByPageName } from "../apis/Apis";
import { Link } from "react-router-dom";

const FAQ = () => {
   const [listOfFaq, setListOfFaq] = useState([]);
   const [filterFaq, setFilterFaq] = useState([]);
   const [coverImage, setCoverImage] = useState({ url: "", alt: "" });

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

   useEffect(() => {
      getCoverImageByPageName();
      getAllFaq();
   }, []);
   return (
      <div className="mt-5">
         <div>
            <div style={{ position: "relative", height: "100%", maxHeight:'900px', overflow:'hidden' }}>
               <div className="coverImageTextDiv">
               <div class="container">
               <div class="hero-text-area centerd">
                  <h1 class="hero-title  wow fadeInUp" data-wow-delay=".2s" style={{fontSize:'4rem', fontWeight:'bold'}}>
                     Frequently Ask Questions
                  </h1>
                  <nav aria-label="breadcrumb ">
                     <ul class="breadcrumb wow fadeInUp" data-wow-delay=".6s">
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
