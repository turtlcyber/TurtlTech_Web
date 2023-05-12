import axios, { all } from "axios";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Link, useParams } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";
import { Helmet } from "react-helmet";

const getSingleServices = async (id) => {
  const res = await axios.get(`http://localhost:4001/service/${id}`);
  return res.data.services;
};
const getAllServices = async (id) => {
  const res = await axios.get(`http://localhost:4001/services`);
  return res.data.services;
};
const ServicesDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const serviceQuery = useQuery(["product", id], () => getSingleServices(id));
  const allServices = useQuery("services", getAllServices);
  const [serviceName, setServiceName] = useState([]);
  useEffect(() => {
    const array = [];
    if (serviceQuery.isLoading === false) {
      array.push(serviceQuery.data);
    }
    setData(array);
  }, [serviceQuery]);
  useEffect(() => {
    if (allServices.isLoading === false) {
      setServiceName(allServices.data);
    }
  }, [allServices]);
  return (
    <div>
      <Helmet>
        <title>Services</title>
      </Helmet>
      <div class="container mt-5" id="" style={{ display: "none" }}>
        <div class="row">
          <div class="col-md-6 offset-md-3 border p-4 shadow bg-light">
            <div class="col-12">
              <span class="close">x</span>
              <h3 class="fw-normal text-secondary fs-4 text-uppercase mb-4">
                Appointment form
              </h3>
            </div>
            <form action="">
              <div class="row g-3">
                <div class="col-md-6">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="First Name"
                  />
                </div>
                <div class="col-md-6">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Last Name"
                  />
                </div>
                <div class="col-md-6">
                  <input
                    type="tel"
                    class="form-control"
                    placeholder="Phone Number"
                  />
                </div>
                <div class="col-md-6">
                  <input
                    type="email"
                    class="form-control"
                    placeholder="Enter Email"
                  />
                </div>
                <div class="col-md-6">
                  <input
                    type="date"
                    class="form-control"
                    placeholder="Enter Date"
                  />
                </div>
                <div class="col-md-6">
                  <input
                    type="time"
                    class="form-control"
                    placeholder="Enter Email"
                  />
                </div>
                <div class="col-12">
                  <select class="form-select">
                    <option selected>Purpose Of Appointment</option>
                    <option value="1">Web Design</option>
                    <option value="2">Web Development</option>
                    <option value="3"> web application</option>
                  </select>
                </div>
                <div class="col-12">
                  <textarea
                    class="form-control"
                    placeholder="Message"
                  ></textarea>
                </div>
                <div class="col-12 mt-5">
                  <button type="submit" class="btn btn-primary float-end">
                    Book Appointment
                  </button>
                  <button
                    type="button"
                    class="btn btn-outline-secondary float-end me-2"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <section
        class="d-flex align-items-center page-hero  inner-page-hero "
        id="page-hero"
      >
        <div
          class="overlay-photo-image-bg parallax"
          data-bg-img="img/5.jpg"
          data-bg-opacity="1"
        ></div>
        <div class="overlay-color" data-bg-opacity=".75"></div>
        <div class="container">
          <div class="hero-text-area centerd">
            <h1 class="hero-title  wow fadeInUp" data-wow-delay=".2s">
              service details
            </h1>
            <nav aria-label="breadcrumb ">
              <ul class="breadcrumb wow fadeInUp" data-wow-delay=".6s">
                <li class="breadcrumb-item">
                  <a class="breadcrumb-link" href="index.html">
                    <i class="bi bi-house icon "></i>home
                  </a>
                </li>
                <li class="breadcrumb-item active">service details</li>
              </ul>
            </nav>
          </div>
        </div>
      </section>
      {data.length > 0 && (
        <div class="service-single ">
          <div class="container">
            <div class="row">
              <div class="col-12 col-xl-8  ">
                <div class="service-content-area">
                  <div class="featured-img-area part">
                    <img
                      class="feat-img img-fluid"
                      src={data[0].imageUrl}
                      alt="featured image"
                    />
                  </div>
                  <div class="service-content">
                    <div class="part">
                      <h2 class="service-title">{data[0].title}</h2>
                      <p class="service-text">{data[0].description}</p>
                      <p class="service-text">
                        {" "}
                        <span
                          style={{
                            color: "rgb(0, 238, 255)",
                            fontWeight: "bolder",
                          }}
                        >
                          {data.sub_title}
                        </span>{" "}
                        <br />
                        {data.content}{" "}
                      </p>
                    </div>
                    <div class="part">
                      <div class="two-cols-img ">
                        <div class="row">
                          <div class="col-12 col-md-6 mb-3">
                            <div class="img-col">
                              <img
                                class="feat-img img-fluid"
                                src={data[0].imageUrl}
                                alt="featured image"
                              />
                            </div>
                          </div>
                          <div class="col-12 col-md-6">
                            <div class="img-col">
                              <img
                                class="feat-img img-fluid"
                                src={data[0].imageUrl}
                                alt="featured image"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="part">
                      <h2 class="service-title">{data[0].title_2}</h2>
                      <p class="service-text">{data[0].content2} </p>
                    </div>
                    <div class="part">
                      <div class="info-items-list">
                        <div class="row">
                          {data[0].questions.length > 0 &&
                            data[0].questions.map((item, index) => (
                              <div key={index} class="col-12 col-md-6 ">
                                <div class="info-item">
                                  <span class="info-number ">{index + 1}</span>
                                  <div class="info-content">
                                    <h5 class="info-title">{item.question}</h5>
                                    <p class="info-text">{item.answer}</p>
                                  </div>
                                </div>
                              </div>
                            ))}
                        </div>
                      </div>
                    </div>

                    <div class="part">
                      <h2 class="service-title"> most asked questions</h2>
                      <div class="faq">
                        <div class="faq-accordion " id="accordion">
                          {data[0].questions?.map((item) => (
                            <Accordion
                              key={item._id}
                              defaultActiveKey={item._id}
                            >
                              <Accordion.Item eventKey={item._id}>
                                <Accordion.Header>
                                  {item.question}
                                </Accordion.Header>
                                <Accordion.Body>{item.answer}</Accordion.Body>
                              </Accordion.Item>
                            </Accordion>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-12 col-xl-4">
                <div class="service-sidebar ">
                  <div class="sidebar-pane">
                    <h2 class="sidebar-title">list of services</h2>
                    <ul class="list">
                      {serviceName.length > 0 &&
                        serviceName.map((item, index) => (
                          <li key={index} class="list-item active">
                            <img
                              src={item.imageUrl[0]}
                              width={100}
                              alt={item.title}
                            />
                            <Link to={`/services/${item._id}`}>
                              &nbsp; {item.title}
                              <i class="bi bi-arrow-right icon "></i>
                            </Link>
                          </li>
                        ))}
                    </ul>
                  </div>
                  <div class="sidebar-pane">
                    <div class="download-area">
                      <h2 class="sidebar-title">download assets</h2>
                      <p class="sidebar-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Iure minima distinctio dolores quidem ducimus! Illum.
                      </p>
                      <ul class="list">
                        <li class="list-item">
                          <img
                            src="icons/billing-icon.png"
                            width="18%"
                            alt=""
                          />
                          <a href="#0">
                            &nbsp; &nbsp; Product
                            <i class="bi bi-arrow-right icon "></i>
                          </a>
                        </li>
                        <li class="list-item">
                          <img src="icons/all sr.png" width="16%" alt="" />
                          <Link to="/services">
                            &nbsp;All Services
                            <i class="bi bi-arrow-right icon "></i>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="sidebar-pane">
                    <div class="social-area">
                      <h2 class="sidebar-title">follow us</h2>
                      <div class="sc-wrapper dir-row sc-size-40">
                        <ul class="sc-list">
                          <li class="sc-item " title="Facebook">
                            <a
                              class="sc-link"
                              href="#0"
                              title="social media icon"
                            >
                              <i class="fab fa-facebook-f sc-icon"></i>
                            </a>
                          </li>
                          <li class="sc-item " title="youtube">
                            <a
                              class="sc-link"
                              href="#0"
                              title="social media icon"
                            >
                              <i class="fab fa-youtube sc-icon"></i>
                            </a>
                          </li>
                          <li class="sc-item " title="instagram">
                            <a
                              class="sc-link"
                              href="#0"
                              title="social media icon"
                            >
                              <i class="fab fa-instagram sc-icon"></i>
                            </a>
                          </li>
                          <li class="sc-item " title="twitter">
                            <a
                              class="sc-link"
                              href="#0"
                              title="social media icon"
                            >
                              <i class="fab fa-twitter sc-icon"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServicesDetails;
