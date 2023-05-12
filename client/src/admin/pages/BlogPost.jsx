import React, { useRef, useCallback, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import axios from "axios";
const BlogPost = () => {
   
   const [imageData, setImageData] = useState()


   const check = async() => {
      console.log(imageData);


      const form = new FormData();
      form.append('img', imageData, imageData.name);
      form.append('img1', imageData, imageData.name);
      form.append('img2', imageData, imageData.name);
      console.log();
       await axios({method:'POST', url:'http://localhost:4000/send', headers:{'Content-Type' : 'multipart/form-data'}, data:form}).then(res => {
         console.log(res.data);
       }).catch( err => {
         console.log(err);
       })
   };

   return (
      <div>
         <input type="file" placeholder="image 1" onChange={(e) => setImageData(e.target.files[0])}/>
         {/* <input type="file" placeholder="image 1" onChange={(e) => setImageData(data => {return {...data, imgArr: [e.target.files[0]]}})}/> */}
         <button className="btn btn-warning" onClick={() => check()}>Submit</button>
      </div>
   );
};

export default BlogPost;
