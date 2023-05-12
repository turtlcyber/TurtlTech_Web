import React, { useState } from "react";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import NewBlogSec from "../components/NewBlogSec";
import BlogComp from "../components/BlogComp";
import ReactQuill from "react-quill";
import { Editor } from "@tinymce/tinymce-react";
import "react-quill/dist/quill.snow.css";
import Parser from "html-react-parser";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { blogEditFn, blogModelOpenFn } from "../../redux/R_Action";
import { blogPost } from "../../apis/Apis";
const initial = {
   blogTitle: "",
   coverImg: "",
   tags: "",
   description: "",
   sections: [],
};

const CreateBlog = () => {
   const handle = useFullScreenHandle();
   const [editorKey, setEditorKey] = React.useState(4);
   const [value, setValue] = useState("");
   const [editBlog, setEditBlog] = useState({ idx: null, data: "" });
   const [tempImg, setTempImg] = useState();
   const [blogData, setBlogData] = useState(initial);
   const [section, setSection] = useState("");
   const editorRef = useRef(null);
   const dispatch = useDispatch();
   const state = useSelector((state) => state);
   const clearEditor = () => {
      const newKey = editorKey * 43;
      setEditorKey(newKey);
   };
   const demo = () => {
      console.log(blogData);
      if (editorRef.current) {
         let arr = blogData.sections;
         let obj = {
            content:editorRef.current.getContent(),
         }
         if(tempImg){
            obj.img = tempImg;
         }
         arr.push(obj);
         setBlogData((data) => {
            return { ...data, sections: arr };
         });
         setTempImg(null);
         clearEditor();
         console.log(editorRef.current.getContent());
      }

   };

   const updateSection = (el, idx) => {
      dispatch(blogEditFn(el));
      // setEditBlog({idx:idx, data:el});
      dispatch(blogModelOpenFn());
      console.log(state);
      console.log(el);
      // console.log(idx);
   };


   const saveBlog = async () => {
      const form = new FormData();
      form.append('blogTitle', blogData.blogTitle);
      form.append('description', blogData.description);
      form.append('coverImg', blogData.coverImg, blogData.coverImg.name);
      let arr = [];
      for(let i=0; i<blogData.sections.length; i++){
         let {content} = blogData.sections[i];
         console.log(content);
         arr.push(content);
         // form.append('sections', toString(content));
         if(blogData.sections[i].img){
            form.append(`secImg_${i}`, blogData.sections[i].img, blogData.sections[i].img.name);
         }
      }

      
      form.append('tags', blogData.tags);
      form.append('sections', JSON.stringify(arr));
      console.log(JSON.stringify(arr));
      console.log(blogData);
      console.log(form.getAll('sections'));
      await blogPost(form).then(res => {
         console.log(res.data);
      }).catch(err => {
         console.log(err);
      })
   }

   return (
      <React.Fragment>
         {/* <button className="btn btn-warning" onClick={handle.enter}>
            Full Screen
         </button> */}
         <FullScreen handle={handle}>
            <BlogComp element={editBlog} />
            <div style={{ backgroundColor: "white", height: "100%" }}>
               <div className="row align-items-start">
                  <div className="col" style={{ textAlign: "start" }}>
                     <div className="d-flex align-items-center">
                        <img
                           src={require("../../assets/img/logo1-removebg-preview.png")}
                           height={34}
                           alt="turtltech"
                        />
                        <h4
                           className="mt-2"
                           style={{
                              fontFamily: "Noto Sans, sans-serif",
                              fontSize: "23px",
                              fontWeight: 800,
                           }}
                        >
                           TurtlTech.com
                        </h4>
                     </div>
                  </div>
                  <div className="col m-2">
                     <div
                        className="btn-group"
                        role="group"
                        aria-label="Basic mixed styles example"
                     >
                        <button
                           type="button"
                           className="btn btn-danger fw-bold"
                        >
                           &nbsp; Edit &nbsp;
                        </button>
                        <button
                           type="button"
                           className="btn btn-warning fw-bold"
                        >
                           Preview
                        </button>
                        <button
                           type="button"
                           className="btn btn-secondary fw-bold"
                           onClick={() => saveBlog()}
                        >
                           Publish
                        </button>
                     </div>
                  </div>
               </div>

               <div className="d-flex justify-content-center">
                  <div
                     className="border border-2 rounded-4"
                     style={{ maxWidth: 1100, width: 1100, minHeight: 500 }}
                  >
                     <div className="p-4 align-items-start d-flex flex-column">
                        <div class="mb-3">
                           <input
                              type="file"
                              class="d-none"
                              id="inputGroupFile02"
                              onChange={(e) =>
                                 setBlogData((el) => {
                                    return {
                                       ...el,
                                       coverImg: e.target.files[0],
                                    };
                                 })
                              }
                           />
                           <label
                              class="btn btn-outline-secondary"
                              for="inputGroupFile02"
                           >
                              {blogData.coverImg
                                 ? "Replace Cover"
                                 : "Add a cover image"}
                           </label>
                        </div>
                        {blogData.coverImg && (
                           <img src={URL.createObjectURL(blogData.coverImg)} />
                        )}
                        <textarea
                           placeholder="New post title here..."
                           rows={1}
                           value={blogData.blogTitle}
                           onChange={(e) =>
                              setBlogData((data) => {
                                 return { ...data, blogTitle: e.target.value };
                              })
                           }
                           style={{
                              fontSize: "3rem",
                              fontWeight: 800,
                              width: "100%",
                              resize: "none",
                              outline: "none",
                              border: "none",
                              borderRadius: 14,
                           }}
                        ></textarea>
                        <textarea
                           style={{
                              resize: "none",
                              outline: "none",
                              width: "100%",
                              border: "none",
                           }}
                           placeholder="Add multiple tags and tags start with # sign"
                           onChange={(e) => setBlogData(data => {
                              return {...data, tags:e.target.value}
                           })}
                        ></textarea>
                        <textarea
                           rows={3}
                           value={blogData.description}
                           onChange={(e) =>
                              setBlogData((data) => {
                                 return {
                                    ...data,
                                    description: e.target.value,
                                 };
                              })
                           }
                           style={{
                              resize: "none",
                              outline: "none",
                              width: "100%",
                              border: "1px solid #d3d4d8",
                              borderRadius: 4,
                              padding: 4,
                           }}
                           placeholder="Description..."
                        ></textarea>
                        <div className="text-start my-2">
                           {blogData.sections.map((el, idx) => (
                              <>
                                 <button
                                    className="btn btn-warning"
                                    onClick={() => updateSection(el, idx)}
                                 >
                                    Edit
                                 </button>
                                 {Parser(el.content)}
                                 {el.img && <img src={URL.createObjectURL(el.img)}/>}
                              </>
                           ))}
                        </div>
                        {/* <NewBlogSec/> */}
                        {/* <ReactQuill
                           className="my-2"
                           theme="snow"
                           modules={{
                              toolbar: {
                                 container: TOOLBAR_OPTIONS,
                              }
                           }}
                           value={value}
                           onChange={setValue}
                           style={{ width: "100%", textAlign: "left" }}
                        /> */}
                        <Editor
                           key={editorKey}
                           apiKey="cvbmpyjuiulrxnye9jjjpdx5irhkkwmjxshr5t53e8rzvtrh"
                           onInit={(evt, editor) =>
                              (editorRef.current = editor)
                           }
                           init={{
                              selector: "textarea",
                              height: 400,
                              width: "100%",
                              zIndex: 2000,
                              plugins:
                                 "codesample code lists image preview link",
                              automatic_uploads: true,
                              menubar: false,
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
                                 "undo redo styles bold italic alignleft aligncenter alignright superscript subscript numlist bullist codesample code | blockquote link",
                              content_style:
                                 "body { font-family:Helvetica,Arial,sans-serif; font-size:16px }",
                           }}
                        />

                        {tempImg && (
                           <img src={URL.createObjectURL(tempImg)} />
                        )}

                        <div class="mb-3">
                           <input
                              type="file"
                              class="d-none"
                              id="inputSecImg"
                              onChange={(e) => setTempImg(e.target.files[0])}
                           />
                           <label
                              class="btn btn-outline-secondary"
                              for="inputSecImg"
                           >
                              {tempImg ? "Replace" : "Add image"}
                           </label>
                        </div>

                        <button
                           className="btn btn-primary my-2"
                           onClick={() => demo()}
                        >
                           SAVE
                        </button>
                     </div>
                  </div>
               </div>
            </div>
         </FullScreen>
      </React.Fragment>
   );
};

export default CreateBlog;
