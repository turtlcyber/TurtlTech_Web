import React from "react";

const Spinner = () => {
   return (
      <>
         <div className="tt-spinner"></div>
         <div className="tt-spinner-inner">
            <div
               class="spinner-grow text-light"
               role="status"
               style={{ width: "100px", height: "100px" }}
            >
               <span class="visually-hidden">Loading...</span>
            </div>
         </div>
      </>
   );
};

export default Spinner;
