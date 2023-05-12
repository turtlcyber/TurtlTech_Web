import React from "react";
import { Helmet } from "react-helmet";

const TalkToSales = () => {
  return (
    <>
      <Helmet>
        <title>Talk To Sales</title>
      </Helmet>

      <div style={{ marginTop: "10%", marginBottom: "5%" }}>
        <div class="container mt-5">
          <div class="row">
            <div class="col-md-6 offset-md-3 border p-4 shadow bg-light">
              <div class="col-12">
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
                    />{" "}
                  </div>
                  <div class="col-12">
                    <select class="form-select">
                      <option selected>Purpose Of Appointment</option>
                      <option value="1">Web Development</option>
                      <option value="2">App Development</option>
                      <option value="3">Cyber Security</option>
                      <option value="4">web application</option>
                      <option value="3">other</option>
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
      </div>
    </>
  );
};

export default TalkToSales;
