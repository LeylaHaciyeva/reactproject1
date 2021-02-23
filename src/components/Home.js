import React from "react";
import investingImage from "../images/investing1.svg";
import aboutImg from "../images/about.svg";
import "./Home.css";
import FeatureCartData from "./FeatureCartData";
import TeamCartData from "./TeamCartData";
import BlogPostData from "./BlogPostData";
import uuid from "react-uuid";
import person1 from "../images/person_1.png";
import person2 from "../images/person_2.png";
import person3 from "../images/person_3.png";

export default function Home() {
  return (
    <div>
      <div className="container mb-5 mt-5">
        <div id="home" className="row home-row mt-2">
          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="home-left">
              <h1>
                Make Your Business<br></br> More Profitable
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam assumenda ea quo cupiditate facere deleniti fuga
                officia.
              </p>
              <button className="started-btn">Get Started</button>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <img
              style={{ width: "100%", height: "500px" }}
              src={investingImage}
              alt=""
            />
          </div>
        </div>
        <div id="features" className="row feature-row mt-2">
          <div className="col-lg-12 mb-5 col-md-12 col-sm-12 col-12">
            <div className="feature-header-text">
              <h1>Imagine Features</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
                <br></br>
                quos quaerat sapiente nam, id vero.
              </p>
            </div>
          </div>
          <FeatureCartData key={uuid()} />
        </div>
      </div>
      <div id="about" className="container-fluid about-container">
        <div className="about-row row pl-2 pr-2 pt-5 pb-5 mt-5">
          <div className="col-lg-12 col-md-12 col-sm-12 col-12 pb-5 pt-5 text-center">
            <h1>About</h1>
          </div>
          <div className="col-lg-7 col-md-6">
            <img className="w-100 h-100" src={aboutImg} alt="" />
          </div>
          <div className="col-lg-5 col-md-6">
            <div className="about-text">
              <h2>Our Mission</h2>
              <p className="about-p">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo, corporis sit placeat nihil, officiis reprehenderit
                veritatis fugit aut saepe accusantium aperiam adipisci, vel unde
                excepturi eius doloremque commodi. Officiis, ab.
              </p>
              <ul className="about-ul">
                <li>
                  <i className="fas fa-check"></i>
                  <p>Laborum enim quasi at modi</p>
                </li>
                <li>
                  <i className="fas fa-check"></i>
                  <p>Ad at tempore</p>
                </li>
                <li>
                  <i className="fas fa-check"></i>
                  <p>Labore quaerat esse</p>
                </li>
              </ul>
              <a className="btn btn-primary">Learn More</a>
            </div>
          </div>
        </div>
        <div className="team-row pt-5 pb-5">
          <div className="col-lg-12 team-header-text text-center">
            <h1>Our Team</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Explicabo dignissimos quo,<br></br> sapiente impedit quibusdam ad
              a sunt nobis eius dolor?
            </p>
          </div>
        </div>
        <div className="row team-cart-row">
          <TeamCartData key={uuid()} />
        </div>
      </div>
      <div className="mt-2" id="testimonial">
        <div
          id="carouselExampleIndicators "
          class="carousel slide mt-5"
          data-ride="carousel"
        >
          <ol class="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              class="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div className="testimonial-text">
                <h1>Testimotional</h1>
                <img className="testimonial-slider-img" src={person1} alt="" />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                  laboriosam temporibus, architecto quidem perferendis optio a
                  iusto ullam odio adipisci id amet quo tenetur ipsa soluta,
                  dignissimos, facere dolorum voluptates.
                </p>
              </div>
            </div>
            <div class="carousel-item">
              <div className="testimonial-text">
                <h1>Testimotional</h1>
                <img className="testimonial-slider-img" src={person2} alt="" />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                  laboriosam temporibus, architecto quidem perferendis optio a
                  iusto ullam odio adipisci id amet quo tenetur ipsa soluta,
                  dignissimos, facere dolorum voluptates.
                </p>
              </div>
            </div>
            <div class="carousel-item">
              <div className="testimonial-text">
                <h1>Testimotional</h1>
                <img className="testimonial-slider-img" src={person3} alt="" />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                  laboriosam temporibus, architecto quidem perferendis optio a
                  iusto ullam odio adipisci id amet quo tenetur ipsa soluta,
                  dignissimos, facere dolorum voluptates.
                </p>
              </div>
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
      <div id="blog" className="container-fluid blog-container mt-2">
        <div className="row mt-5 mb-5">
          <div className="col-lg-12 text-center">
            <h2>Blog Post</h2>
          </div>
        </div>
        <div className="row">
          <BlogPostData />
        </div>
      </div>
      <div id="contact" className="container-fluid back-contact mt-5">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-7 col-md-9 col-sm-9 col-10">
            <h2
              style={{
                "text-align": "center",
                margin: "30px 0",
                color: "white",
              }}
            >
              Contact Form
            </h2>
            <form action="" className="form">
              <div className="row contact-row">
                <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                  <label htmlFor="">First Name</label>
                  <input type="text" />
                </div>
                <div className="col-lg-6  col-md-12 col-sm-12 col-12">
                  <label htmlFor="">Last Name</label>
                  <input type="text" />
                </div>
              </div>
              <div className="row contact-row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                  <label htmlFor="">Email</label>
                  <br></br>
                  <input type="text" />
                </div>
              </div>
              <div className="row contact-row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                  <label htmlFor="">Subject</label>
                  <br></br>
                  <input type="text" />
                </div>
              </div>
              <div className="row contact-row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                  <label htmlFor="">Message</label>
                  <br></br>
                  <textarea
                    rows="8"
                    placeholder="Leave your message here ..."
                  ></textarea>
                </div>
                <div>
                  <button className="btn btn-primary send-btn">
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row text-center">
          <div className="col-lg-12 col-md-12 col-sm-12 col-12 social-col">
            <a href="">
              <i className="fab fa-twitter"></i>{" "}
            </a>
            <a href="">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="">
              <i className="fab fa-youtube"></i>{" "}
            </a>
            <a href="">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="">
              <i className="fab fa-instagram"></i>{" "}
            </a>
          </div>
          <div className="col-lg-12 col-md-12 col-sm-12 col-12 mt-3">
            <div>
              <p>
                Copyright ©2020 All rights reserved | This template is made with
                by Colorlib
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
