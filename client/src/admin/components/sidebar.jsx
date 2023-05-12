import React from "react";
import { Link, useLocation} from "react-router-dom";

const Sidebar = () => {
  const {pathname} = useLocation();
   return (
      <React.Fragment>
         <div style={{ height: "100vh", width:'280px', zIndex:100, position:'fixed' }} className="border-end p-3">
            <div className="d-flex flex-column">
               <a class="m-1 border rounded p-1 fs-5 text-start px-3 " style={{ backgroundColor: pathname === '/admin/home'  || pathname === '/admin' ? '#e9e9e9' :''}}>
                  <Link to={"/admin/home"} className="d-block">Home</Link>
               </a>
               <a class="m-1 border rounded p-1 fs-5 text-start px-3"  style={{ backgroundColor: pathname === '/admin/blogpost' ? '#e9e9e9' :''}}>
                  <Link to={"/admin/blogpost"} className="d-block">Blog Post</Link>
               </a>
               <a class="m-1 border rounded p-1 fs-5 text-start px-3"  style={{ backgroundColor: pathname === '/admin/createblog' ? '#e9e9e9' :''}}>
                  <Link to={"/admin/createblog"} className="d-block">Create Blog</Link>
               </a>
            </div>
         </div>
      </React.Fragment>
   );
};

export default Sidebar;
