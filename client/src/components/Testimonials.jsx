import React from "react";
import NoUser from '../assets/icons/nouser.png';
const Testimonials = ({picture,name,designation,story,rating}) => {
   const ratings = (ratingValue) => {
      let rate = [];
      for(let i=0; i<Math.floor(ratingValue); i++){
         rate.push(<li>
            <i className="fas fa-star fa-sm text-warning"></i>
         </li>);
      }
      if(ratingValue - Math.floor(ratingValue)){
      rate.push(<li>
         <i className="fas fa-star-half-alt fa-sm text-warning"></i>
      </li> );
      }

      return rate;
   }

   return (
      <>
         <div className="col-md-4 mb-5 mb-md-0">
            <div className="d-flex justify-content-center mb-4">
               <img
                  src={picture ? picture : NoUser}
                  className="rounded-circle shadow-1-strong"
                  width="150"
                  height="150"
               />
            </div>
            <h5 className="mb-3">{name}</h5>
            <h6 className="text-primary mb-3">{designation}</h6>
            <p className="px-xl-3">
               <i className="fas fa-quote-left pe-2"></i>{story}
            </p>
            <ul className="list-unstyled d-flex justify-content-center mb-0">
               {
                     ratings(rating)
               }
               {/* <li>
                  <i className="fas fa-star fa-sm text-warning"></i>
               </li>
               <li>
                  <i className="fas fa-star fa-sm text-warning"></i>
               </li>
               <li>
                  <i className="fas fa-star fa-sm text-warning"></i>
               </li>
               <li>
                  <i className="fas fa-star fa-sm text-warning"></i>
               </li>
               <li>
                  <i className="fas fa-star-half-alt fa-sm text-warning"></i>
               </li> */}
            </ul>
         </div>
      </>
   );
};

export default Testimonials;
