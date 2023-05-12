import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { RiImageAddFill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { blogModelOpenFn } from "../../redux/R_Action";

const initial = {
  blogTitle:'',
  coverImg:'',
  tags:[],
  description:'',
  sections:[]
}
const sections = {
  title:'',
  bannerImg:'',
  content:[],
  quoet:'',
}
const content = {
  text:'',
  image:{
    img:'',
    imgPos:'',
  }
}

const NewBlogSec = () => {
    const [blogData, setBlogData] = useState(initial);
    const [sectionInfo, setSectionInfo] = useState(sections);
    const [contentInfo, setContentInfo] = useState(content);
    const dispatch = useDispatch();

  
    const saveSection = () => {
      if(sectionInfo.title != ''){
        let secArr = blogData.sections;
        secArr.push(sectionInfo);
        setBlogData(data => {return {...data, sections: secArr}});
        setSectionInfo(sections);
      }
    }
    const demo = () => {
      console.log(blogData);
    }

   return (
      <>
         <div className="my-2 w-100">
            <div className="d-flex justify-content-between">
               <textarea
                  placeholder="Add section heading..."
                  rows={1}
                  onChange={(e) => setSectionInfo(data => {return {...data, title:e.target.value}})}
                  value={sectionInfo.title}
                  style={{
                     fontSize: "2rem",
                     fontWeight: 700,
                     width: "100%",
                     resize: "none",
                     outline: "none",
                     border: "1px solid #d3d4d8",
                     borderRadius: 5,
                     padding:5
                  }}
               ></textarea>
               <input type="file" name="" id="" /> 
               {/* <RiImageAddFill size={50} color="red" cursor={'pointer'}/> */}
            </div>
            <button className="btn btn-primary" onClick={() => dispatch(blogModelOpenFn())}>addContent</button>
            {/* <ReactQuill theme="snow" value={value} onChange={setValue} /> */}
            <button onClick={() => saveSection()}>saveSec</button>
            <button onClick={() => demo()}>check demo</button>
         </div>
      </>
   );
};

export default NewBlogSec;
