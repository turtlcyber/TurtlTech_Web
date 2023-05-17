import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import imageIII from '../assets/icons/Degital.png'
const data1 = [
  {
    _id:1,
    description:"Web design and development is a general term that describes the process of creating a website. As the name suggests, it includes his two main skills: web design and web development.",
    title:"Android Development",
  },
  {
    _id:2,
    description:"Web design and development is a general term that describes the process of creating a website. As the name suggests, it includes his two main skills: web design and web development.",
    title:"Android Development",
  },
  {
    _id:3,
    description:"Web design and development is a general term that describes the process of creating a website. As the name suggests, it includes his two main skills: web design and web development.",
    title:"Android Development",
  },
  {
    _id:4,
    description:"Web design and development is a general term that describes the process of creating a website. As the name suggests, it includes his two main skills: web design and web development.",
    title:"Android Development",
  },
  {
    _id:5,
    description:"Web design and development is a general term that describes the process of creating a website. As the name suggests, it includes his two main skills: web design and web development.",
    title:"Android Development",
  },

]

const AllServices = () => {
    const navigate=useNavigate()
  const [data, setData] = useState(data1);
  const getData = async () => {
    await axios.get(`http://localhost:4001/services`).then((res) => {
     setData(res.data.services)
    });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
    <Helmet>
    <title>Services</title>
  </Helmet>
    <section class="services services-boxed mega-section" id="services">
    
    <div class="container">
      <div class="row gx-4 gy-4 services-row text-start justify-content-start">
      {data.length>0 && data.map((item,index)=>(
        <div onClick={()=>{navigate(`/services/${item._id}`)}} key={index} class="col-12 col-md-6 col-lg-4 mx-auto">
          <div
            class="box service-box bg-white wow fadeInUp reveal-start"
            data-wow-offset="0"
            data-wow-delay=".1s"
          >
            <div class="service-icon">
              <img src={imageIII} width={130} alt="" />
            </div>
            <span class="service-num hollow-text">1 </span>
            <div class="service-content">
              <h3 class="service-title">
                &nbsp;&nbsp;&nbsp;{item.title}
              </h3>
              <p class="service-text">
                {item.description}
              </p>
            </div>
            <p class="read-more">
              read more<i class="bi bi-arrow-right icon"></i>
            </p>
          </div>
        </div>
      ))}
      </div>
    </div>
  </section>
  </>
  )
}

export default AllServices
