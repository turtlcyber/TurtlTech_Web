import React from 'react'
import Header from '../admin/components/header';
import Home from '../admin/pages/Home';
import { Route, Routes } from 'react-router-dom'
import BlogPost from '../admin/pages/BlogPost';
import CreateBlog from '../admin/pages/CreateBlog';

const AdminRoute = () => {
  return (
    <Routes>
      <Route path="/admin" element={<Home/>}/>
      <Route path="/admin/home" element={<Home/>}/>
      <Route path="/admin/blogpost" element={<Home component={<BlogPost/>}/>}/>
      <Route path="/admin/createblog" element={<Home component={<CreateBlog/>}/>}/>
    </Routes>
  )
}

export default AdminRoute