import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filemanagerOpen } from "../../redux/R_Action";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { CgPlayListAdd } from "react-icons/cg";
import { FcOpenedFolder } from "react-icons/fc";
import axios from "axios";
import {
   saveCertificatelApi,
   saveEventsApi,
   savePageImageApi,
   saveTestimonialApi,
} from "../../apis/Apis";
const Homepage = () => {
   const dispatch = useDispatch();
   const { fileManagerOpenClose } = useSelector((state) => state);
   const [listOfCertificate, setListOfCertificate] = useState([]);
   const [coverImage, setCoverImage] = useState({
      image: "",
      altText: "",
   });
   const [singleCertificate, setSingleCertificate] = useState({
      title: "",
      image: "",
   });
   const [eventImageList, setEventImageList] = useState([]);
   const [singleEventImage, setSingleEventImage] = useState();
   const [singleEvent, setSingleEvent] = useState({
      title: "",
      story: "",
   });
   const [listOfTestmonial, setListOfTestimonial] = useState([]);
   const [singleTestimonial, setSingleTestimonial] = useState({
      image: "",
      name: "",
      designation: "",
      rating: "",
      story: "",
   });

   const addHandler = (enms) => {
      if (enms === "CERTIFICATE" && singleCertificate !== "") {
         setListOfCertificate((old) => {
            return [...old, singleCertificate];
         });
         setSingleCertificate({ title: "", image: "" });
      } else if (
         enms === "TESTIMONIALS" &&
         singleTestimonial.name !== "" &&
         singleTestimonial.story !== "" &&
         singleTestimonial.rating !== ""
      ) {
         setListOfTestimonial((old) => {
            return [...old, singleTestimonial];
         });
         setSingleTestimonial({
            image: "",
            name: "",
            designation: "",
            rating: "",
            story: "",
         });
      } else if (enms === "EVENTS" && singleEventImage !== "") {
         setEventImageList((old) => {
            return [...old, singleEventImage];
         });
         setSingleEventImage("");
      }
   };
   const saveCertificate = async () => {
      if (listOfCertificate.length) {
         const formData = new FormData();
         for (let i = 0; i < listOfCertificate.length; i++) {
            formData.append(
               "certificate",
               JSON.stringify(listOfCertificate[i])
            );
         }

         await saveCertificatelApi(formData)
            .then((res) => {
               setListOfCertificate([]);
               setSingleCertificate({ title: "", image: "" });
               console.log(res.data);
            })
            .catch((err) => {
               console.log(err);
            });
      } else {
         alert("Please add atleast One Certificate Url");
      }

      console.log(listOfCertificate);
   };
   const saveTestimonial = async () => {
      if (listOfTestmonial.length) {
         const formData = new FormData();
         for (let i = 0; i < listOfTestmonial.length; i++) {
            formData.append(
               "testimonials",
               JSON.stringify(listOfTestmonial[i])
            );
         }

         await saveTestimonialApi(formData)
            .then((res) => {
               setListOfTestimonial([]);
               setSingleTestimonial({
                  image: "",
                  name: "",
                  designation: "",
                  rating: "",
                  story: "",
               });
               console.log(res.data);
            })
            .catch((err) => {
               console.log(err);
            });
      } else {
         alert("Please add atleast One Testimonial");
      }
      console.log(listOfTestmonial);
   };
   const saveEvents = async () => {
      console.log(eventImageList);
      console.log(singleEvent);
      if (eventImageList.length > 0) {
         const formData = new FormData();
         formData.append("title", singleEvent.title);
         formData.append("story", singleEvent.story);
         for (let i = 0; i < eventImageList.length; i++) {
            formData.append("images", eventImageList[i]);
         }
         await saveEventsApi(formData)
            .then((res) => {
               setSingleEventImage("");
               setEventImageList([]);
               setSingleEvent({ title: "", story: "" });
               console.log(res.data);
            })
            .catch((err) => {
               console.log(err);
            });
      }
   };

   const uploadConverImage = async (pagename) => {
      if (coverImage.image !== "" && coverImage.pageName !== "") {
         const formData = new FormData();
         formData.append("pageName", pagename);
         formData.append("imageUrl", coverImage.image);
         formData.append("altText", coverImage.altText);

         await savePageImageApi(formData)
            .then((res) => {
               console.log(res.data);
               setCoverImage({
                  image: "",
                  altText: "",
               });
            })
            .catch((err) => {
               console.log(err);
            });
      }
   };

   return (
      <div>
         <div className="text-start mb-3">
            <button
               className="btn btn-success"
               onClick={() => dispatch(filemanagerOpen())}
            >
               <FcOpenedFolder size={40} />{" "}
               <span className="fs-5 fw-bold">File Manager</span>
            </button>
         </div>

         <Tabs
            defaultActiveKey="HOME"
            id="justify-tab-example"
            className="portfolio-btn-list wow fadeInUp"
         >
            <Tab className="portfolio-btn" eventKey="HOME" title="HOME">
               <div className="row mt-5">
                  <div className="col border-end text-start">
                     <div class="input-group mb-3">
                        <span
                           class="input-group-text"
                           id="inputGroup-sizing-default"
                        >
                           Cover Alt Text
                        </span>
                        <input
                           type="text"
                           class="form-control"
                           aria-label="Sizing example input"
                           aria-describedby="inputGroup-sizing-default"
                           value={coverImage.altText}
                           onChange={(e) =>
                              setCoverImage((old) => {
                                 return { ...old, altText: e.target.value };
                              })
                           }
                        />
                        <select
                           class="form-select"
                           aria-label="Default select example"
                           value="HOME"
                        >
                           <option selected>HOME</option>
                        </select>
                     </div>
                     <div class="input-group mb-3">
                        <span
                           class="input-group-text"
                           id="inputGroup-sizing-default"
                        >
                           Cover Url
                        </span>
                        <input
                           type="text"
                           class="form-control"
                           aria-label="Sizing example input"
                           aria-describedby="inputGroup-sizing-default"
                           value={coverImage.image}
                           onChange={(e) =>
                              setCoverImage((old) => {
                                 return { ...old, image: e.target.value };
                              })
                           }
                        />
                        <button
                           className="btn btn-primary"
                           onClick={() => uploadConverImage("HOME")}
                        >
                           Save To Database
                        </button>
                     </div>
                     <hr />
                     <h3>Add Testimonials</h3>
                     {listOfTestmonial.map((el, i) => (
                        <div className="border p-1 text-start mb-2">
                           <table>
                              <tbody>
                                 <tr>
                                    <th>Name</th>
                                    <td>{el.name}</td>
                                 </tr>
                                 <tr>
                                    <th>Picture</th>
                                    <td>{el.image}</td>
                                 </tr>
                                 <tr>
                                    <th className="pe-2">Designation</th>
                                    <td>{el.designation}</td>
                                 </tr>
                                 <tr>
                                    <th>Rating</th>
                                    <td>{el.rating}</td>
                                 </tr>
                                 <tr>
                                    <th>Story</th>
                                    <td>{el.story}</td>
                                 </tr>
                              </tbody>
                           </table>
                        </div>
                     ))}
                     <div className="row">
                        <div className="col">
                           <div class="input-group mb-3">
                              <span
                                 class="input-group-text"
                                 id="inputGroup-sizing-default"
                              >
                                 Name
                              </span>
                              <input
                                 type="text"
                                 class="form-control"
                                 aria-label="Sizing example input"
                                 aria-describedby="inputGroup-sizing-default"
                                 value={singleTestimonial.name}
                                 onChange={(e) =>
                                    setSingleTestimonial((old) => {
                                       return { ...old, name: e.target.value };
                                    })
                                 }
                              />
                           </div>
                           <div class="input-group mb-3">
                              <span
                                 class="input-group-text"
                                 id="inputGroup-sizing-default"
                              >
                                 Picture Url
                              </span>
                              <input
                                 type="url"
                                 class="form-control"
                                 aria-label="Sizing example input"
                                 aria-describedby="inputGroup-sizing-default"
                                 value={singleTestimonial.image}
                                 onChange={(e) =>
                                    setSingleTestimonial((old) => {
                                       return { ...old, image: e.target.value };
                                    })
                                 }
                              />
                           </div>
                           <div class="input-group mb-3">
                              <span
                                 class="input-group-text"
                                 id="inputGroup-sizing-default"
                              >
                                 Rating 0-5
                              </span>
                              <input
                                 type="number"
                                 class="form-control"
                                 aria-label="Sizing example input"
                                 aria-describedby="inputGroup-sizing-default"
                                 max={5}
                                 min={1}
                                 value={singleTestimonial.rating}
                                 onChange={(e) =>
                                    setSingleTestimonial((old) => {
                                       return {
                                          ...old,
                                          rating: e.target.value,
                                       };
                                    })
                                 }
                              />
                           </div>
                        </div>
                        <div className="col">
                           <div class="input-group mb-3">
                              <span
                                 class="input-group-text"
                                 id="inputGroup-sizing-default"
                              >
                                 Designation
                              </span>
                              <input
                                 type="text"
                                 class="form-control"
                                 aria-label="Sizing example input"
                                 aria-describedby="inputGroup-sizing-default"
                                 value={singleTestimonial.designation}
                                 onChange={(e) =>
                                    setSingleTestimonial((old) => {
                                       return {
                                          ...old,
                                          designation: e.target.value,
                                       };
                                    })
                                 }
                              />
                           </div>
                           <div class="input-group mb-3">
                              <textarea
                                 type="text"
                                 class="form-control"
                                 aria-label="Sizing example input"
                                 aria-describedby="inputGroup-sizing-default"
                                 placeholder="Story"
                                 rows={3}
                                 value={singleTestimonial.story}
                                 onChange={(e) =>
                                    setSingleTestimonial((old) => {
                                       return { ...old, story: e.target.value };
                                    })
                                 }
                              ></textarea>
                           </div>
                        </div>
                     </div>
                     <div>
                        <button
                           className="btn btn-primary p-2 mx-2"
                           onClick={() => saveTestimonial()}
                        >
                           Save To Database
                        </button>
                        <button
                           className="btn btn-success mx-2"
                           onClick={() => addHandler("TESTIMONIALS")}
                        >
                           <CgPlayListAdd className="p-0" size={25} /> Add More
                           Testimonials
                        </button>
                     </div>
                  </div>
                  <div className="col text-start">
                     <ol>
                        {listOfCertificate.map((el, i) => (
                           <li>
                              {el.title}
                              <br />
                              {el.image}
                           </li>
                        ))}
                     </ol>
                     <div class="input-group mb-3">
                        <span
                           class="input-group-text"
                           id="inputGroup-sizing-default"
                        >
                           Certificate Title
                        </span>
                        <input
                           type="url"
                           class="form-control"
                           aria-label="Sizing example input"
                           aria-describedby="inputGroup-sizing-default"
                           value={singleCertificate.title}
                           onChange={(e) =>
                              setSingleCertificate((old) => {
                                 return { ...old, title: e.target.value };
                              })
                           }
                        />
                     </div>
                     <div class="input-group mb-3">
                        <span
                           class="input-group-text"
                           id="inputGroup-sizing-default"
                        >
                           Certificate Url
                        </span>
                        <input
                           type="url"
                           class="form-control"
                           aria-label="Sizing example input"
                           aria-describedby="inputGroup-sizing-default"
                           value={singleCertificate.image}
                           onChange={(e) =>
                              setSingleCertificate((old) => {
                                 return { ...old, image: e.target.value };
                              })
                           }
                        />
                        <button
                           className="btn btn-success"
                           onClick={() => addHandler("CERTIFICATE")}
                        >
                           <CgPlayListAdd />
                        </button>
                     </div>
                     <button
                        className="btn btn-primary"
                        onClick={() => saveCertificate()}
                     >
                        Save To Database
                     </button>
                     <hr />
                     <h3>Event Images</h3>
                     <div class="input-group mb-3">
                        <span
                           class="input-group-text"
                           id="inputGroup-sizing-default"
                        >
                           Event Title
                        </span>
                        <input
                           type="text"
                           class="form-control"
                           aria-label="Sizing example input"
                           aria-describedby="inputGroup-sizing-default"
                           value={singleEvent.title}
                           onChange={(e) =>
                              setSingleEvent((old) => {
                                 return { ...old, title: e.target.value };
                              })
                           }
                        />
                     </div>
                     <div class="input-group mb-3">
                        <textarea
                           placeholder="Event Story"
                           className="form-control"
                           value={singleEvent.story}
                           onChange={(e) =>
                              setSingleEvent((old) => {
                                 return { ...old, story: e.target.value };
                              })
                           }
                        ></textarea>
                     </div>
                     <ol>
                        {eventImageList.map((el, i) => (
                           <li>{el}</li>
                        ))}
                     </ol>
                     <div class="input-group mb-3">
                        <span
                           class="input-group-text"
                           id="inputGroup-sizing-default"
                        >
                           Event Image
                        </span>

                        <input
                           type="url"
                           class="form-control"
                           aria-label="Sizing example input"
                           aria-describedby="inputGroup-sizing-default"
                           value={singleEventImage}
                           onChange={(e) => setSingleEventImage(e.target.value)}
                        />
                        <button
                           className="btn btn-success"
                           onClick={() => addHandler("EVENTS")}
                        >
                           <CgPlayListAdd />
                        </button>
                     </div>
                     <button
                        className="btn btn-primary"
                        onClick={() => saveEvents()}
                     >
                        Save To Database
                     </button>
                  </div>
               </div>
            </Tab>
            <Tab className="portfolio-btn" eventKey="ABOUT US" title="ABOUT US">
               <div className="row mt-5">
                  <div className="col-7">
                     <div class="input-group mb-3">
                        <span
                           class="input-group-text"
                           id="inputGroup-sizing-default"
                        >
                           Cover Alt Text
                        </span>
                        <input
                           type="text"
                           class="form-control"
                           aria-label="Sizing example input"
                           aria-describedby="inputGroup-sizing-default"
                           value={coverImage.altText}
                           onChange={(e) =>
                              setCoverImage((old) => {
                                 return { ...old, altText: e.target.value };
                              })
                           }
                        />
                        <select
                           class="form-select"
                           aria-label="Default select example"
                           value="ABOUTUS"
                        >
                           <option selected>ABOUTUS</option>
                        </select>
                     </div>
                     <div class="input-group mb-3">
                        <span
                           class="input-group-text"
                           id="inputGroup-sizing-default"
                        >
                           Cover Url
                        </span>
                        <input
                           type="text"
                           class="form-control"
                           aria-label="Sizing example input"
                           aria-describedby="inputGroup-sizing-default"
                           value={coverImage.image}
                           onChange={(e) =>
                              setCoverImage((old) => {
                                 return { ...old, image: e.target.value };
                              })
                           }
                        />
                        <button
                           className="btn btn-primary"
                           onClick={() => uploadConverImage("ABOUTUS")}
                        >
                           Save To Database
                        </button>
                     </div>
                  </div>
               </div>
            </Tab>
            <Tab
               className="portfolio-btn"
               eventKey="SERVICES"
               title="SERVICES"
            >
                <div className="row mt-5">
                  <div className="col-7">
                     <div class="input-group mb-3">
                        <span
                           class="input-group-text"
                           id="inputGroup-sizing-default"
                        >
                           Cover Alt Text
                        </span>
                        <input
                           type="text"
                           class="form-control"
                           aria-label="Sizing example input"
                           aria-describedby="inputGroup-sizing-default"
                           value={coverImage.altText}
                           onChange={(e) =>
                              setCoverImage((old) => {
                                 return { ...old, altText: e.target.value };
                              })
                           }
                        />
                        <select
                           class="form-select"
                           aria-label="Default select example"
                           value="SERVICES"
                        >
                           <option selected>SERVICES</option>
                        </select>
                     </div>
                     <div class="input-group mb-3">
                        <span
                           class="input-group-text"
                           id="inputGroup-sizing-default"
                        >
                           Cover Url
                        </span>
                        <input
                           type="text"
                           class="form-control"
                           aria-label="Sizing example input"
                           aria-describedby="inputGroup-sizing-default"
                           value={coverImage.image}
                           onChange={(e) =>
                              setCoverImage((old) => {
                                 return { ...old, image: e.target.value };
                              })
                           }
                        />
                        <button
                           className="btn btn-primary"
                           onClick={() => uploadConverImage("SERVICES")}
                        >
                           Save To Database
                        </button>
                     </div>
                  </div>
               </div>
            </Tab>
            <Tab className="portfolio-btn" eventKey="BLOG" title="BLOG">
            <div className="row mt-5">
                  <div className="col-7">
                     <div class="input-group mb-3">
                        <span
                           class="input-group-text"
                           id="inputGroup-sizing-default"
                        >
                           Cover Alt Text
                        </span>
                        <input
                           type="text"
                           class="form-control"
                           aria-label="Sizing example input"
                           aria-describedby="inputGroup-sizing-default"
                           value={coverImage.altText}
                           onChange={(e) =>
                              setCoverImage((old) => {
                                 return { ...old, altText: e.target.value };
                              })
                           }
                        />
                        <select
                           class="form-select"
                           aria-label="Default select example"
                           value="BLOG"
                        >
                           <option selected>BLOG</option>
                        </select>
                     </div>
                     <div class="input-group mb-3">
                        <span
                           class="input-group-text"
                           id="inputGroup-sizing-default"
                        >
                           Cover Url
                        </span>
                        <input
                           type="text"
                           class="form-control"
                           aria-label="Sizing example input"
                           aria-describedby="inputGroup-sizing-default"
                           value={coverImage.image}
                           onChange={(e) =>
                              setCoverImage((old) => {
                                 return { ...old, image: e.target.value };
                              })
                           }
                        />
                        <button
                           className="btn btn-primary"
                           onClick={() => uploadConverImage("BLOG")}
                        >
                           Save To Database
                        </button>
                     </div>
                  </div>
               </div>
            </Tab>
            <Tab
               className="portfolio-btn"
               eventKey="CONTACT"
               title="CONTACT"
            >
               <div className="row mt-5">
                  <div className="col-7">
                     <div class="input-group mb-3">
                        <span
                           class="input-group-text"
                           id="inputGroup-sizing-default"
                        >
                           Cover Alt Text
                        </span>
                        <input
                           type="text"
                           class="form-control"
                           aria-label="Sizing example input"
                           aria-describedby="inputGroup-sizing-default"
                           value={coverImage.altText}
                           onChange={(e) =>
                              setCoverImage((old) => {
                                 return { ...old, altText: e.target.value };
                              })
                           }
                        />
                        <select
                           class="form-select"
                           aria-label="Default select example"
                           value="CONTACT"
                        >
                           <option selected>CONTACT</option>
                        </select>
                     </div>
                     <div class="input-group mb-3">
                        <span
                           class="input-group-text"
                           id="inputGroup-sizing-default"
                        >
                           Cover Url
                        </span>
                        <input
                           type="text"
                           class="form-control"
                           aria-label="Sizing example input"
                           aria-describedby="inputGroup-sizing-default"
                           value={coverImage.image}
                           onChange={(e) =>
                              setCoverImage((old) => {
                                 return { ...old, image: e.target.value };
                              })
                           }
                        />
                        <button
                           className="btn btn-primary"
                           onClick={() => uploadConverImage("CONTACT")}
                        >
                           Save To Database
                        </button>
                     </div>
                  </div>
               </div>
            </Tab>
            <Tab
               className="portfolio-btn"
               eventKey="FAQ"
               title="FAQ"
            >
               <div className="row mt-5">
                  <div className="col-7">
                     <div class="input-group mb-3">
                        <span
                           class="input-group-text"
                           id="inputGroup-sizing-default"
                        >
                           Cover Alt Text
                        </span>
                        <input
                           type="text"
                           class="form-control"
                           aria-label="Sizing example input"
                           aria-describedby="inputGroup-sizing-default"
                           value={coverImage.altText}
                           onChange={(e) =>
                              setCoverImage((old) => {
                                 return { ...old, altText: e.target.value };
                              })
                           }
                        />
                        <select
                           class="form-select"
                           aria-label="Default select example"
                           value="FAQ"
                        >
                           <option selected>FAQ</option>
                        </select>
                     </div>
                     <div class="input-group mb-3">
                        <span
                           class="input-group-text"
                           id="inputGroup-sizing-default"
                        >
                           Cover Url
                        </span>
                        <input
                           type="text"
                           class="form-control"
                           aria-label="Sizing example input"
                           aria-describedby="inputGroup-sizing-default"
                           value={coverImage.image}
                           onChange={(e) =>
                              setCoverImage((old) => {
                                 return { ...old, image: e.target.value };
                              })
                           }
                        />
                        <button
                           className="btn btn-primary"
                           onClick={() => uploadConverImage("FAQ")}
                        >
                           Save To Database
                        </button>
                     </div>
                  </div>
               </div>
            </Tab>
         </Tabs>
      </div>
   );
};

export default Homepage;
