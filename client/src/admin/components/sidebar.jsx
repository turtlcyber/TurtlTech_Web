import React from "react";
import { Link, useLocation} from "react-router-dom";

const Sidebar = () => {
  const {pathname} = useLocation();
   return (
      <React.Fragment>
         <div style={{ height: "100vh", width:'280px', zIndex:100, position:'fixed' }} className="border-end p-3">
            <div className="d-flex flex-column">
               <a class="m-1 border rounded p-1 fs-5 text-start px-3 " role="button" style={{ backgroundColor: pathname === '/admin/home'  || pathname === '/admin' ? '#e9e9e9' :''}}>
                  <Link to={"/admin/home"} role="button" className="d-block">Home</Link>
               </a>
               <a class="m-1 border rounded p-1 fs-5 text-start px-3" role="button"  style={{ backgroundColor: pathname === '/admin/blogpost' ? '#e9e9e9' :''}}>
                  <Link to={"/admin/blogpost"} role="button" className="d-block">Blog Post</Link>
               </a>
               <a class="m-1 border rounded p-1 fs-5 text-start px-3" role="button"  style={{ backgroundColor: pathname === '/admin/createblog' ? '#e9e9e9' :''}}>
                  <Link to={"/admin/createblog"} role="button" className="d-block">Create Blog</Link>
               </a>
               <a class="m-1 border rounded p-1 fs-5 text-start px-3" role="button" style={{ backgroundColor: pathname === '/admin/turtlsinfo' ? '#e9e9e9' :''}}>
                  <Link to={"/admin/turtlsinfo"} role="button" className="d-block">Turtl Tech Info</Link>
               </a>
               <a class="m-1 border rounded p-1 fs-5 text-start px-3" role="button" style={{ backgroundColor: pathname === '/admin/portfolio' ? '#e9e9e9' :''}}>
                  <Link to={"/admin/portfolio"} role="button" className="d-block">Portfolio</Link>
               </a>
               <a class="m-1 border rounded p-1 fs-5 text-start px-3" role="button" style={{ backgroundColor: pathname === '/admin/servicecategory' ? '#e9e9e9' :''}}>
                  <Link to={"/admin/servicecategory"} role="button" className="d-block">Service Category</Link>
               </a>
               
            </div>
         </div>
      </React.Fragment>
   );
};

export default Sidebar;
