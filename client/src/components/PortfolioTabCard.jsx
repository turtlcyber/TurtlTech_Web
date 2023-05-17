import React from "react";
import NoImage from "../assets/images/NoImage.jpg";
const PortfolioTabCard = ({ image, title }) => {
   return (
      <div className="col-12 col-md-6 col-lg-4 portfolio-item mobile">
         <div className="item">
            <a className="portfolio-img-link" href="services-turtl.html">
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
