import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import Parser from 'html-react-parser';
import { portfolioBySlugApi } from "../apis/Apis";


const ServiceCategory = () => {
  let params = useParams();
  const [portfolio, setPortfolio] = useState(null);

  useEffect(() => {
    Prism.highlightAll();
    portfolioBySlugApi(params.slug)
       .then((res) => {
          console.log(res.data);
          setPortfolio(res.data.data);
          
       })
       .catch((err) => {
          console.log(err);
       });
 }, []);
  return (
    <div
            class="blog"
            style={{ paddingTop: "5rem", backgroundColor: "#f5f5f5" }}
         >
            
            <div className="container">
               <div className="row">
                  <div className="col-1" >
                     
                  </div>

                  <div className="col-8  border border-1 rounded-3 bg-white text-start" >
                     <div className="posts-grid horizontal py-5">
                        {portfolio && (
                           <div class="row">
                              <div class="col-12 col-lg-10 mx-auto">
                                 <h2 class="post-title text-start">{portfolio.title}</h2>
                                 <div class="post-img-wrapper post-featured-area">
                                    {
                                       <img
                                          class="featured-img"
                                          loading="lazy"
                                          src={portfolio.coverImage.coverImgUrl}
                                          alt={portfolio.coverImage.coverImgAlt}
                                       />
                                    }
                                 </div>
                                 
                              </div>
                              <div class="col-12 col-lg-10 mx-auto">
                                 <div class="post-main-area">
                                    {<p className="blogdesc">{portfolio.description}</p>}
                                    <hr />
                                    {Parser(portfolio.content)}

                                    {portfolio.tags.length && (
                                       <div class="tags panel">
                                          <ul class="sidebar-list tags-list ">
                                             <li class="tags-icon-label ">
                                                <i class="fas fa-tags icon"></i>
                                             </li>
                                             {portfolio.tags.map((el, i) => (
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
                                             ))}
                                          </ul>
                                       </div>
                                    )}
                                 </div>
                              </div>
                           </div>
                        )}
                     </div>
                  </div>
                  <div className="col-3" >
                     
                  </div>
               </div>
            </div>
         </div>
  );
};

export default ServiceCategory;
