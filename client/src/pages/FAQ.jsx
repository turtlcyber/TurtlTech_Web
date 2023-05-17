import React from "react";

const FAQ = () => {
   return (
      <div className="mt-5">
         <img
            width={"100%"}
            height={"700px"}
            src="https://images.unsplash.com/photo-1614853036460-e8cff7410ee9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGJhbm5lciUyMGJhY2tncm91bmR8ZW58MHx8MHx8&w=1000&q=80"
         />
         <div className="row text-start">
            <div className="col-2"></div>
            <div className="col-8 my-5">
               <div class="accordion" id="accordionExample">
                  <div class="accordion-item">
                     <h2 class="accordion-header">
                        <button
                           class="accordion-button"
                           type="button"
                           data-bs-toggle="collapse"
                           data-bs-target="#collapseOne"
                           aria-expanded="true"
                           aria-controls="collapseOne"
                        >
                           Accordion Item #1
                        </button>
                     </h2>
                     <div
                        id="collapseOne"
                        class="accordion-collapse collapse show"
                        data-bs-parent="#accordionExample"
                     >
                        <div class="accordion-body">
                           <strong>
                              This is the first item's accordion body.
                           </strong>{" "}
                           It is shown by default, until the collapse plugin
                           adds the appropriate classes that we use to style
                           each element. These classes control the overall
                           appearance, as well as the showing and hiding via CSS
                           transitions. You can modify any of this with custom
                           CSS or overriding our default variables. It's also
                           worth noting that just about any HTML can go within
                           the <code>.accordion-body</code>, though the
                           transition does limit overflow.
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-2"></div>
         </div>
      </div>
   );
};

export default FAQ;
