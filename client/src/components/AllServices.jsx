import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';

const AllServices = () => {
    const navigate=useNavigate()
  const [data, setData] = useState([]);
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
      <div class="row gx-4 gy-4 services-row">
      {data.length>0 && data.map((item,index)=>(
        <div onClick={()=>{navigate(`/services/${item._id}`)}} key={index} class="col-12 col-md-6 col-lg-4 mx-auto">
          <div
            class="box service-box wow fadeInUp reveal-start"
            data-wow-offset="0"
            data-wow-delay=".1s"
          >
            <div class="service-icon">
              <img src={item.imageUrl[0]} width={100} alt="" />
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
