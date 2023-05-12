import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { blogModelCloseFn } from '../../redux/R_Action';
import { useState } from 'react';
import { Editor } from "@tinymce/tinymce-react";

const BlogComp = ({element}) => {
   const {blogOpenClose, editBlog} = useSelector(state => state);
   const [value, setValue] = useState("");
   const dispatch = useDispatch();
  return (
   <>
  
      <div
      style={{
         display: blogOpenClose ? 'block' : 'none',
         position:'absolute',
         border: '1px solid black',
         borderRadius:10,
         width:'700px',
         minHeight:'400px',
         top:'40%',
         left:'50%',
         zIndex:2000,
         // padding:2,
         transform: 'translate(-50%, -40%)',
         backgroundColor:'white'
      }}>
         <Editor
            apiKey="cvbmpyjuiulrxnye9jjjpdx5irhkkwmjxshr5t53e8rzvtrh"
            value={editBlog}
            init={{
               selector: "textarea",
               height: 500,
               plugins: "codesample code lists image preview link",
               automatic_uploads: true,
               menubar:false,
               codesample_languages: [
                  { text: "JavaScript", value: "javascript" },
                  { text: "HTML/XML", value: "markup" },
                  { text: "CSS", value: "css" },
                  { text: "PHP", value: "php" },
                  { text: "Ruby", value: "ruby" },
                  { text: "Python", value: "python" },
                  { text: "Java", value: "java" },
                  { text: "C", value: "c" },
                  { text: "C#", value: "csharp" },
                  { text: "C++", value: "cpp" },
               ],
               toolbar:
                  "undo redo styles bold italic alignleft aligncenter alignright superscript subscript numlist bullist codesample code | link",
               content_style:
                  "body { font-family:Helvetica,Arial,sans-serif; font-size:16px }",
            }}
         />
         

         <button className='btn btn-danger' onClick={() => dispatch(blogModelCloseFn(false))}>Close</button>
      </div>
   </>
  )
}

export default BlogComp