import { Editor } from "@tinymce/tinymce-react";
import HTMLReactParser from "html-react-parser";
import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SpinnerClose, SpinnerOpen, filemanagerOpen } from "../../redux/R_Action";
import { getAllServiceCategoryApi, saveServiceCategoryApi } from "../../apis/Apis";
const initial = {
   title: "",
   tags: "",
   description: "",
   content: "",
};

const ServiceCategory = () => {
   const [servcieCategory, setServiceCategory] = useState(initial);
   const [isImageUrlBoxOpen, setIsImageBoxOpen] = useState(false);
   const [editorKey, setEditorKey] = React.useState(4);
   const editorRef = useRef(null);
   const dispatch = useDispatch();
   const [icon, setIcon] = useState({
      url: "",
      alt: "",
      isPreview: false,
   });
   const state = useSelector((state) => state);
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
   const clearEditor = () => {
      const newKey = editorKey * 43;
      setEditorKey(newKey);
   };
   const demo = () => {
      console.log(servcieCategory);
      if (editorRef.current) {
         setServiceCategory((data) => {
            return { ...data, content: editorRef.current.getContent() };
         });
         clearEditor();
      }
   };

   const coverHandler = () => {
      setIsImageBoxOpen(false);
      if (icon.url === "") {
         setIcon((old) => {
            return { ...old, isPreview: false };
         });
      } else {
         setIcon((old) => {
            return { ...old, isPreview: true };
         });
      }
   };
  
   const saveServCate = async () => {
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
      console.log(servcieCategory);

      form.append("title", servcieCategory.title);
      form.append("description", servcieCategory.description);
      form.append("iconUrl", icon.url);
      form.append("iconAlt", icon.alt);
      form.append("tags", servcieCategory.tags);
      form.append("content", JSON.stringify(servcieCategory.content));
      form.append("seoData", JSON.stringify(dataSeo));
      console.log(servcieCategory);
      console.log(icon);
      dispatch(SpinnerOpen());
      await saveServiceCategoryApi(form)
         .then((res) => {
            console.log(res.data);
            alert("Portfolio Created Successfully");
            dispatch(SpinnerClose());
         })
         .catch((err) => {
            console.log(err);
            alert(err.response.data.message);
            dispatch(SpinnerClose());
         });
   };


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
                           {icon.isPreview ? "Change Icon" : "Add Icon"}
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
                                 aria-label="Icon url"
                                 class="form-control"
                                 value={icon.url}
                                 onChange={(e) =>
                                    setIcon((old) => {
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
                                 value={icon.alt}
                                 onChange={(e) =>
                                    setIcon((old) => {
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
                     {icon.isPreview && <img src={icon.url} style={{maxWidth:'200px'}} alt={icon.alt} />}
                     <textarea
                        placeholder="New post title here..."
                        rows={1}
                        value={servcieCategory.title}
                        onChange={(e) =>
                           setServiceCategory((data) => {
                              return {
                                 ...data,
                                 title: e.target.value,
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
                           setServiceCategory((data) => {
                              return { ...data, tags: e.target.value };
                           })
                        }
                     ></textarea>
                     <textarea
                        rows={3}
                        value={servcieCategory.description}
                        onChange={(e) =>
                           setServiceCategory((data) => {
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
                        {HTMLReactParser(servcieCategory.content)}
                        {servcieCategory.content && (
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
                           plugins: "lists link",
                           automatic_uploads: true,
                           menubar: false,

                           toolbar:
                              "undo insertfile redo styles bold italic alignleft aligncenter alignright superscript subscript numlist bullist blockquote link",
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
                     onClick={() => saveServCate()}
                  >
                     Upload
                  </button>
               </div>
            </div>
         </div>
      </React.Fragment>
   );
};

export default ServiceCategory;
