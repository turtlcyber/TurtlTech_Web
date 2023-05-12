import React from "react";
import "../components/styles/header.css";
import home1 from "../assets/img/home-img-1.png";
import cyberSecurity from "../assets/icons/cyber-security.png";
import webDevelopement from "../assets/icons/web-development.png";
import appDevelopement from "../assets/icons/app-development (1).png";
import SEOService from "../assets/icons/search-engine-optimization.png";
import webF from "../assets/icons/web apllication.png";
import ExperienceTeam from "../assets/icons/EXPERIENCED TEAM.png";
import strategic from "../assets/icons/strategic.png";
import innovation from "../assets/icons/innovation.png";
import creative from "../assets/icons/CREATIVE APPROACH.png";
import mobile_app_developement from "../assets/img/mobile-app-development.png";
import webHosting from "../assets/img/Web-Hosting.webp";
import vapt from "../assets/img/vapt.png";
import img5 from "../assets/img/contact-bg-img.jpg";
import image5 from "../assets/img/blog-img_11zon.jpg";
import blog2_home from "../assets/img/blog-2-home.jpg";
import blog2 from "../assets/img/d9.jpeg";
import blog3 from "../assets/img/d9.jpeg";
import image3 from "../assets/img/3.png";
import image2 from "../assets/img/2.jpg";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import AllServices from "../components/AllServices";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <section
        class="page-hero d-flex align-items-center tringle-bg"
        id="page-hero"
      >
        <div class="overlay-photo-image-bg"></div>
        <div class="particles-js dots" id="particles-js"></div>
        <div class="container">
          <div class="row align-items-center">
            <div class="col-12 col-lg-6">
              <div class="hero-text-area">
                <div class="row">
                  {/* <div class="col-12">
                                <div class="hero-social-icons mb-3">
                                    <div class="sc-wrapper dir-row sc-flat">
                                        <ul class="sc-list">
                                            <li class="sc-item" title="Facebook">
                                                <a class="sc-link" href="#0" title="social media icon"><i
                                                        class="fab fa-facebook-f sc-icon"></i></a>
                                            </li>
                                            <li class="sc-item" title="youtube">
                                                <a class="sc-link" href="#0" title="social media icon"><i
                                                        class="fab fa-youtube sc-icon"></i></a>
                                            </li>
                                            <li class="sc-item" title="instagram">
                                                <a class="sc-link" href="#0" title="social media icon"><i
                                                        class="fab fa-instagram sc-icon"></i></a>
                                            </li>
                                            <li class="sc-item" title="twitter">
                                                <a class="sc-link" href="#0" title="social media icon"><i
                                                        class="fab fa-twitter sc-icon"></i></a>
                                            </li>
                                        </ul>
                                    </div> 
                                </div>
                            </div> */}
                  <div class="col-12">
                    <div class="pre-title" style={{ fontSize: "larger" }}>
                      Protect <span> Detect </span> Respond
                    </div>
                    <div class="hero-title">
                      {" "}
                      Cyber Services & IT solutions
                      <span class="featured-text">
                        {" "}
                        <br />
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="wavey-underline"
                          width="1104.664"
                          height="100.188"
                          viewBox="0 0 1104.664 100.188"
                        >
                          <path
                            id="Path_208"
                            data-name="Path 208"
                            d="M1395.385,1568.169a21.357,21.357,0,0,0-7.563,1.667c-5.893,2.122-10,6.516-13.9,10.646-9.685,10.253-18.565,21-27.757,31.568a74.7,74.7,0,0,1-10.36,9.6,40.274,40.274,0,0,1-4.749,2.291c-.58.154-1.151.288-1.731.406l-.07-.018c-.25-.121-.495-.247-.737-.381a69.246,69.246,0,0,1-9.219-8.363c-3.508-3.913-6.856-7.927-10.125-11.993a84.778,84.778,0,0,0-9.754-10.9,33.9,33.9,0,0,0-4.734-3.159,29.755,29.755,0,0,0-3.86-1.468,8.287,8.287,0,0,0-2.416-.514,25.223,25.223,0,0,0-8.575.116,37.238,37.238,0,0,0-6.61,2.031,55.378,55.378,0,0,0-9.6,5.049c-3.359,2.173-6.689,4.371-9.92,6.667-4.873,3.468-9.73,6.936-14.7,10.3a75.464,75.464,0,0,1-10.418,5.482c-.9.256-1.8.477-2.723.657h-.017q-.244-.123-.486-.252a123.025,123.025,0,0,1-14.522-13.025c-2.21-2.214-4.43-4.419-6.738-6.559a56.755,56.755,0,0,0-6.2-5.1,26.416,26.416,0,0,0-8.359-4.113,24.5,24.5,0,0,0-7.131-.829,24.16,24.16,0,0,0-5.9.953,45.529,45.529,0,0,0-4.43,1.659,25.049,25.049,0,0,0-3.88,2.388,43.866,43.866,0,0,0-7.121,6.052c-2.916,2.919-5.559,6.053-8.162,9.179-4.706,5.669-8.674,11.735-13.477,17.349a40.793,40.793,0,0,1-3.312,3.018c-1.77-.869-3.456-1.838-5.139-2.847-2.985-2.082-5.832-4.252-8.629-6.526-3.388-2.745-6.551-5.7-9.714-8.631q-4.449-4.13-8.909-8.259c-1.375-1.268-2.779-2.529-4.242-3.723-3.7-3.034-7.554-6.052-12.161-8.075-1.444-.531-2.887-1.037-4.341-1.534-.4-.091-.805-.191-1.208-.29q-2.3-.312-4.607-.539a24.017,24.017,0,0,0-7.9,1.153,22.473,22.473,0,0,0-4.194,1.633,32.6,32.6,0,0,0-4.823,3.142,25.689,25.689,0,0,0-3.968,3.7,143.436,143.436,0,0,0-9.822,11.674c-2.524,3.4-4.961,6.84-7.4,10.281-2.548,3.581-5.078,7.193-7.894,10.631l-.04-.024c-7.131-4.818-13.964-9.976-20.737-15.134-7.936-6.035-15.519-12.5-24.183-17.809a56.468,56.468,0,0,0-7.219-3.764,57.227,57.227,0,0,0-6.3-2.181,33.858,33.858,0,0,0-6.424-.846c-1.561.083-3.1.241-4.645.465a27.682,27.682,0,0,0-5.648,1.749,56.414,56.414,0,0,0-9.066,5.332,85.607,85.607,0,0,0-10.647,8.746c-7.2,6.686-13.456,14.117-19.865,21.341-1.1,1.186-2.207,2.358-3.38,3.482-.861-.86-1.69-1.744-2.512-2.624-5.094-5.73-9.878-11.655-15.025-17.348-1.866-2.065-3.753-4.105-5.688-6.111a54.566,54.566,0,0,0-4.606-4.17,26.641,26.641,0,0,0-7.464-4.362,19.329,19.329,0,0,0-3.969-1.268,23.247,23.247,0,0,0-5.412-.448,27.049,27.049,0,0,0-9.252,2.189,64.6,64.6,0,0,0-6.807,3.1,188.563,188.563,0,0,0-24.212,15.654c-7.265,5.4-14.36,11-21.938,16.1a58.665,58.665,0,0,1-8.325,4.456c-.832.234-1.648.426-2.5.589-.122,0-.244,0-.367,0l-.144-.033c-.107-.051-.212-.1-.317-.156a41.819,41.819,0,0,1-3.947-3.516,93.708,93.708,0,0,1-5.968-8.2c-1.867-2.852-3.585-5.779-5.432-8.639-3.28-5.091-6.748-10.223-11.767-14.261a20.525,20.525,0,0,0-7.534-3.789,16.866,16.866,0,0,0-4.292-.655,33.2,33.2,0,0,0-5.363.456c-1.316.381-2.612.821-3.87,1.318a27.008,27.008,0,0,0-3.428,1.816c-1.561.954-3.045,2-4.547,3.018a171.305,171.305,0,0,0-17.327,13.979c-5.795,5.153-11.268,10.63-17.718,15.214a48.483,48.483,0,0,1-4.709,2.516c-.392.114-.784.217-1.182.313-5.283-3.993-9.674-8.814-14.118-13.45-4.312-4.477-8.594-9-13.29-13.2-5.284-4.718-11.05-9.369-18.318-11.765a28.559,28.559,0,0,0-7.475-1.194c-1.424.124-2.838.306-4.233.539-1.307.414-2.6.862-3.879,1.343a33.49,33.49,0,0,0-5.452,3.607,42.418,42.418,0,0,0-4.754,4.833c-3.808,4.195-7.459,8.482-11.241,12.69-2.722,2.866-5.442,5.741-8.334,8.495a110.3,110.3,0,0,1-12.253,10.513c-.676.4-1.355.765-2.053,1.107-3.421-2.787-6.435-5.972-9.5-9.025s-6.12-6.1-9.273-9.071c-4.98-4.685-10.205-9.336-16.334-12.951a29.591,29.591,0,0,0-7.347-3.325,14.36,14.36,0,0,0-4.086-.688c-.491-.05-.992-.091-1.493-.141a36.093,36.093,0,0,0-3.782.489c-1.158.39-2.3.8-3.417,1.26a11.837,11.837,0,0,0-3.684,2.786,38.113,38.113,0,0,0-4.145,5.257,156.759,156.759,0,0,0-12.012,22.046c-1.651,3.549-3.016,7.172-4.371,10.8-.639,1.733-1.16,3.5-1.876,5.207-1.062,2.545-2.1,5.082-3.271,7.595a1.894,1.894,0,0,0,1.1,2.28,2.668,2.668,0,0,0,3.261-.73c2.73-3.971,5.716-7.736,8.859-11.475,2.878-3.424,5.933-6.749,8.919-10.107,5.268-5.9,10.466-11.851,15.731-17.75.333.183.663.37.993.562,7.6,5.265,13.967,11.673,20.286,17.984,2.485,2.479,4.94,4.983,7.484,7.421,2.515,2.413,5.019,4.933,8.261,6.707a18.993,18.993,0,0,0,6.217,2.173,21.641,21.641,0,0,0,10.373-.9c7.366-2.421,12.926-7.346,18.426-11.964,3.006-2.529,5.727-5.365,8.5-8.093,5.2-5.118,10.08-10.457,14.958-15.8,1.527-1.616,3.039-3.23,4.73-4.709.706.36,1.393.741,2.075,1.144,7.925,5.608,14.364,12.627,20.846,19.375,3.2,3.325,6.424,6.625,9.822,9.808a45.086,45.086,0,0,0,7.966,6.128,11.269,11.269,0,0,0,2.259,1.135c.874.316,1.748.622,2.623.937a12.809,12.809,0,0,0,4.155.68,26.906,26.906,0,0,0,11.226-1.4c7.927-2.57,14.409-7.429,20.283-12.47,3.094-2.653,6.07-5.414,9.125-8.093a234.791,234.791,0,0,1,18.358-14.822c4.517,5.537,7.877,11.693,11.747,17.551a73.925,73.925,0,0,0,7.5,9.568,51.738,51.738,0,0,0,4.686,4.46,29.5,29.5,0,0,0,3.427,2.363,24.359,24.359,0,0,0,5.3,2.421c5.706,2.032,12.306,1.617,18.023-.165,8.035-2.5,14.615-7.147,21.118-11.707,3.084-2.164,6.079-4.42,9.075-6.667,5.769-4.312,11.51-8.631,17.485-12.724a113.949,113.949,0,0,1,16.474-8.936,64.641,64.641,0,0,1,8.45,7.941c4.85,5.48,9.537,11.053,14.432,16.5a87.007,87.007,0,0,0,9.341,9.427,26.069,26.069,0,0,0,3.055,2.073,10.084,10.084,0,0,0,3.536,1.467,13.307,13.307,0,0,0,4.862.913,29.729,29.729,0,0,0,5.353-.639c3.418-.746,6.267-2.795,8.919-4.618a39.946,39.946,0,0,0,5.019-4.428c5.363-5.2,10.038-10.894,15.274-16.185a121.467,121.467,0,0,1,16.741-14.571c.87-.521,1.749-1.014,2.662-1.475l.276.073a51.763,51.763,0,0,1,6.551,3.257c6.848,4.661,13.244,9.761,19.747,14.756,7.259,5.572,14.665,11.069,22.317,16.243a57.253,57.253,0,0,0,8.819,5.281,20.68,20.68,0,0,0,9.312,1.883,19.363,19.363,0,0,0,7.406-1.7,42.414,42.414,0,0,0,5.382-3.3,20.763,20.763,0,0,0,2.161-1.924c1.454-1.393,2.741-2.926,4.077-4.394,1.325-1.451,2.485-3.01,3.673-4.544,1.463-1.881,2.878-3.78,4.293-5.687,4.834-6.49,9.512-13.021,14.91-19.18.555-.552,1.122-1.089,1.708-1.61.1.057.209.115.313.173,6.282,4.5,11.65,9.908,17.2,15.02a163.615,163.615,0,0,0,18.485,15.231c2.269,1.55,4.6,3.027,6.945,4.486a47.181,47.181,0,0,0,6.3,3.283,27.077,27.077,0,0,0,11.138,2.255,24.392,24.392,0,0,0,9.577-2.23,41.8,41.8,0,0,0,7.868-4.934,53.288,53.288,0,0,0,7.15-7.2c1.327-1.509,2.614-3.052,3.841-4.618,4.5-5.763,8.879-11.569,13.724-17.12,1.206-1.237,2.419-2.456,3.718-3.613,2.214,1.819,4.255,3.788,6.308,5.75,2.367,2.255,4.656,4.56,7,6.824,2.219,2.139,4.468,4.286,6.884,6.277.757.621,1.523,1.243,2.279,1.865a55.074,55.074,0,0,0,6.394,4.32,20.453,20.453,0,0,0,4.43,1.774,14.3,14.3,0,0,0,3.242.912c4.007.87,8.064.415,12.061-.158a34.471,34.471,0,0,0,7.5-2.321,63.157,63.157,0,0,0,6.434-2.977,109.528,109.528,0,0,0,10.53-6.592c2.848-1.948,5.687-3.913,8.437-5.952,5.157-3.823,10.248-7.693,15.573-11.348,1.425-.856,2.851-1.677,4.356-2.4a46.694,46.694,0,0,1,3.826,3.609c5.82,6.463,11.621,12.927,17.91,19.072a76.822,76.822,0,0,0,7.387,6.351,26.97,26.97,0,0,0,8.683,4.552,25.388,25.388,0,0,0,11.629.556,46.95,46.95,0,0,0,8.094-2.454,37.83,37.83,0,0,0,8.408-4.561,81.5,81.5,0,0,0,8.349-6.807c3.378-3.018,6.335-6.434,9.36-9.7,2.8-3.017,5.569-6.052,8.369-9.07,3.034-3.266,6.07-6.534,9.164-9.759,1.748-1.807,3.5-3.615,5.264-5.406,1.345-1.375,2.7-2.738,4.142-4.033,1.959,2.939,3.523,6.068,5.287,9.091a102.254,102.254,0,0,0,7.357,11.152,73.1,73.1,0,0,0,9.45,9.916,54.363,54.363,0,0,0,4.38,3.4,37.472,37.472,0,0,0,6.885,4,27.526,27.526,0,0,0,6.9,1.948,28.637,28.637,0,0,0,4.765.4,38.314,38.314,0,0,0,6.521-.713,34.284,34.284,0,0,0,7.22-2.255,55.5,55.5,0,0,0,7.534-3.673c8.564-4.892,15.921-11.276,23.14-17.478,2.564-2.2,5.1-4.427,7.642-6.642,2.695-2.334,5.41-4.692,8.34-6.825.169.152.337.308.5.465,2.514,3,4.676,6.19,7,9.3,2.23,2.993,4.509,5.961,6.807,8.921,2.092,2.7,4.243,5.423,6.561,8a54.978,54.978,0,0,0,7.072,7.13,18.737,18.737,0,0,0,6.876,3.467,26.353,26.353,0,0,0,10.47.3,71.973,71.973,0,0,0,15.814-5.315c2.74-1.193,5.363-2.537,8.015-3.863,3.841-1.924,7.524-4.022,11.236-6.111,1.474-.829,2.859-1.774,4.273-2.661,2.22-1.394,4.538-2.737,6.66-4.246,1.7-1.2,3.388-2.421,5.077-3.631,2.614-1.874,4.922-3.972,7.368-6a5.547,5.547,0,0,0,1.149-7.545,7.359,7.359,0,0,0-4.411-2.869,9.332,9.332,0,0,0-5.687.63c-.386.141-.768.284-1.152.427-2.566.891-5.157,1.755-7.609,2.84-2.092.928-4.194,1.857-6.286,2.786-3.252,1.442-6.345,3.159-9.488,4.742-8.387,4.231-16.5,8.768-25.376,12.235-1.145.358-2.293.671-3.47.941q-.555-.505-1.08-1.033a179.832,179.832,0,0,1-11.553-16.28c-2.043-3.109-4.107-6.193-6.228-9.261a49.911,49.911,0,0,0-3.281-4.17c-.933-1.054-1.9-2.09-2.9-3.1a24.214,24.214,0,0,0-20.44-6.153c-7.593,1.269-13.319,6.128-18.564,10.613-2.878,2.463-5.648,5-8.447,7.529a194.132,194.132,0,0,1-19.2,15.756,54.882,54.882,0,0,1-7.621,3.938c-.888.246-1.764.449-2.673.624-.143,0-.286.006-.43.006-.308-.063-.612-.133-.916-.209-.712-.338-1.4-.7-2.069-1.094a58.392,58.392,0,0,1-7.122-6.2,70.261,70.261,0,0,1-7.978-11.366c-1.778-3.168-3.477-6.368-5.225-9.552a26.78,26.78,0,0,0-9.774-10.63,21.285,21.285,0,0,0-6.944-2.544,22.865,22.865,0,0,0-4.153-.379c-.164,0-.328,0-.493.005Zm-2.8,18.564a9.723,9.723,0,0,1,1.384.495q-.693-.246-1.384-.495Zm7.023.141q-.51.184-1.025.367.5-.2,1.025-.367Zm100.709,4.264-.2.022.2-.022Zm1.365.167.107.038-.107-.037Zm-.949.133,0,0-.126.044.124-.046Zm-216.174,15.218,0,0c-.139.017-.278.032-.416.047.137-.019.274-.036.411-.05Zm1.107.139c.114.04.227.082.338.127l-.348-.123.01,0Zm-.411.191q.348.219.68.459l-.691-.453.011-.006Zm-105.625,1.694q.443.139.868.31l-.868-.31Zm-100.207.6-.692.077c.228-.033.46-.059.692-.077Zm-1.295.444c.1.014.19.028.284.045l-.3-.033.014-.012Zm364.3.261c-.211.029-.422.053-.633.074l0,0,.629-.072Zm-.653.075h0l-.019,0,.021,0Zm-476.071,1-.841.1c.28-.046.56-.078.841-.1Zm1.352.005c.283.022.566.055.851.1l-.857-.1.006,0Zm-.67.1-1.043.37q.512-.21,1.043-.37Zm575.443.37.324.213-.011,0c-.106-.07-.211-.142-.313-.216Zm1.708.191c-.3.046-.6.08-.9.1h0l.9-.1Zm-673.33,2.85c.182.016.366.035.548.06q-.274-.029-.548-.06Zm-.8.117q.425.134.837.3c-.282-.1-.563-.2-.845-.3l.008,0Zm-222.3.606-.54.062c.179-.026.358-.047.54-.062Zm-2.374.542.014.007-.252.09c.078-.034.159-.066.238-.1Zm.988.215c.066.023.132.048.2.073l-.2-.071v0Zm105.433.264c.17.054.336.113.5.175l-.5-.175Zm6.246.662-.6.068h0q.294-.045.6-.067Zm466.3.208,1.233.438c-.419-.126-.83-.273-1.233-.438Zm-.147.514.648.075c-.216-.021-.432-.045-.648-.075Zm-581.111,1.426c-.421.467-.847.929-1.269,1.39l1.269-1.39Zm684.823,5.083c.547.06,1.1.12,1.641.182a10.366,10.366,0,0,1-1.641-.182Zm-409.006,2.022c-.58.631-1.156,1.264-1.737,1.894.578-.629,1.158-1.265,1.737-1.894Zm220.5,3.282.669.076c-.225-.019-.448-.045-.669-.076Zm-345.858,6.8c.269.18.541.358.812.537-.278-.169-.549-.347-.812-.537Zm-.03.506,1.242.439a12.42,12.42,0,0,1-1.242-.439Zm-97.6.092.5.056c-.167-.016-.334-.034-.5-.056Zm97.8.423c.287.03.574.063.861.1-.288-.024-.574-.055-.861-.1Zm-201.748,2.76.552.36-.016.008c-.182-.118-.361-.24-.536-.368Zm-1.5.564,1.3.145-.017.007-.01,0a9.2,9.2,0,0,1-1.275-.154Zm2.877.092c-.062.008-.125.014-.187.021h0l.189-.02Z"
                            transform="translate(-504.796 -1565.664)"
                            fill="none"
                            stroke="#030303"
                            stroke-width="5"
                          />
                        </svg>{" "}
                      </span>
                      <span class="design-element rounded-shape stripes"></span>
                    </div>
                  </div>
                  <div class="col-10">
                    <p class="hero-subtitle">
                      Turtltech provides a full range of business consulting &
                      advisory services to small, medium, and international
                      companies worldwide. We use innovations and experience to
                      your success.
                    </p>
                  </div>
                  <div class="col-12">
                    <br />
                    <div class="cta-links-area">
                      <a
                        class="btn-outline cta-link cta-link-primary"
                        href="#0"
                      >
                        start now
                      </a>
                      <div class="play-btn-row-dir">
                        <a
                          class="video-link"
                          href=""
                          role="button"
                          title="play"
                          data-fancybox="data-fancybox"
                        >
                          <div class="play-video-btn">
                            <div class="play-btn">
                              <i class="fas fa-play icon"></i>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-12 mx-md-auto col-lg-6 text-center" data-tilt>
              <div class="hero-image-area mb-5 mb-lg-0">
                <div class="hero-img-wraper">
                  <img class="img-fluid" src={home1} alt="" draggable="false" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="services services-boxed mega-section" id="services">
        <div class="container">
          <div class="sec-heading">
            <div class="content-area">
              <span class="pre-title wow fadeInUp" data-wow-delay=".2s">
                services
              </span>
              <h2 class="title wow fadeInUp" data-wow-delay=".4s">
                <span class="hollow-text">services</span> we offer
              </h2>
              <p class="subtitle wow fadeInUp" data-wow-delay=".6s">
                Lorem ipsum dolor sit amet consectetur adipisicing elit Omnis
                <br />
                id atque dignissimos repellat quae ullam.
              </p>
            </div>
            <div class="cta-area wow fadeInUp" data-wow-delay=".8s">
              <a class="cta-btn btn-solid">
                see all services <i class="bi bi-arrow-right icon"></i>
              </a>
            </div>
          </div>
          <AllServices />
        </div>
      </section>
      <section class="about mega-section" id="about">
        <div class="container">
          <div class="content-block">
            <div class="row">
              <div
                class="col-12 col-lg-6 d-flex align-items-center order-1 order-lg-0 about-col pad-end wow fadeInUp"
                data-wow-delay="0.6s"
              >
                <div class="text-area">
                  <div class="sec-heading light-title">
                    <div class="content-area">
                      <span class="pre-title wow fadeInUp" data-wow-delay=".2s">
                        OUR FEATURES
                      </span>
                      <h2 class="title wow fadeInUp" data-wow-delay=".4s">
                        <span class="hollow-text">Why</span>Businesses
                        <span class="featured-text">
                          Choose Us
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 500 150"
                            preserveAspectRatio="none"
                          >
                            <path d="M7.7,145.6C109,125,299.9,116.2,401,121.3c42.1,2.2,87.6,11.8,87.3,25.7"></path>
                          </svg>
                        </span>
                      </h2>
                    </div>
                  </div>
                  <p class="about-text">
                    Cyber Security is something that every corner of the world
                    needs. Here mentioned are some features that make us stand
                    out...
                  </p>
                  <div class="info-items-list">
                    <div class="row">
                      <div class="col-9 col-xl-6">
                        <div class="info-item">
                          <img src={ExperienceTeam} width={100} alt="" /> <br />
                          <div class="info-content">
                            <h5 class="info-title">EXPERIENCED TEAM</h5>
                            <p class="info-text">
                              The strenght of our team lies in their passion and
                              authenticity. We have well groomed members; bright
                              minds with grip on the latest technology.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="col-9 col-xl-6">
                        <div class="info-item">
                          <img src={strategic} width={100} alt="" />
                          <div class="info-content">
                            <h5 class="info-title">STRATEGIC THINKING</h5>
                            <p class="info-text">
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Aspernatur, iste
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="col-9 col-xl-6">
                        <div class="info-item">
                          <img src={innovation} width={100} alt="" />
                          <div class="info-content">
                            <h5 class="info-title">INNOVATIVE BUSINESS</h5>
                            <p class="info-text">
                              Main domain being in Cyber Security, our business
                              also provides Game Development, App Development,
                              Web Designing and Development, pen-testing,
                              marketing services.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div class="col-9 col-xl-6">
                        <div class="info-item">
                          <img src={creative} width={100} alt="" />
                          <div class="info-content">
                            <h5 class="info-title">CREATIVE APPROACH</h5>
                            <p class="info-text">
                              Following our vision, we think strategically each
                              step further. We aim to reach our goal via the
                              right path.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="cta-area">
                    <Link class="btn-solid reveal-start" to="/contact">
                      Get in touch
                    </Link>
                    <div class="signature">
                      <div class="signature-img"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="col-12 col-lg-6 d-flex align-items-center order-0 order-lg-1 about-col wow fadeInUp"
                data-wow-delay="0.2s"
              >
                <div class="img-area" data-tilt>
                  <div class="image">
                    <img
                      class="about-img img-fluid"
                      loading="lazy"
                      src={image3}
                      alt="Our vision"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="content-block">
            <div class="row">
              <div
                class="col-12 col-lg-6 d-flex align-items-center about-col wow fadeInUp"
                data-wow-delay="0.2s"
              >
                <div class="img-area">
                  <div class="image" data-tilt>
                    <img
                      class="about-img img-fluid"
                      loading="lazy"
                      src={image2}
                      alt="about"
                    />
                  </div>
                </div>
              </div>
              <div
                class="col-12 col-lg-6 d-flex align-items-center about-col pad-start wow fadeInUp"
                data-wow-delay="0.6s"
              >
                <div class="text-area">
                  <div class="sec-heading light-title">
                    <div class="content-area">
                      <span class="pre-title wow fadeInUp" data-wow-delay=".2s">
                        ABOUT US
                      </span>
                      <h2 class="title wow fadeInUp" data-wow-delay=".4s">
                        <span class="hollow-text"> What </span>
                        <span class="featured-text">
                          WE DO
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 500 150"
                            preserveAspectRatio="none"
                          >
                            <path d="M7.7,145.6C109,125,299.9,116.2,401,121.3c42.1,2.2,87.6,11.8,87.3,25.7"></path>
                          </svg>
                        </span>
                      </h2>
                    </div>
                  </div>
                  <p class="about-text">
                    Your safety is our responsibility Yes, you rely on us.
                    Founded in 2022, Turtl Cyber Security aims to serve you with
                    out standing security amenities for both busniess and
                    personal domains. Our team is well experienced and authentic
                    in terms of your data security and confidentiality. Be it
                    passwords, emails, websites personal and business accounts
                    or your system as a whole, we ensure to provide you the best
                    security.
                  </p>
                  <div class="info-items-list">
                    <div class="row">
                      <div class="col-12">
                        <div class="info-item">
                          <span class="info-number">01.</span>
                          <div class="info-content">
                            <h5 class="info-title">latest technologies</h5>
                            <p class="info-text">
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Neque repellendus minima reiciendis nobis
                              dolore obcaecati.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="info-item">
                          <span class="info-number">02.</span>
                          <div class="info-content">
                            <h5 class="info-title">uniqe solutions</h5>
                            <p class="info-text">
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Neque repellendus minima reiciendis nobis
                              dolore obcaecati.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="info-item">
                          <span class="info-number">03.</span>
                          <div class="info-content">
                            <h5 class="info-title">powerful strategies</h5>
                            <p class="info-text">
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Neque repellendus minima reiciendis nobis
                              dolore obcaecati.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="cta-area">
                    <a class="btn-solid" href="about-us.html">
                      get in toutch
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        class="stats js-stats-counter mega-section"
        style={{ backgroundColor: "rgba(9, 255, 214, 0.451)" }}
      >
        <div
          class="overlay-photo-image-bg"
          data-bg-img="images/bg-img-2.jpg"
          ata-bg-opacity=".2"
        ></div>
        <div class="container">
          <div class="stats-inner">
            {" "}
            <img src="" alt="" />
            <div class="row">
              <div class="col-12 col-md-6 col-lg-3 stat-box">
                <div class="stat-box-inner" data-tilt="data-tilt">
                  <p class="stat-num">
                    <span class="sign">
                      <img src={ExperienceTeam} width={100} alt="" />
                    </span>
                  </p>
                </div>
              </div>

              <div class="col-12 col-md-6 col-lg-3 stat-box">
                <div class="stat-box-inner" data-tilt="data-tilt">
                  <p class="stat-num">
                    <span class="sign">
                      <img src={ExperienceTeam} width={100} alt="" />
                    </span>
                  </p>
                </div>
              </div>

              <div class="col-12 col-md-6 col-lg-3 stat-box">
                <div class="stat-box-inner" data-tilt="data-tilt">
                  <p class="stat-num">
                    <span class="sign">
                      <img src={ExperienceTeam} width={100} alt="" />
                    </span>
                  </p>
                </div>
              </div>

              <div class="col-12 col-md-6 col-lg-3 stat-box">
                <div class="stat-box-inner" data-tilt="data-tilt">
                  <p class="stat-num">
                    <span class="sign">
                      <img src={ExperienceTeam} width={100} alt="" />
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="portfolio portfolio-blocks mega-section" id="portfolio">
        <div class="container">
          <div class="sec-heading">
            <div class="content-area">
              <span class="pre-title wow fadeInUp" data-wow-delay=".2s">
                portfolio
              </span>
              <h2 class="title wow fadeInUp" data-wow-delay=".4s">
                Awesome <span class="hollow-text">portfolio</span>
              </h2>
            </div>
            <div class="cta-area wow fadeInUp" data-wow-delay=".8s">
              <Link class="cta-btn btn-solid" to="/services" >
                see more <i class="bi bi-arrow-right icon"></i>
              </Link>
            </div>
          </div>
          {/* <Tabs
            defaultActiveKey="profile"
            id="justify-tab-example"
            class="portfolio-btn-list wow fadeInUp"
            justify
          >
            <Tab  class="portfolio-btn"  eventKey="home" title="ALL">
              All
            </Tab>
            <Tab  class="portfolio-btn" eventKey="profile" title="Profile">
              
            </Tab>
            <Tab class="portfolio-btn"  eventKey="longer-tab" title="Loooonger Tab">
              
            </Tab>
            <Tab class="portfolio-btn" eventKey="contact" title="Contact">
            
            </Tab>
          </Tabs> */}
          <div class="portfolio-wrapper">
            <ul class="portfolio-btn-list wow fadeInUp" data-wow-delay=".2s">
              <li class="portfolio-btn active" data-filter="*">
                all
              </li>
              <li class="portfolio-btn" data-filter=".mobile">
                mobile
              </li>
              <li class="portfolio-btn" data-filter=".web">
                web apps
              </li>
              <li class="portfolio-btn" data-filter=".data">
                Cyber Security
              </li>
              <li class="portfolio-btn" data-filter=".hosting">
                Digital marketing
              </li>
            </ul>
            <div class="portfolio-group wow fadeIn" data-wow-delay=".4s">
              <div class="row">
                <div class="col-12 col-md-6 col-lg-4 portfolio-item mobile">
                  <div class="item">
                    <a class="portfolio-img-link" href="services-turtl.html">
                      <img
                        class="portfolio-img img-fluid"
                        loading="lazy"
                        src={mobile_app_developement}
                        alt="portfolio item photo"
                      />
                    </a>
                    <div class="item-info">
                      <h3 class="item-title">mobile apps</h3>
                      <i class="bi bi-arrow-right icon"></i>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-md-6 col-lg-4 portfolio-item web">
                  <div class="item">
                    <img
                      class="portfolio-img img-fluid"
                      loading="lazy"
                      src={vapt}
                      alt="portfolio item photo"
                    />
                    <div class="item-info">
                      <h3 class="item-title">Cyber Security</h3>
                      <h3 class="item-title">Cyber Security</h3>
                      <i class="bi bi-arrow-right icon"></i>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-md-6 col-lg-4 portfolio-item data">
                  <div class="item">
                    <img
                      class="portfolio-img img-fluid"
                      loading="lazy"
                      src={img5}
                      alt="portfolio item photo"
                    />
                    <div class="item-info">
                      <h3 class="item-title">Pen testing</h3>
                      <h3 class="item-title">Pen testing</h3>
                      <i class="bi bi-arrow-right icon"></i>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-md-6 col-lg-4 portfolio-item mobile">
                  <div class="item">
                    <img
                      class="portfolio-img img-fluid"
                      loading="lazy"
                      src={webHosting}
                      alt="portfolio item photo"
                    />
                    <div class="item-info">
                      <h3 class="item-title">hosting</h3>
                      <h3 class="item-title"> WEB hosting</h3>
                      <i class="bi bi-arrow-right icon"></i>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-md-6 col-lg-4 portfolio-item hosting">
                  <div class="item">
                    <img
                      class="portfolio-img img-fluid"
                      loading="lazy"
                      src="img/seo_11zon.webp"
                      alt="portfolio item photo"
                    />
                    <div class="item-info">
                      <h3 class="item-title">SEO</h3>
                      <h3 class="item-title">SEO</h3>
                      <i class="bi bi-arrow-right icon"></i>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-md-6 col-lg-4 portfolio-item mobile">
                  <div class="item">
                    <a class="portfolio-img-link" href="services-turtl.html">
                      <img
                        class="portfolio-img img-fluid"
                        loading="lazy"
                        src={image5}
                        alt="portfolio item photo"
                      />
                    </a>
                    <div class="item-info">
                      <h3 class="item-title">other category</h3>
                      <i class="bi bi-arrow-right icon"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="row d-flex justify-content-center">
          <div class="col-md-10 col-xl-8 text-center">
            <h3 class="mb-4">Testimonials</h3>
            <p class="mb-4 pb-2 mb-md-5 pb-md-0">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
              error amet numquam iure provident voluptate esse quasi, veritatis
              totam voluptas nostrum quisquam eum porro a pariatur veniam.
            </p>
          </div>
        </div>

        <div class="row text-center">
          <div class="col-md-4 mb-5 mb-md-0">
            <div class="d-flex justify-content-center mb-4">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                class="rounded-circle shadow-1-strong"
                width="150"
                height="150"
              />
            </div>
            <h5 class="mb-3">Maria Smantha</h5>
            <h6 class="text-primary mb-3">Web Developer</h6>
            <p class="px-xl-3">
              <i class="fas fa-quote-left pe-2"></i>Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Quod eos id officiis hic tenetur
              quae quaerat ad velit ab hic tenetur.
            </p>
            <ul class="list-unstyled d-flex justify-content-center mb-0">
              <li>
                <i class="fas fa-star fa-sm text-warning"></i>
              </li>
              <li>
                <i class="fas fa-star fa-sm text-warning"></i>
              </li>
              <li>
                <i class="fas fa-star fa-sm text-warning"></i>
              </li>
              <li>
                <i class="fas fa-star fa-sm text-warning"></i>
              </li>
              <li>
                <i class="fas fa-star-half-alt fa-sm text-warning"></i>
              </li>
            </ul>
          </div>
          <div class="col-md-4 mb-5 mb-md-0">
            <div class="d-flex justify-content-center mb-4">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp"
                class="rounded-circle shadow-1-strong"
                width="150"
                height="150"
              />
            </div>
            <h5 class="mb-3">Lisa Cudrow</h5>
            <h6 class="text-primary mb-3">Graphic Designer</h6>
            <p class="px-xl-3">
              <i class="fas fa-quote-left pe-2"></i>Ut enim ad minima veniam,
              quis nostrum exercitationem ullam corporis suscipit laboriosam,
              nisi ut aliquid commodi.
            </p>
            <ul class="list-unstyled d-flex justify-content-center mb-0">
              <li>
                <i class="fas fa-star fa-sm text-warning"></i>
              </li>
              <li>
                <i class="fas fa-star fa-sm text-warning"></i>
              </li>
              <li>
                <i class="fas fa-star fa-sm text-warning"></i>
              </li>
              <li>
                <i class="fas fa-star fa-sm text-warning"></i>
              </li>
              <li>
                <i class="fas fa-star fa-sm text-warning"></i>
              </li>
            </ul>
          </div>
          <div class="col-md-4 mb-0">
            <div class="d-flex justify-content-center mb-4">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp"
                class="rounded-circle shadow-1-strong"
                width="150"
                height="150"
              />
            </div>
            <h5 class="mb-3">John Smith</h5>
            <h6 class="text-primary mb-3">Marketing Specialist</h6>
            <p class="px-xl-3">
              <i class="fas fa-quote-left pe-2"></i>At vero eos et accusamus et
              iusto odio dignissimos ducimus qui blanditiis praesentium
              voluptatum deleniti atque corrupti.
            </p>
            <ul class="list-unstyled d-flex justify-content-center mb-0">
              <li>
                <i class="fas fa-star fa-sm text-warning"></i>
              </li>
              <li>
                <i class="fas fa-star fa-sm text-warning"></i>
              </li>
              <li>
                <i class="fas fa-star fa-sm text-warning"></i>
              </li>
              <li>
                <i class="fas fa-star fa-sm text-warning"></i>
              </li>
              <li>
                <i class="far fa-star fa-sm text-warning"></i>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section class="blog blog-home mega-section" id="blog">
        <div class="container">
          <div class="sec-heading">
            <div class="content-area">
              <span class="pre-title wow fadeInUp" data-wow-delay=".2s">
                blog
              </span>
              <h2 class="title wow fadeInUp" data-wow-delay=".4s">
                latest <span class="hollow-text">news</span>
              </h2>
            </div>
            <div class="cta-area cta-area wow fadeInUp" data-wow-delay=".8s">
              <a
                class="cta-btn btn-solid cta-btn btn-solid"
                href="blog-turtltech.html"
              >
                see all posts<i class="bi bi-arrow-right icon"></i>
              </a>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <div class="posts-grid">
                <div class="row">
                  <div class="col-12 col-lg-4">
                    <div class="post-box">
                      <a
                        class="post-link"
                        href="blog-turtltech.html"
                        title="How litespeed technology works to speed up your site "
                      >
                        <div class="post-img-wrapper">
                          <img
                            class="parallax-img post-img"
                            loading="lazy"
                            src={blog2_home}
                            alt=""
                          />
                          <span class="post-date">
                            <span class="day">05 </span>oct 2022
                          </span>
                        </div>
                      </a>
                      <div class="post-summary">
                        <div class="post-info">
                          <a class="info post-cat" href="#">
                            <i class="bi bi-bookmark icon"></i>TURTL CYBER
                            SECURIY
                          </a>
                          <a class="info post-author" href="#">
                            <i class="bi bi-person icon"></i> Jiya Srivastava
                          </a>
                        </div>
                        <div class="post-text">
                          <a class="post-link" href="blog-turtltech.html">
                            <h2 class="post-title">Cyber Security Awareness</h2>
                          </a>
                          <p class="post-excerpt">
                            With an elevation in utilization of cyber services,
                            there has been noticed a significant increase in
                            cyber threats as well.
                          </p>
                          <a
                            class="read-more"
                            href="blog-turtltech.html"
                            title="How litespeed technology works to speed up your site "
                          >
                            read more<i class="bi bi-arrow-right icon"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-lg-4">
                    <div class="post-box">
                      <a
                        class="post-link"
                        href="blog-turtltech.html"
                        title="give your website a new look and feel with themes"
                      >
                        <div class="post-img-wrapper">
                          <img
                            class="parallax-img post-img"
                            loading="lazy"
                            src={blog2}
                            alt=""
                          />
                          <span class="post-date">
                            <span class="day">15 </span>sep 2022
                          </span>
                        </div>
                      </a>
                      <div class="post-summary">
                        <div class="post-info">
                          <a class="info post-cat" href="#">
                            <i class="bi bi-bookmark icon"></i>web dev
                          </a>
                          <a class="info post-author" href="#">
                            <i class="bi bi-person icon"></i>mhmd amin
                          </a>
                        </div>
                        <div class="post-text">
                          <a class="post-link" href="blog-turtltech.html">
                            <h2 class="post-title">
                              give your website a new look and feel with themes
                            </h2>
                          </a>
                          <p class="post-excerpt">
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit.Iure nulla dolorem, voluptates molestiae
                          </p>
                          <a
                            class="read-more"
                            href="blog-turtltech.html"
                            title="give your website a new look and feel with themes"
                          >
                            read more<i class="bi bi-arrow-right icon"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-lg-4">
                    <div class="post-box">
                      <a
                        class="post-link"
                        href="blog-turtltech.html"
                        title="the role of domain names in SEO world explained "
                      >
                        <div class="post-img-wrapper">
                          <img
                            class="parallax-img post-img"
                            loading="lazy"
                            src={blog3}
                            alt=""
                          />
                          <span class="post-date">
                            <span class="day">27 </span>aug 2022
                          </span>
                        </div>
                      </a>
                      <div class="post-summary">
                        <div class="post-info">
                          <a class="info post-cat" href="#">
                            <i class="bi bi-bookmark icon"></i>SEO
                          </a>
                          <a class="info post-author" href="#">
                            <i class="bi bi-person icon"></i>yusuf amin
                          </a>
                        </div>
                        <div class="post-text">
                          <a class="post-link" href="blog-turtltech.html">
                            <h2 class="post-title">
                              the role of domain names in SEO world explained
                            </h2>
                          </a>
                          <p class="post-excerpt">
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit.Iure nulla dolorem, voluptates molestiae
                          </p>
                          <a
                            class="read-more"
                            href="blog-turtltech.html"
                            title="the role of domain names in SEO world explained "
                          >
                            read more<i class="bi bi-arrow-right icon"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
