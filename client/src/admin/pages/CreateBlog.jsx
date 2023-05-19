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
import {
   SpinnerClose,
   SpinnerOpen,
   blogEditFn,
   blogModelOpenFn,
   filemanagerOpen,
} from "../../redux/R_Action";
import { blogPost } from "../../apis/Apis";
const initial = {
   blogTitle: "",
   tags: "",
   description: "",
   sections: [],
};

const CreateBlog = () => {
   const handle = useFullScreenHandle();
   const [editorKey, setEditorKey] = React.useState(4);
   const [isImageUrlBoxOpen, setIsImageBoxOpen] = useState(false);
   const [coverImage, setCoverImage] = useState({
      url: "",
      alt: "",
      isPreview: false,
   });
   const [seoData, setSeoData] = useState({
      pageTitle: "",
      pageDescription: "",
      pageKeywords: "",
      pageUrl: "",
      imageUrl: "",
      siteName: "",
      altImageText: "",
      imageHight: "",
      imageWidth: "",
   });
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
            content: editorRef.current.getContent(),
         };
         if (tempImg) {
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
   const coverHandler = () => {
      setIsImageBoxOpen(false);
      if (coverImage.url === "") {
         setCoverImage((old) => {
            return { ...old, isPreview: false };
         });
      } else {
         setCoverImage((old) => {
            return { ...old, isPreview: true };
         });
      }
   };
   const saveBlog = async () => {
      let dataSeo = {};
      if (seoData.pageTitle) {
         dataSeo.pageTitle = seoData.pageTitle;
      }
      if (seoData.pageDescription) {
         dataSeo.pageDescription = seoData.pageDescription;
      }
      if (seoData.pageKeywords) {
         dataSeo.pageKeywords = seoData.pageKeywords;
      }
      if (seoData.pageUrl) {
         dataSeo.pageUrl = seoData.pageUrl;
      }
      if (seoData.imageUrl) {
         dataSeo.imageUrl = seoData.imageUrl;
      }
      if (seoData.siteName) {
         dataSeo.siteName = seoData.siteName;
      }
      if (seoData.altImageText) {
         dataSeo.altImageText = seoData.altImageText;
      }
      if (seoData.imageHight) {
         dataSeo.imageHight = seoData.imageHight;
      }
      if (seoData.imageWidth) {
         dataSeo.imageWidth = seoData.imageWidth;
      }
      const form = new FormData();
      form.append("blogTitle", blogData.blogTitle);
      form.append("description", blogData.description);
      form.append("coverImgUrl", coverImage.url);
      form.append("coverImgAlt", coverImage.alt);
      form.append("seoData", JSON.stringify(dataSeo));
      let arr = [];
      for (let i = 0; i < blogData.sections.length; i++) {
         let { content } = blogData.sections[i];
         console.log(content);
         arr.push(content);
      }

      form.append("tags", blogData.tags);
      form.append("sections", JSON.stringify(arr));

      console.log(JSON.stringify(arr));
      console.log(blogData);
      console.log(coverImage.url);
      console.log(form.getAll("coverImgUrl"));

      dispatch(SpinnerOpen());
      await blogPost(form)
         .then((res) => {
            console.log(res.data);
            alert("Blog Created Successfully");
            dispatch(SpinnerClose());
         })
         .catch((err) => {
            console.log(err);
            dispatch(SpinnerClose());
         });
   };

   return (
      <React.Fragment>
         <BlogComp element={editBlog} />
         <div className="row" style={{ backgroundColor: "white", height: "100%" }}>
            {/* <div className="row align-items-start">
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
                           className="btn btn-light border fw-bold"
                           onClick={() => dispatch(filemanagerOpen())}
                        >
                           &nbsp; File Manager &nbsp;
                        </button>
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
               </div> */}

            <div className="col-10">
               <div
                  className="border border-2 rounded-4"
                  style={{ minHeight: 500 }}
               >
                  <div className="p-4 align-items-start d-flex flex-column">
                     <div class="mb-3" style={{ position: "relative" }}>
                        <button
                           className="btn btn-outline-primary"
                           onClick={() => setIsImageBoxOpen(true)}
                        >
                           {coverImage.isPreview
                              ? "Change Cover Image"
                              : "Add Cover"}
                        </button>
                        <div
                           className="  rounded p-2"
                           style={{
                              position: "absolute",
                              top: 0,
                              display: isImageUrlBoxOpen ? "block" : "none",
                              width: "500px",
                              backgroundColor: "#6ee875",
                           }}
                        >
                           <div class="input-group mb-3">
                              <span
                                 class="input-group-text"
                                 style={{ width: "90px" }}
                              >
                                 Image Url
                              </span>
                              <input
                                 type="url"
                                 aria-label="Image url"
                                 class="form-control"
                                 value={coverImage.url}
                                 onChange={(e) =>
                                    setCoverImage((old) => {
                                       return { ...old, url: e.target.value };
                                    })
                                 }
                              />
                           </div>
                           <div class="input-group">
                              <span
                                 class="input-group-text"
                                 style={{ width: "90px" }}
                              >
                                 Alt Text
                              </span>
                              <input
                                 type="text"
                                 aria-label="alt text"
                                 class="form-control"
                                 value={coverImage.alt}
                                 onChange={(e) =>
                                    setCoverImage((old) => {
                                       return { ...old, alt: e.target.value };
                                    })
                                 }
                              />
                           </div>
                           <div className="d-flex justify-content-center">
                              <button
                                 className="mt-3 btn btn-primary mx-1"
                                 onClick={() => coverHandler()}
                              >
                                 Save
                              </button>
                              <button
                                 className="mt-3 btn btn-warning mx-1"
                                 onClick={() => setIsImageBoxOpen(false)}
                              >
                                 Close
                              </button>
                           </div>
                        </div>
                     </div>
                     {coverImage.isPreview && (
                        <img src={coverImage.url} alt={coverImage.alt} />
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
                        onChange={(e) =>
                           setBlogData((data) => {
                              return { ...data, tags: e.target.value };
                           })
                        }
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
                              {el.img && (
                                 <img src={URL.createObjectURL(el.img)} />
                              )}
                           </>
                        ))}
                     </div>
                     <Editor
                        key={editorKey}
                        apiKey="cvbmpyjuiulrxnye9jjjpdx5irhkkwmjxshr5t53e8rzvtrh"
                        onInit={(evt, editor) => (editorRef.current = editor)}
                        init={{
                           selector: "textarea",
                           height: 400,
                           width: "100%",
                           zIndex: 2000,
                           plugins:
                              "codesample code lists image preview link editimage",
                           automatic_uploads: true,
                           menubar: false,
                           images_file_types: "jpg,svg,webp",
                           file_picker_types: "image",
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
                              "undo insertfile redo styles bold italic image alignleft aligncenter alignright superscript subscript numlist bullist codesample code | blockquote link",
                           content_style:
                              "body { font-family:Helvetica,Arial,sans-serif; font-size:16px }",
                        }}
                     />
                     <div className="col-8 mt-5 text-start">
                     <h3 className="my-1">SEO Information</h3>
                     <div class="input-group input-group-sm mb-1">
                        <span
                           class="input-group-text"
                           id="inputGroup-sizing-sm"
                           style={{ width: "130px" }}
                        >
                           Page Title
                        </span>
                        <input
                           type="text"
                           class="form-control"
                           aria-label="Sizing example input"
                           aria-describedby="inputGroup-sizing-sm"
                           value={seoData.pageTitle}
                           onChange={(e) =>
                              setSeoData((old) => {
                                 return { ...old, pageTitle: e.target.value };
                              })
                           }
                        />
                     </div>
                     <div class="input-group input-group-sm mb-1">
                        <span
                           class="input-group-text"
                           id="inputGroup-sizing-sm"
                           style={{ width: "130px" }}
                        >
                           Page Description
                        </span>
                        <input
                           type="text"
                           class="form-control"
                           aria-label="Sizing example input"
                           aria-describedby="inputGroup-sizing-sm"
                           value={seoData.pageDescription}
                           onChange={(e) =>
                              setSeoData((old) => {
                                 return {
                                    ...old,
                                    pageDescription: e.target.value,
                                 };
                              })
                           }
                        />
                     </div>
                     <div class="input-group input-group-sm mb-1">
                        <span
                           class="input-group-text"
                           id="inputGroup-sizing-sm"
                           style={{ width: "130px" }}
                        >
                           Page Keywords
                        </span>
                        <input
                           type="text"
                           class="form-control"
                           aria-label="Sizing example input"
                           aria-describedby="inputGroup-sizing-sm"
                           value={seoData.pageKeywords}
                           onChange={(e) =>
                              setSeoData((old) => {
                                 return {
                                    ...old,
                                    pageKeywords: e.target.value,
                                 };
                              })
                           }
                        />
                     </div>
                     <div class="input-group input-group-sm mb-1">
                        <span
                           class="input-group-text"
                           id="inputGroup-sizing-sm"
                           style={{ width: "130px" }}
                        >
                           Page URL
                        </span>
                        <input
                           type="text"
                           class="form-control"
                           aria-label="Sizing example input"
                           aria-describedby="inputGroup-sizing-sm"
                           value={seoData.pageUrl}
                           onChange={(e) =>
                              setSeoData((old) => {
                                 return { ...old, pageUrl: e.target.value };
                              })
                           }
                        />
                     </div>
                     <div class="input-group input-group-sm mb-1">
                        <span
                           class="input-group-text"
                           id="inputGroup-sizing-sm"
                           style={{ width: "130px" }}
                        >
                           Image URL
                        </span>
                        <input
                           type="text"
                           class="form-control"
                           aria-label="Sizing example input"
                           aria-describedby="inputGroup-sizing-sm"
                           value={seoData.imageUrl}
                           onChange={(e) =>
                              setSeoData((old) => {
                                 return { ...old, imageUrl: e.target.value };
                              })
                           }
                        />
                     </div>
                     <div class="input-group input-group-sm mb-1">
                        <span
                           class="input-group-text"
                           id="inputGroup-sizing-sm"
                           style={{ width: "130px" }}
                        >
                           Site Name
                        </span>
                        <input
                           type="text"
                           class="form-control"
                           aria-label="Sizing example input"
                           aria-describedby="inputGroup-sizing-sm"
                           value={seoData.siteName}
                           onChange={(e) =>
                              setSeoData((old) => {
                                 return { ...old, siteName: e.target.value };
                              })
                           }
                        />
                     </div>
                     <div class="input-group input-group-sm mb-1">
                        <span
                           class="input-group-text"
                           id="inputGroup-sizing-sm"
                           style={{ width: "130px" }}
                        >
                           Alt Image Text
                        </span>
                        <input
                           type="text"
                           class="form-control"
                           aria-label="Sizing example input"
                           aria-describedby="inputGroup-sizing-sm"
                           value={seoData.altImageText}
                           onChange={(e) =>
                              setSeoData((old) => {
                                 return {
                                    ...old,
                                    altImageText: e.target.value,
                                 };
                              })
                           }
                        />
                     </div>
                     <div class="input-group input-group-sm mb-4">
                        <span
                           class="input-group-text"
                           id="inputGroup-sizing-sm"
                           style={{ width: "180px" }}
                        >
                           Image Height - Width
                        </span>
                        <input
                           type="text"
                           class="form-control"
                           aria-label="Sizing example input"
                           aria-describedby="inputGroup-sizing-sm"
                           value={seoData.imageHight}
                           placeholder="Height"
                           onChange={(e) =>
                              setSeoData((old) => {
                                 return { ...old, imageHight: e.target.value };
                              })
                           }
                        />
                        <input
                           type="text"
                           class="form-control"
                           aria-label="Sizing example input"
                           aria-describedby="inputGroup-sizing-sm"
                           value={seoData.imageWidth}
                           placeholder="Width"
                           onChange={(e) =>
                              setSeoData((old) => {
                                 return { ...old, imageWidth: e.target.value };
                              })
                           }
                        />
                     </div>
                     </div>
                     
                     <button
                        className="btn btn-primary my-2"
                        onClick={() => demo()}
                     >
                        Save & Preview
                     </button>
                  </div>
               </div>
            </div>
            <div className="col-2">
               <div class="d-grid gap-2 mx-auto position-fixed">
                  <button
                     type="button"
                     className="btn btn-light border fw-bold"
                     onClick={() => dispatch(filemanagerOpen())}
                  >
                     &nbsp; File Manager &nbsp;
                  </button>
                  {/* <button type="button" className="btn btn-danger fw-bold">
                     &nbsp; Edit &nbsp;
                  </button> */}
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
      </React.Fragment>
   );
};

export default CreateBlog;
