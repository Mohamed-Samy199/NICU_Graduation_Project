import React, { useState } from "react";
import Head from "../Head/Head";
import MainSlider from "../MainSlider/MainSlider";
import { Card } from "react-bootstrap";
import "./Blog.modules.scss";
import { postCategory } from "../../data";
import Slider from "react-slick";
import Research from "../Research/Research";
import { Widget } from "../widget-2/Widget";
import { Modal, ModalHeader } from "reactstrap";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";

let data = localStorage.getItem("post")
  ? JSON.parse(localStorage.getItem("post"))
  : "add post";
localStorage.setItem("post", JSON.stringify(data));

console.log(data);
console.log(data.name);

const Blog = ({ t }) => {
  const [model, setModel] = useState(false);
  const [post, setPost] = useState({
    name: "",
    post: "",
  });
  const notify = () => toast.success("Post Added Success");
  function handelWrite(e) {
    let myUser = { ...post };
    myUser[e.target.name] = e.target.value;
    setPost(myUser);
    console.log(myUser);
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(post);
    notify("success");
    localStorage.setItem("post", JSON.stringify(post));
  };

  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="blog text-capitalize">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Blog</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Head />
      <header className="text-center my-4 d-flex align-items-center justify-content-center flex-column position-relative headers">
        <h2>{t("h48")}</h2>
        <span className="position-relative my-3"></span>
      </header>

      <section className="slide-blog m-5">
        <MainSlider />
      </section>

      <section className="blog-post">
        <div className="container">
          <div className="row px-5">
            <div className="col-lg-8 col-md-12 col-sm-12 my-2">
              <Card>
                <div className="image-hover position-relative">
                  <Card.Img
                    variant="top"
                    src={require("../Assets/blog-baby-1.jpg")}
                    className="w-100"
                  />
                  <div className="overlay position-absolute d-flex justify-content-start align-items-end">
                    <h3 className="p-3">{t("h49")}</h3>
                  </div>
                </div>
                <Card.Body className="px-4">
                  <Card.Title className="teal-color fs-5">
                    By Admin March 24, 2021
                  </Card.Title>
                  <Card.Text className="fw-bolder fs-5 py-2">
                    {t("h50")}
                  </Card.Text>
                  <p className="text-muted">{t("p23")}</p>

                  <hr />
                  <div className="testaimonal d-flex align-items-center justify-content-between fw-bolder">
                    <div className="read-more">
                      <a href="/">
                        <i class="fa-solid fa-angles-right teal-color pe-2"></i>
                        {t("p24")}
                      </a>
                    </div>
                    <div className="opinion d-flex">
                      <div className="like pe-3">
                        <a href="/">
                          <i className="fa-solid fa-heart teal-color pe-1"></i>
                          <span>8 {t("p25")}</span>
                        </a>
                      </div>
                      <div className="comment">
                        <a href="/">
                          <i className="fa-solid fa-comment-dots teal-color pe-1"></i>
                          5 {t("p26")}
                        </a>
                      </div>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 my-2">
              <div className="search-blog-post rounded-2">
                <div className="ps-3 pt-2">
                  <h3 className="fw-bolder mb-2 fs-2 "> {t("h51")}</h3>
                  <h3 className="fw-bolder fs-2">
                    {t("h52")} <span className="teal-color h3">{t("h52")}</span>
                  </h3>
                  <p className="text-muted my-4"> {t("p27")}</p>
                </div>
                <div className="text-center py-4 search-container">
                  <input
                    type="Search"
                    id="blog-input"
                    className="blog-item fs-5"
                    placeholder="search..."
                  />
                </div>
                <div className="post-category p-3">
                  <header className="text-center my-2 d-flex align-items-center justify-content-center flex-column position-relative headers">
                    <h2 className="fw-bolder post-header">{t("h54")}</h2>
                    <span className="position-relative my-3"></span>
                  </header>

                  <div className="posts">
                    {postCategory.map((itme) => {
                      return (
                        <div
                          key={itme.id}
                          className="d-flex justify-content-between align-items-center my-3"
                        >
                          <div>
                            <i class="fa-solid fa-angles-right teal-color pe-2"></i>{" "}
                            {itme.type}
                          </div>
                          <p className="pt-3">{itme.num}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="bar-progress d-flex justify-content-center align-items-center rounded-pill">
        <marquee className="marquee   fs-2 d-inline" direction="left">
          <h3 className="d-inline-block">
            <i className="bi bi-check2-circle"></i> 24 hours work{" "}
          </h3>
          <h3 className="d-inline-block">
            <i className="bi bi-clipboard-data-fill"></i> 100+ patients per day
          </h3>
          <h3 className="d-inline-block">
            <i className="bi bi-clock-history"></i> Support rapid 24/7{" "}
          </h3>
        </marquee>
      </div>

      <section className="blog-post-info">
        <div className="container">
          <div className="row px-5">
            <div className="col-lg-8 col-md-12 col-sm-12 my-2">
              <Card>
                <div className="image-container">
                  <Slider {...settings}>
                    <img
                      src="https://media.istockphoto.com/id/1027723150/photo/newborn-baby-in-first-of-many-small-hospital-beds.jpg?s=612x612&w=0&k=20&c=vE3VoH83X_yeG8H5i8Esn2kZL5qAyIbHleRkUX2ava0="
                      className="w-100"
                      height={350}
                      alt="nicu"
                    />
                    <img
                      src="https://media.istockphoto.com/id/1257678297/photo/newborn-baby.jpg?s=612x612&w=0&k=20&c=3UEb3dpmyJSWTvBlh6WxFJoiplgE0fzNJDOYDaifLFQ="
                      className="w-100"
                      height={350}
                      alt="nicu"
                    />
                    <img
                      src="https://media.istockphoto.com/id/1309787363/photo/mother-measures-the-temperature-of-the-child-and-holds-it-by-the-handle-childrens-diseases.jpg?s=612x612&w=0&k=20&c=fHiLEKlwsLLTRofZmefxq7QYl3LryWVpsMt9ILHj_QQ="
                      className="w-100"
                      height={350}
                      alt="nicu"
                    />
                    <img
                      src="https://media.istockphoto.com/id/176880351/photo/temperature.jpg?s=612x612&w=0&k=20&c=De6vgAuj0XWaQW1hVdEsPA4CA7hDOifz06TkKQuc1qg="
                      className="w-100"
                      height={350}
                      alt="nicu"
                    />
                  </Slider>
                </div>
                <Card.Body className="px-4">
                  <Card.Title className="teal-color fs-5">
                    By Admin March 24, 2021
                  </Card.Title>
                  <Card.Text className="fw-bolder fs-5 py-2">
                    {t("h50")}
                  </Card.Text>
                  <p className="text-muted">{t("p23")}</p>

                  <hr />
                  <div className="testaimonal d-flex align-items-center justify-content-between fw-bolder">
                    <div className="read-more">
                      <a href="/">
                        <i class="fa-solid fa-angles-right teal-color pe-2"></i>
                        {t("p24")}
                      </a>
                    </div>
                    <div className="opinion d-flex">
                      <div className="like pe-3">
                        <a href="/">
                          <i className="fa-solid fa-heart teal-color pe-1"></i>
                          <span>12 {t("p25")}</span>
                        </a>
                      </div>
                      <div className="comment">
                        <a href="/">
                          <i className="fa-solid fa-comment-dots teal-color pe-1"></i>
                          24 {t("p26")}
                        </a>
                      </div>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 my-2">
              <div className="search-blog-post ps-3 pt-2 rounded-2">
                <h3 className="fw-bolder mb-2 fs-2">{t("h51")}</h3>
                <h3 className="fw-bolder fs-2">
                  {t("h52")} <span className="teal-color h3">{t("h53")}</span>
                </h3>
                <div className="post-category p-3">
                  <header className="text-center my-3 d-flex align-items-center justify-content-center flex-column position-relative headers">
                    <h2 className="fw-bolder post-header h3">{t("h55")}</h2>
                    <span className="position-relative my-2"></span>
                  </header>

                  <div className="posts-nicu d-flex align-items-center justify-content-between p-3">
                    <div>
                      <h5>{t("h56")}</h5>
                      <h5>{t("h57")}</h5>
                      <p className="text-muted">March 24, 2023</p>
                    </div>
                    <div>
                      <img src={require("../Assets/blog-1.jpg")} alt="nicu" />
                    </div>
                  </div>

                  <div className="posts-nicu d-flex align-items-center justify-content-between p-3">
                    <div>
                      <h5>{t("h58")}</h5>
                      <h5>{t("h59")}</h5>
                      <p className="text-muted">January 16, 2023</p>
                    </div>
                    <div>
                      <img src={require("../Assets/blog-2.jpg")} alt="nicu" />
                    </div>
                  </div>

                  <div className="posts-nicu d-flex align-items-center justify-content-between p-3">
                    <div>
                      <h5>{t("h56")}</h5>
                      <h5>{t("h60")}</h5>
                      <p className="text-muted">February 6, 2023</p>
                    </div>
                    <div>
                      <img src={require("../Assets/blog-3.jpg")} alt="nicu" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blog-post-info my-5">
        <div className="container">
          <div className="row px-5">
            <div className="col-md-8 col-sm-12">
              <Card>
                <Card.Body className="px-4">
                  <Card.Title className="teal-color fs-5">
                    By Admin March 24, 2021
                  </Card.Title>
                  <Card.Text className="fw-bolder fs-5 py-2">
                    {t("h61")}
                  </Card.Text>
                  <p className="text-muted">{t("p28")}</p>

                  <hr />
                  <div className="testaimonal d-flex align-items-center justify-content-between fw-bolder">
                    <div className="read-more">
                      <a href="/">
                        <i class="fa-solid fa-angles-right teal-color pe-2"></i>
                        {t("p24")}
                      </a>
                    </div>
                    <div className="opinion d-flex">
                      <div className="like pe-3">
                        <a href="/">
                          <i className="fa-solid fa-heart teal-color pe-1"></i>
                          <span>12 {t("p25")}</span>
                        </a>
                      </div>
                      <div className="comment">
                        <a href="/">
                          <i className="fa-solid fa-comment-dots teal-color pe-1"></i>
                          24 {t("p26")}
                        </a>
                      </div>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-4 col-sm-12"></div>
          </div>
        </div>
      </section>

      <section className="blog-text my-5">
        <div className="container">
          <div className="row px-5">
            <div className="col-md-8 col-sm-12">
              <Card>
                <Card.Body className="px-4">
                  <Card.Title className="teal-color fs-5">
                    By Admin March 24, 2021
                  </Card.Title>
                  <div className="d-flex justify-content-between align-items-center g-3">
                    <i class="fa-solid fa-quote-left fa-5x"></i>
                    <h2 className="fw-bolder fs-4 py-2 ms-4">{t("h62")}</h2>
                  </div>
                  <hr />
                  <div className="testaimonal d-flex align-items-center justify-content-between fw-bolder">
                    <div className="read-more">
                      <a href="/">
                        <i class="fa-solid fa-angles-right teal-color pe-2"></i>
                        {t("p24")}
                      </a>
                    </div>
                    <div className="opinion d-flex">
                      <div className="like pe-3">
                        <a href="/">
                          <i className="fa-solid fa-heart teal-color pe-1"></i>
                          <span>14 {t("p25")}</span>
                        </a>
                      </div>
                      <div className="comment">
                        <a href="/">
                          <i className="fa-solid fa-comment-dots teal-color pe-1"></i>
                          20 {t("p26")}
                        </a>
                      </div>
                    </div>
                  </div>
                </Card.Body>
              </Card>
              <div className="my-5 widgets">
                <Widget />
              </div>
            </div>
            <div className="col-md-4 col-sm-12"></div>
          </div>
        </div>
      </section>

      <section className="popup-post">
        <Modal size="lg" isOpen={model} toggle={() => setModel(!model)}>
          <ModalHeader toggle={() => setModel(!model)}>
            <form onSubmit={handleSubmit}>
              <label htmlFor="name" className="color-blue fw-bolder mb-2">
                {t("l1")}
              </label>
              <input
                onChange={handelWrite}
                type="username"
                className="form-control my-input my-2"
                name="name"
                id="name"
                placeholder="Name"
              />
              <label htmlFor="post" className="color-blue fw-bolder my-2">
                {t("h63")}
              </label>
              <textarea
                name="post"
                placeholder="post..."
                rows={6}
                onChange={handelWrite}
                className="form-control"
              />
              <button className="btn btn-teal mt-4">{t("h64")}</button>
            </form>
          </ModalHeader>
        </Modal>
      </section>

      <section className="add-post">
        <div className="container">
          <div className="m-5">
            <h3 className="places">{t("h63")}</h3>
            <i
              className="fa-solid fa-pen-to-square fa-4x bg-blue p-4 mt-3"
              onClick={() => setModel(true)}
            ></i>
          </div>
        </div>
      </section>

      {/*templet post*/}
      <section className="blog-text my-4">
        <div className="container">
          <div className="row px-5">
            <div className="col-md-8 col-sm-12">
              <Card>
                <Card.Body className="px-4">
                  <Card.Title className="teal-color fs-5">
                    {data.name} March 24, 2021
                  </Card.Title>
                  <div className="d-flex justify-content-between align-items-center g-3">
                    <i className="fa-solid fa-quote-left fa-5x"></i>
                    <h2 className="fw-bolder fs-4 py-2 ms-4 post-heat">
                      {data.post}
                    </h2>
                  </div>
                  <hr />
                  <div className="testaimonal d-flex align-items-center justify-content-between fw-bolder">
                    <div className="read-more">
                      <a href="/">
                        <i class="fa-solid fa-angles-right teal-color pe-2"></i>
                        {t("p24")}
                      </a>
                    </div>
                    <div className="opinion d-flex">
                      <div className="like pe-3">
                        <a href="/">
                          <i className="fa-solid fa-heart teal-color pe-1"></i>
                          <span>{t("p25")}</span>
                        </a>
                      </div>
                      <div className="comment">
                        <a href="/">
                          <i className="fa-solid fa-comment-dots teal-color pe-1"></i>
                          {t("p26")}
                        </a>
                      </div>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-4 col-sm-12"></div>
          </div>
        </div>
      </section>

      <section style={{ paddingTop: "15rem" }}>
        <Research />
      </section>
    </div>
  );
};

export default Blog;
