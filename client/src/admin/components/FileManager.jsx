import React, { useEffect, useState } from "react";
import img1 from "../../assets/images/bg-img-1.jpg";
import img2 from "../../assets/images/turtltech_11zon.jpg";
import NoImage from "../../assets/images/NoImage.jpg";
import { getAllImages, uploadImageFn } from "../../apis/Apis";
import { CgCloseR } from "react-icons/cg";
import {useDispatch, useSelector} from 'react-redux';
import { SpinnerClose, SpinnerOpen, filemanagerClose } from "../../redux/R_Action";
const FileManager = () => {
   let ipAddress = "192.168.29.133";
   // let ipAddress = "localhost";
   let port = 4001;
   const [images, setImages] = useState([]);
   const [filteredImages, setFilteredImages] = useState([]);
   const [menuColor, setMenuColor] = useState('ALL');
   const [uploadData, setUploadData] = useState({
      images: "",
      imgField: "",
   });

   const dispatch = useDispatch();
   const {fileManagerOpenClose} = useSelector(state => state);
   const fn = (val) => {
      let arr = [];
      for (let i = 0; i < val; i++) {
         arr.push();
      }
      return arr;
   };

   const uploadImage = async () => {
      console.log(uploadData);
      let formData = new FormData();
      formData.append("imgField", uploadData.imgField);
      formData.append("images", uploadData.images, uploadData.images.name);
      dispatch(SpinnerOpen());
      await uploadImageFn(formData)
         .then((res) => {
            console.log(res.data);
            fetchAllImage();
            setUploadData({
               images:"",
               imgField:'',
            })
         })
         .catch((err) => {
            console.log(err);
      dispatch(SpinnerClose());

         });
   };
   const fetchAllImage = async() => {
      dispatch(SpinnerOpen());
      setMenuColor('ALL');
      await getAllImages()
         .then((res) => {
            console.log(res.data);
            setImages(res.data.data);
            setFilteredImages(res.data.data);
            dispatch(SpinnerClose());
         })
         .catch((err) => {
            console.log(err);
            dispatch(SpinnerClose());
         });
   };
   const filterImage = (enms) => {
      setMenuColor(enms);
      if (enms === "ALL") {
         setFilteredImages(images);
      } else {
         let arr = images.filter((curr, idx, arr) => {
            return curr.imgField === enms;
         });
         setFilteredImages(arr);
      }
   }

   useEffect(() => {
      fetchAllImage();
   }, []);
   return (
      <div
         className="position-fixed"
         style={{
            backgroundColor: "rgba(0,0,0, 0.5)",
            height: "100%",
            width: "100%",
            zIndex: 1000,
         }}
      >
         <div className="row w-75 mx-auto mt-5" style={{ height: "75%" }}>
            <div className="col-3 bg-light border border-end text-start">
               <div className="d-flex justify-content-between align-items-center">
                  <h1>File Manager</h1>
                  <CgCloseR size={50} onClick={() => dispatch(filemanagerClose())} role="button"/>
               </div>
               <ul className="list-group">
                  <li className={menuColor === 'ALL' ? "list-group-item bg-warning" : "list-group-item"} role="button" onClick={() => filterImage('ALL')}>
                     All Images
                  </li>
                  <li className={menuColor === 'BLOG' ? "list-group-item bg-warning" : "list-group-item"} role="button" onClick={() => filterImage('BLOG')}>
                     Blog Images
                  </li>
                  <li className={menuColor === 'CERTIFICATE' ? "list-group-item bg-warning" : "list-group-item"} role="button" onClick={() => filterImage('CERTIFICATE')}>
                     Certificates
                  </li>
                  <li className={menuColor === 'EVENTS' ? "list-group-item bg-warning" : "list-group-item"} role="button" onClick={() => filterImage('EVENTS')}>
                     Events
                  </li>
                  <li className={menuColor === 'ICONS' ? "list-group-item bg-warning" : "list-group-item"} role="button" onClick={() => filterImage('ICONS')}>
                     Icons
                  </li>
               </ul>
            </div>
            <div
               className="col-9 py-2 bg-white container "
               style={{ height: "100%", overflowY: "scroll" }}
            >
               <div className="d-flex justify-content-end my-2">
                  <div className="input-group">
                     <input
                        type="file"
                        aria-label="First name"
                        className="form-control me-2"
                        onChange={(e) =>
                           setUploadData((old) => {
                              return { ...old, images: e.target.files[0] };
                           })
                        }
                     />
                     <label
                        className="input-group-text bg-warning"
                        for="selectImageFIled"
                     >
                        Image Belongs To
                     </label>
                     <select
                        className="form-select bg-warning"
                        value={uploadData.imgField}
                        onChange={(e) =>
                           setUploadData((old) => {
                              return { ...old, imgField: e.target.value };
                           })
                        }
                        id="selectImageFIled"
                     >
                        <option value="">Choose...</option>
                        <option value="HOME">Home</option>
                        <option value="BLOG">Blog</option>
                        <option value="SERVICES">Services</option>
                        <option value="ABOUT">About</option>
                        <option value="CONTACT">Contact</option>
                        <option value="FAQ">Faq</option>
                        <option value="PORTFOLIO">Portfolio</option>
                        <option value="CERTIFICATE">Certificate</option>
                        <option value="EVENTS">Events</option>
                        <option value="ICONS">Icons</option>
                     </select>
                     <button
                        className={
                           uploadData.images && uploadData.imgField
                              ? "btn btn-secondary ms-4"
                              : "btn btn-secondary ms-4 disabled"
                        }
                        type="button"
                        onClick={() => uploadImage()}
                     >
                        UPLOAD IMAGE
                     </button>
                  </div>
               </div>

               <div className="row  row-cols-4 ">
                  {filteredImages.map((el, i) => (
                     <div
                        className="col g-2"
                        style={{
                           overflow: "hidden",
                           boxSizing: "border-box",
                           position: "relative",
                           maxHeight: "200px",
                        }}
                     >
                        <div
                           className="position-absolute rounded-3 bg-white mt-1 ms-1 px-1"
                           style={{ height: "25px", minWidth: "20px" }}
                        >
                           <span>{i + 1}</span>
                        </div>
                        <img
                           src={
                              el.imageUrl
                                 ? `http://${ipAddress}:${port}${el.imageUrl}`
                                 : NoImage
                           }
                           height={"100%"}
                           width={"100%"}
                           style={{ objectFit: "cover" }}
                        />
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </div>
   );
};

export default FileManager;
