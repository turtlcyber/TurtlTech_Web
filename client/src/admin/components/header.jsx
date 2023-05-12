import React from "react";

export const Header = () => {
   return (
      <React.Fragment>
         <header className="bg-light border-bottom position-fixed top-0 start-0 end-0" style={{zIndex:1000}}>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
               <div className="container-fluid">
                  <a className="navbar-brand">Turtl Cyber Security</a>
                  <div
                     className="collapse navbar-collapse"
                     id="navbarSupportedContent"
                  >
                     <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
                     <div>
                        <span className="badge text-bg-primary mx-1">4</span>
                        <span className="badge text-bg-danger mx-1">3</span>
                        <span className="badge text-bg-primary mx-1">5</span>
                        <img
                           src={require("../../assets/img/employ-img.jpg")}
                           height={50}
                           className="rounded-circle mx-1 border"
                        />
                     </div>
                  </div>
               </div>
            </nav>
         </header>
      </React.Fragment>
   );
};

export default Header;
