import React from "react";
import "../components/styles/grid-fluid.css";
import { Helmet } from "react-helmet";

const AskHr = () => {
  return (
    <>
      <Helmet>
        <title>Ask Hr</title>
      </Helmet>
      <div
        main
        role="main"
        aria-labelledby="ibm-pagetitle-h1"
        style={{ marginLeft: "10%" }}
      >
        <div id="ibm-pcon">
          <div id="ibm-content">
            <div id="">
              <div class="ibm-band ibm-background-blue-50 ibm-padding-bottom-1 ibm-padding-top-1 ibm-alternate-background">
                <div class="ibm-fluid ibm-padding-bottom-0">
                  <div class="ibm-col-12-9 ibm-col-large-12-10 ibm-col-medium-12-11 ibm-center-block">
                    <h1
                      style={{ color: "black", marginTop: "10%" }}
                      class="ibm-h1 ibm-padding-bottom-0"
                    >
                      Contact AskHR{" "}
                    </h1>
                  </div>
                </div>
              </div>
              <div id="ibm-content-main">
                <div class="ibm-fluid">
                  <div class="ibm-col-12-9 ibm-col-large-12-10 ibm-col-medium-12-11 ibm-center-block">
                    <p></p>
                    <p style={{ fontSize: "20px" }}>
                      <b>
                        {" "}
                        This form is intended for any former turtl tech or turtl
                        tech in pre-hire status to access HR support for topics
                        such as employment verification, benefits and leaves,
                        payroll, etc.
                      </b>
                    </p>
                    <label>
                      Please fill in your information. Asterisks (
                      <span class="ibm-required">*</span>) indicate fields
                      required to complete this transaction.
                    </label>
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
                        <div
                          style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(2,1fr)",
                          }}
                        >
                          <div style={{ width: "98%" }}>
                            <select class="form-select">
                              <option selected>Country Or Region</option>
                              <option value="1">Web Development</option>
                              <option value="2">App Development</option>
                              <option value="3">Cyber Security</option>
                              <option value="4">web application</option>
                              <option value="3">other</option>
                            </select>
                          </div>
                          <div>
                            <select
                              style={{ width: "100%", marginLeft: "2%" }}
                              class="form-select"
                            >
                              <option selected>Employment Status</option>
                              <option value="1">Web Development</option>
                              <option value="2">App Development</option>
                              <option value="3">Cyber Security</option>
                              <option value="4">web application</option>
                              <option value="3">other</option>
                            </select>
                          </div>
                        </div>
                        <div class="col-12">
                          <textarea
                            class="form-control"
                            placeholder="Please let us know how we can be of help"
                          ></textarea>
                        </div>
                        <div class="col-12 mt-5">
                          <button
                            type="submit"
                            class="btn btn-primary float-end"
                          >
                            Submit
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
          </div>
        </div>
      </div>
    </>
  );
};

export default AskHr;
