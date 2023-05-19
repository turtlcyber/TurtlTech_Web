import React, { useEffect, useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import {
   IoLogoWhatsapp,
   IoLogoYoutube,
   IoLogoInstagram,
   IoLogoTwitter,
   IoLogoLinkedin,
} from "react-icons/io";
import { TbReload } from "react-icons/tb";

import {
   getAllSeosApi,
   saveCompanyInfoApi,
   saveTurtlSeoDataApi,
   updateSeoBySeoId,
} from "../../apis/Apis";
import axios from "axios";
import exampleImg from "../../assets/images/open_graph_tags.png";
import NoImage from "../../assets/images/NoImage.jpg";
import { useDispatch } from "react-redux";
import { SpinnerClose, SpinnerOpen } from "../../redux/R_Action";

const TurtlsInfo = () => {
   const dispatch = useDispatch();
   const [seoPage, setSeoPage] = useState("");
   const [isSeoEdited, setIsSeoEdited] = useState({
      flag:false,
      pageName: "",
      _id:''
   })
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
   const [seoDataFromServer, setSeoDataFromServer] = useState([]);
   const [companyInfo, setCompnayInfo] = useState({
      serviceEmail: "",
      address: "",
      contact1: "",
      contact2: "",
      googleMap: "",
   });
   const [singleSocial, setSingleSocial] = useState({
      url: "",
      types: "",
   });
   const [listOfSocial, setListOfSocial] = useState([]);

   const addHandler = () => {
      if (singleSocial.url !== "") {
         setListOfSocial((old) => {
            return [...old, singleSocial];
         });
      }
   };

   const seoDataSave = async () => {

      let data = {};
      if(!isSeoEdited.flag){
         data.pageName = seoPage;
      }
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
      data.seoData = dataSeo;
      dispatch(SpinnerOpen());
      if(isSeoEdited.flag){
         await updateSeoBySeoId(isSeoEdited._id, data).then(res => {
            console.log(res.data);
            alert(res.data.message);
            setSeoData({
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
            setSeoPage("");
            dispatch(SpinnerClose());
         }).catch(err => {
            console.log(err);
            alert(err.response.data.message);
            dispatch(SpinnerClose());
         })
      }
      else{
         await saveTurtlSeoDataApi(data)
         .then((res) => {
            console.log(res.data);
            alert(res.data.message)
            setSeoData({
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
            setSeoPage("");
      dispatch(SpinnerClose());
         })
         .catch((err) => {
            console.log(err);
            alert(err.response.data.message);
      dispatch(SpinnerClose());
         });
      }
      
   };

   const saveCompanyInfo = async () => {
      const formData = new FormData();
      formData.append("serviceEmail", companyInfo.serviceEmail);
      formData.append("address", companyInfo.address);
      formData.append("googleMap", companyInfo.googleMap);

      for (let i = 0; i < listOfSocial.length; i++) {
         formData.append("socialMediaLinks", JSON.stringify(listOfSocial[i]));
      }
      if (companyInfo.contact1 !== "") {
         formData.append("contactNumber", companyInfo.contact1);
      }
      if (companyInfo.contact2 !== "") {
         formData.append("contactNumber", companyInfo.contact2);
      }
      console.log(companyInfo);
      dispatch(SpinnerOpen());
      await saveCompanyInfoApi(formData)
         .then((res) => {
            console.log(res.data);
            setListOfSocial({
               serviceEmail: "",
               address: "",
               contact1: "",
               contact2: "",
               googleMap: "",
            });
            setListOfSocial([]);
            setSingleSocial({
               url: "",
               type: "",
            });
      dispatch(SpinnerClose());
         })
         .catch((err) => {
            console.log(err);
            alert(err.response.data.message);
      dispatch(SpinnerClose());
         });
   };
   const editSeoData = (edit_id) => {
      let oneObj = seoDataFromServer.find(el => el._id === edit_id);
      if(oneObj){
         setIsSeoEdited({flag:true, pageName:oneObj.pageName, _id:edit_id});
         setSeoData(oneObj.seoData);
      }
      console.log(edit_id);
   };
   const reloadSEOdata = () => {
      dispatch(SpinnerOpen());
      getAllSeosApi()
         .then((res) => {
            console.log(res.data);
            setSeoDataFromServer(res.data.data);
            dispatch(SpinnerClose());
         })
         .catch((err) => {
            console.log(err);
            dispatch(SpinnerClose());
         });
   };
   const cancelSeoEditing = () => {
      setIsSeoEdited({flag:false, pageName:''});
      setSeoData({
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
   }

   useEffect(() => {
      cancelSeoEditing();
      reloadSEOdata();
   }, []);

   return (
      <div>
         <Tabs
            defaultActiveKey="companyInfo"
            id="justify-tab-example"
            className="nav nav-pills nav-fill"
         >
            {}
            <Tab
               className="portfolio-btn"
               eventKey="companyInfo"
               title="Company's Info"
            >
               <div className="row mt-4 text-start">
                  <div className="col-5">
                     <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">
                           Service Email
                        </span>
                        <input
                           type="email"
                           class="form-control"
                           placeholder="Email Address"
                           aria-label="email"
                           aria-describedby="basic-addon1"
                           value={companyInfo.serviceEmail}
                           onChange={(e) =>
                              setCompnayInfo((old) => {
                                 return {
                                    ...old,
                                    serviceEmail: e.target.value,
                                 };
                              })
                           }
                        />
                     </div>
                     <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">
                           Company <br /> Address
                        </span>
                        <textarea
                           class="form-control"
                           rows={5}
                           value={companyInfo.address}
                           onChange={(e) =>
                              setCompnayInfo((old) => {
                                 return { ...old, address: e.target.value };
                              })
                           }
                        ></textarea>
                     </div>
                     <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">
                           Contact 1
                        </span>
                        <input
                           type="number"
                           class="form-control"
                           placeholder="Mobile Number 1"
                           aria-label="email"
                           aria-describedby="basic-addon1"
                           value={companyInfo.contact1}
                           onChange={(e) =>
                              setCompnayInfo((old) => {
                                 return { ...old, contact1: e.target.value };
                              })
                           }
                        />
                     </div>
                     <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">
                           Contact 2
                        </span>
                        <input
                           type="number"
                           class="form-control"
                           placeholder="Mobile Number 2"
                           aria-label="email"
                           aria-describedby="basic-addon1"
                           value={companyInfo.contact2}
                           onChange={(e) =>
                              setCompnayInfo((old) => {
                                 return { ...old, contact2: e.target.value };
                              })
                           }
                        />
                     </div>
                     <ol>
                        {listOfSocial.map((el, i) => (
                           <li>
                              <strong>{el.types}</strong> &nbsp; {el.url}
                           </li>
                        ))}
                     </ol>
                     <div class="input-group mb-3">
                        <input
                           type="text"
                           placeholder="https://facebook.com/username"
                           class="form-control"
                           aria-label="Text input with segmented dropdown button"
                           value={singleSocial.url}
                           onChange={(e) =>
                              setSingleSocial((old) => {
                                 return { ...old, url: e.target.value };
                              })
                           }
                        />

                        <select
                           class="form-select"
                           aria-label="select example"
                           style={{ maxWidth: "200px" }}
                           value={singleSocial.types}
                           onChange={(e) =>
                              setSingleSocial((old) => {
                                 return { ...old, types: e.target.value };
                              })
                           }
                        >
                           <option value="">Select Social Media</option>
                           <option value="facebook">Facebook</option>
                           <option value="instagram">Instagram</option>
                           <option value="whatsapp">Whatsapp</option>
                           <option value="twitter">Twitter</option>
                           <option value="linkedIn">LinkedIn</option>
                           <option value="youtube">YouTube</option>
                        </select>
                        <button
                           type="button"
                           class="btn btn-outline-secondary"
                           onClick={() => addHandler()}
                        >
                           Add To Stack
                        </button>
                     </div>
                     <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">
                           Google Map
                        </span>
                        <input
                           type="text"
                           class="form-control"
                           placeholder="iframe SRC only"
                           aria-label="email"
                           aria-describedby="basic-addon1"
                           value={companyInfo.googleMap}
                           onChange={(e) =>
                              setCompnayInfo((old) => {
                                 return { ...old, googleMap: e.target.value };
                              })
                           }
                        />
                     </div>
                     <div class="input-group mb-3">
                        <button
                           className="btn btn-success"
                           onClick={() => saveCompanyInfo()}
                        >
                           Save to Database
                        </button>
                     </div>
                  </div>
               </div>
            </Tab>

            <Tab className="portfolio-btn" eventKey="seo" title="SEO">
               <div className="row mt-4 text-start">
                  <div className="col-6 border-end">
                  {isSeoEdited.flag && (
                        <div
                           className="d-flex justify-content-start mb-2"
                           style={{ height: "38px" }}
                        >
                           <h3 className="my-0">
                              <span class="badge bg-black">Editing</span>
                           </h3>
                           <h3 className="my-0 ms-3">
                              <span class="">{isSeoEdited.pageName}</span>
                           </h3>
                        </div>
                     )}
                     {!isSeoEdited.flag && <div className="row mb-3">
                        <div className="col">
                           <div class="input-group">
                              <span className="form-control">
                                 {seoPage
                                    ? seoPage
                                    : "Please Select Page For SEO"}
                              </span>
                           </div>
                        </div>
                        <div className="col">
                           <select
                              class="form-select"
                              aria-label="Default select example"
                              value={seoPage}
                              onChange={(e) => setSeoPage(e.target.value)}
                           >
                              <option value="">Open Page Menu</option>
                              <option value="HOME">HOME</option>
                              <option value="ABOUTUS">ABOUT US</option>
                              <option value="SERVICES">SERVICES</option>
                              <option value="BLOG">BLOG</option>
                              <option value="CONTACTUS">CONTACT US</option>
                              <option value="FAQ">FAQ</option>
                           </select>
                        </div>
                     </div>}

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

                     <div class="input-group mb-3">
                        <button
                           className={isSeoEdited.flag ? 'btn btn-primary':'btn btn-success'}
                           onClick={() => seoDataSave()}
                        >
                           {isSeoEdited.flag ? 'Update SEO' : 'Save to Database'}
                        </button>
                        {
                           isSeoEdited.flag &&
                           <button
                           className="btn btn-warning"
                           onClick={() => cancelSeoEditing()}
                        >
                           Cancel Editing
                        </button>
                        }
                        
                     </div>
                  </div>
                  <div className="col-6">
                     <div className="border">
                        <img src={exampleImg} width={"100%"} />
                     </div>
                     <hr />
                     <div>
                        <button
                           className="btn btn-primary fs-5"
                           onClick={() => reloadSEOdata()}
                        >
                           <TbReload size={30} className="me-3" /> Refresh SEOs
                        </button>
                     </div>
                     <div className="p-3">
                        {seoDataFromServer.map((el, i) => (
                           <div
                              key={el._id}
                              onClick={() => editSeoData(el._id)}
                              className="row border mb-2"
                              style={{ minHeight: "130px" }}
                           >
                              <div className="col-2">
                                 <img
                                    width={"100%"}
                                    src={
                                       el.seoData.imageUrl
                                          ? el.seoData.imageUrl
                                          : NoImage
                                    }
                                 />
                              </div>
                              <div className="col-9 position-relative">
                                 <span className="text-primary fw-semibold">
                                    {el.seoData.pageTitle}
                                 </span>
                                 <br />
                                 <span className="text-danger">
                                    {el.seoData.siteName}
                                 </span>
                                 <br />
                                 <span className="text-secondary">
                                    {el.seoData.pageDescription}
                                 </span>
                              </div>
                              <div className="col-1 bg-danger">
                                 <div
                                    className="p-0"
                                    style={{ transform: "rotate(90deg)" }}
                                 >
                                    <span className="ms-3 fw-bolder text-white">
                                       {el.pageName}
                                    </span>
                                 </div>
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
            </Tab>
         </Tabs>
      </div>
   );
};

export default TurtlsInfo;
