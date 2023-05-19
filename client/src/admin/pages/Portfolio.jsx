import { Editor } from "@tinymce/tinymce-react";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Parser from "html-react-parser";
import {
   SpinnerClose,
   SpinnerOpen,
   blogEditFn,
   blogModelOpenFn,
   filemanagerOpen,
} from "../../redux/R_Action";
import BlogComp from "../components/BlogComp";
import { getAllServiceCategoryApi, portfolioPostApi } from "../../apis/Apis";
const initial = {
   portfolioTitle: "",
   tags: "",
   description: "",
   content: "",
};

const Portfolio = () => {
   const [editorKey, setEditorKey] = React.useState(4);
   const [isImageUrlBoxOpen, setIsImageBoxOpen] = useState(false);
   const [portfolioField, setPortfolioField] = useState("");
   const [coverImage, setCoverImage] = useState({
      url: "",
      alt: "",
      isPreview: false,
   });
   const [editPortfolio, setEditPortfolio] = useState({ idx: null, data: "" });

   const [portfolioData, setPortfolioData] = useState(initial);
   const [categoryDropDown,setCategoryDropDown] = useState([]);
   const getData = async () => {
      await getAllServiceCategoryApi()
      .then((res) => {
            console.log(res.data.data);
            setCategoryDropDown(res.data.data);
         })
         .catch((err) => {
            console.log(err);
         });
   };
   const editorRef = useRef(null);
   const dispatch = useDispatch();
   const state = useSelector((state) => state);
   const clearEditor = () => {
      const newKey = editorKey * 43;
      setEditorKey(newKey);
   };
   const demo = () => {
      console.log(portfolioData);
      if (editorRef.current) {
         setPortfolioData((data) => {
            return { ...data, content: editorRef.current.getContent() };
         });
         clearEditor();
      }
   };

   const updateSection = (el, idx) => {
      dispatch(blogEditFn(el));
      // setEditPortfolio({idx:idx, data:el});
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
   const savePortfolio = async () => {
      const form = new FormData();
      console.log(portfolioData);

      if (portfolioField !== "") {
         form.append("title", portfolioData.portfolioTitle);
         form.append("description", portfolioData.description);
         form.append("coverImgUrl", coverImage.url);
         form.append("coverImgAlt", coverImage.alt);
         form.append("tags", portfolioData.tags);
         form.append("content", JSON.stringify(portfolioData.content));
         form.append("portfolioField", portfolioField);
         console.log(portfolioData);
         // dispatch(SpinnerOpen());
         await portfolioPostApi(form)
            .then((res) => {
               console.log(res.data);
               alert("Portfolio Created Successfully");
               dispatch(SpinnerClose());
            })
            .catch((err) => {
               console.log(err);
               dispatch(SpinnerClose());
            });
      } else {
         alert("Portfolio field is mendatory");
      }
   };
   useEffect(() => {
      getData();
   },[])
   return (
      <React.Fragment>
         <div
            className="row"
            style={{ backgroundColor: "white", height: "100%" }}
         >
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
                        value={portfolioData.portfolioTitle}
                        onChange={(e) =>
                           setPortfolioData((data) => {
                              return {
                                 ...data,
                                 portfolioTitle: e.target.value,
                              };
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
                           setPortfolioData((data) => {
                              return { ...data, tags: e.target.value };
                           })
                        }
                     ></textarea>
                     <textarea
                        rows={3}
                        value={portfolioData.description}
                        onChange={(e) =>
                           setPortfolioData((data) => {
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
                        {Parser(portfolioData.content)}
                        {portfolioData.content && (
                           <button className="btn btn-warning">Edit</button>
                        )}
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
                     onClick={() => savePortfolio()}
                  >
                     Publish
                  </button>
                  <select
                     class="form-select"
                     aria-label="Default select example"
                     value={portfolioField}
                     onChange={(e) => setPortfolioField(e.target.value)}
                  >
                     <option value="">Select Portfolio Category</option>
                     {
                        categoryDropDown.map((el,i) => (

                           <option key={el._id} value={el.slug}>{el.title}</option>
                        ))
                     }

                  </select>
               </div>
            </div>
         </div>
      </React.Fragment>
   );
};

export default Portfolio;
