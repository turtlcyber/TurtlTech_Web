import React from "react";
import NoImage from "../assets/images/NoImage.jpg";
import { useNavigate } from "react-router-dom";
const PortfolioTabCard = ({ image, title, slug }) => {
   const history = useNavigate();
   const openPortfolio = (slug) => {
      history(`/services/${slug}`);
      console.log(slug);
   };
   return (
      <div className="col-12 col-md-6 col-lg-4 portfolio-item mobile">
         <div className="item">
            <a className="portfolio-img-link" onClick={() => openPortfolio(slug)}>
               <img
                  className="portfolio-img img-fluid"
                  loading="lazy"
                  src={image ? image : NoImage}
                  alt="portfolio item photo"
               />
            </a>
            <div className="item-info">
               <h3 className="item-title">{title}</h3>
               <i className="bi bi-arrow-right icon"></i>
            </div>
         </div>
      </div>
   );
};

export default PortfolioTabCard;
