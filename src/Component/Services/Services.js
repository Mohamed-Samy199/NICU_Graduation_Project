import React from "react";
import { Fragment, useState } from "react";
import Head from "../Head/Head";
import { allImages, slide_image } from "../../data";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import "./Services.scss";
import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";
import { Accordion } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import Accordions from "../Accordion/Accordion";

const Services = ({ t }) => {
  const [selectImage, setSelectImage] = useState(allImages[0].image);
  const [counterOn, setCounterOn] = useState(false);
  const [data, setData] = useState({ img: "", i: 0 });

  const viewImage = (img, i) => {
    console.log(img, i);
    setData({ img, i });
  };
  const imgAction = (action) => {
    let i = data.i;
    if (action === "next-img") {
      setData({ img: slide_image[i + 1], i: i + 1 });
    }
    if (action === "previos-img") {
      setData({ img: slide_image[i - 1], i: i - 1 });
    }
    if (!action) {
      setData({ img: "", i: 0 });
    }
  };
  let navigate = useNavigate()
  const goToNicu = () => {
    navigate("/nicu")
  }
  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Service</title>
      </Helmet>
      <Head />
      <header className="text-center my-4 d-flex align-items-center justify-content-center flex-column position-relative headers pt-5">
        <h2>{t("h13")}</h2>
        <span className="position-relative my-3"></span>
      </header>

      <section className="services">
        <div className="container">
          <div className="header text-center my-3">
            <h4>{t("h14")}</h4>
            <h2 className="fw-bolder my-3">{t("h15")}</h2>
          </div>
          <div className="row my-5 pt-3">
            <div className="col-lg-3 col-md-6 col-sm-12 my-3">
              <div className="item p-3">
                <div className="images pb-5">
                  <img src={require("../Assets/1-service.png")} alt="nicu" />
                </div>
                <div className="details">
                  <h5>{t("h16")}</h5>
                  <p className="text-muted py-2">{t("t2")}</p>
                  <a href="/">Read More</a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 my-3">
              <div className="item p-3">
                <div className="images pb-5">
                  <img src={require("../Assets/2-service.png")} alt="nicu" />
                </div>
                <div className="details">
                  <h5>{t("h17")}</h5>
                  <p className="text-muted py-2">{t("t2")}</p>
                  <a href="/">{t("p11")}</a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 my-3">
              <div className="item p-3">
                <div className="images pb-5">
                  <img src={require("../Assets/3-service.png")} alt="nicu" />
                </div>
                <div className="details">
                  <h5>{t("h18")}</h5>
                  <p className="text-muted py-2">{t("t2")}</p>
                  <a href="/">{t("p11")}</a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 my-3">
              <div className="item p-3">
                <div className="images pb-5">
                  <img src={require("../Assets/4-service.png")} alt="nicu" />
                </div>
                <div className="details">
                  <h5>{t("h19")}</h5>
                  <p className="text-muted py-2">{t("t2")}</p>
                  <a href="/">{t("p11")}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="specialies pt-5 text-capitalize">
        <div className="container">
          <div className="header text-center my-5 text-capitalize">
            <h5 className="teal-color">{t("h20")}</h5>
            <h4 className="">{t("h21")}</h4>
            <h2 className="fw-bolder my-3">{t("h22")}</h2>
          </div>
          <div className="select-images w-100 my-2 mx-auto py-3 d-flex justify-content-center align-items-center">
            <div style={{ width: "130px", height: "130px"  }} className="d-flex justify-content-center align-items-center">
                {allImages.map((e) => <img className="w-100 m-3" src={e.image} alt="nicu" key={e.id}
                  style={{objectFit : "cover" , cursor: "pointer", border: selectImage === e.image ? ".2px solid #24baef" : "" }}
                  onClick={() => setSelectImage(e.image)} />)
            }
            </div>
          </div>

          <div className="row my-4">
            <div className="col-md-6">
              <h3 className="text-capitalize my-3">{t("h23")}</h3>
              <p className="text-muted my-4">{t("p12")}</p>
              <div className="d-flex align-content-between justify-content-between g-4">
                <div className="points">
                  <h5>
                    <i className="fa-solid fa-circle-check teal-color"></i>{" "}
                    {t("i1")}
                  </h5>
                  <h5 className="py-4">
                    <i className="fa-solid fa-circle-check teal-color"></i>{" "}
                    {t("i2")}
                  </h5>
                  <h5>
                    <i className="fa-solid fa-circle-check teal-color"></i>{" "}
                    {t("i3")}
                  </h5>
                </div>
                <div>
                  <div className="points">
                    <h5>
                      <i className="fa-solid fa-circle-check teal-color"></i>{" "}
                      {t("i4")}
                    </h5>
                    <h5 className="py-4">
                      <i className="fa-solid fa-circle-check teal-color"></i>{" "}
                      {t("i5")}
                    </h5>
                    <h5>
                      <i className="fa-solid fa-circle-check teal-color"></i>{" "}
                      {t("i6")}
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="images d-flex justify-content-center align-items-center p-4">
                <img
                  src={selectImage}
                  style={{
                    border: "2px solid #24baef",
                  }}
                  alt="nicu"
                  className="w-50 p-4"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="banner-4 py-5 px-md-3">
        <ScrollTrigger
          onEnter={() => setCounterOn(true)}
          onExit={() => setCounterOn(false)}
        >
          <div className="container p-5">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-12 my-2">
                <div className="item d-flex">
                  <div className="images me-3">
                    <img src={require("../Assets/01.png")} alt="nicu" />
                  </div>
                  <div className="counter">
                    <h3 className="fw-bolder">
                      {" "}
                      {counterOn && (
                        <CountUp start={0} end={500} duration={5} delay={0} />
                      )}{" "}
                      +
                    </h3>
                    <p>{t("p13")}</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 my-2">
                <div className="item d-flex">
                  <div className="images me-3">
                    <img src={require("../Assets/02.png")} alt="nicu" />
                  </div>
                  <div className="counter">
                    <h3 className="fw-bolder">
                      {" "}
                      {counterOn && (
                        <CountUp start={0} end={400} duration={5} delay={0} />
                      )}{" "}
                      +
                    </h3>
                    <p>{t("p14")}</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 my-2">
                <div className="item d-flex">
                  <div className="images me-3">
                    <img src={require("../Assets/03.png")} alt="nicu" />
                  </div>
                  <div className="counter">
                    <h3 className="fw-bolder">
                      {" "}
                      {counterOn && (
                        <CountUp start={0} end={12} duration={5} delay={0} />
                      )}{" "}
                      +
                    </h3>
                    <p>{t("p15")}</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 my-2">
                <div className="item d-flex">
                  <div className="images me-3">
                    <img src={require("../Assets/04.png")} alt="nicu" />
                  </div>
                  <div className="counter">
                    <h3 className="fw-bolder">
                      {" "}
                      {counterOn && (
                        <CountUp start={0} end={350} duration={5} delay={0} />
                      )}{" "}
                      +
                    </h3>
                    <p>{t("p16")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollTrigger>
      </section>

      <section className="gallery position-relative">
        <div className="header text-center my-3 text-capitalize py-3">
          <h5 className="teal-color">
            {t("h24")} <i className="bi bi-clock-history p-1"></i>
          </h5>
          <h4>{t("h25")}</h4>
          <h2 className="fw-bolder">{t("h26")}</h2>
          <header className="text-center my-4 d-flex align-items-center justify-content-center flex-column position-relative headers">
            <span className="position-relative"></span>
          </header>
        </div>
        {data.img && (
          <div
            style={{
              width: "100%",
              height: "100vh",
              zIndex: "100000000",
              position: "absolute",
              background: "rgba(0 , 0, 0 , .9)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              overflow: "hidden",
            }}
          >
            <button
              className="p-2 rounded-2"
              onClick={() => imgAction()}
              style={{ position: "absolute", top: "10px", right: "10px" }}
            >
              <i class="fa-solid fa-xmark"></i>
            </button>
            <button onClick={() => imgAction("previos-img")}>
              <img src={require("../Assets/shape-1.jpg")} alt="nicu" />
            </button>
            <img
              src={data.img}
              alt="nicu"
              style={{ width: "auto", maxWidth: "90%", maxHeight: "90%" }}
            />
            <button onClick={() => imgAction("next-img")}>
              <img src={require("../Assets/shape-2.png")} alt="nicu" />
            </button>
          </div>
        )}
        <div className="container">
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
          >
            <Masonry gutter="15px">
              {slide_image.map((e, i) => (
                <img
                  onClick={() => viewImage(e, i)}
                  src={e}
                  key={i}
                  alt="nicu"
                  className="w-100"
                  style={{ display: "block", cursor: "pointer" }}
                />
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </div>
      </section>

      <section className="center-place container py-5">
        <div className="row">
          <div className="col-md-6 col-sm-12 pt-4">
            <h6 className="teal-color">{t("h27")}</h6>
            <h3 className="fw-bolder h2">{t("h28")}</h3>
            <h3 className="fw-bolder h2">{t("h29")}</h3>
            <p className="text-muted my-4">{t("p17")}</p>
            <div className="d-flex justify-content-between align-items-center">
              <img src={require("../Assets/signature-img.png")} alt="nicu" />
              <div
                className="d-flex justify-content-center align-items-center"
                style={{ flexGrow: "1" }}
              >
                <div className="image-dr" style={{ width: "70px" }}>
                  <img
                    src={require("../Assets/team02.png")}
                    alt="nicu"
                    className="img-fluid rounded-circle"
                  />
                </div>
                <div className="signture p-2">
                  <h3>{t("h30")}</h3>
                  <h5 className="teal-color">{t("h31")}</h5>
                </div>
              </div>
            </div>
            <button className="btn btn-teal my-5" onClick={() => goToNicu()}>{t("btn3")}</button>
          </div>
          <div className="col-md-6 col-sm-12 position-relative my-4">
            <Canvas>
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={1} />
              <directionalLight position={[3, 2, 1]} />
              <Sphere args={[1, 100, 200]} scale={2.4}>
                <MeshDistortMaterial
                  color="#025043"
                  attach="material"
                  distort={0.5}
                  speed={2}
                />
              </Sphere>
            </Canvas>
            <div className="bg-image position-absolute top-0 d-flex justify-content-center align-items-center">
              <img
                src={require("../Assets/sleep.png")}
                alt="nicu"
                className="w-75"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="img-accordion">
        <div className='container'>
          <Accordions />
        </div>
      </section>

      <section className="helps text-capitalize">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-3 text-center my-2">
              <div className="item py-4">
                <div className="image-help">
                  <img
                    src="https://templates.envytheme.com/bexi/default/assets/images/icon/icon-12.svg"
                    alt="nicu"
                    className=" p-5 rounded-circle"
                  />
                </div>
                <h3 className="my-4">{t("h32")}</h3>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3 text-center my-2">
              <div className="item py-4">
                <div className="image-help">
                  <img
                    src="https://templates.envytheme.com/bexi/default/assets/images/icon/icon-13.svg"
                    alt="nicu"
                    className=" p-5 rounded-circle"
                  />
                </div>
                <h3 className="my-4">{t("h33")}</h3>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3 text-center my-2">
              <div className="item py-4">
                <div className="image-help">
                  <img
                    src="https://templates.envytheme.com/bexi/default/assets/images/icon/icon-14.svg"
                    alt="nicu"
                    className=" p-5 rounded-circle"
                  />
                </div>
                <h3 className="my-4">{t("h34")}</h3>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3 text-center my-2">
              <div className="item py-4">
                <div className="image-help">
                  <img
                    src="https://templates.envytheme.com/bexi/default/assets/images/icon/icon-15.svg"
                    alt="nicu"
                    className=" p-5 rounded-circle"
                  />
                </div>
                <h3 className="my-4">{t("h35")}</h3>
              </div>
            </div>
          </div>
          <div className="row Find-doctor mt-5">
            <div className="col-sm-12 col-lg-8">
              <h2 className="py-2">{t("h36")}</h2>
              <header className=" position-relative headers ">
                <span className="position-relative my-3"></span>
              </header>
              <Accordion className="mt-5">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>{t("f1")}</Accordion.Header>
                  <Accordion.Body>{t("t1")}</Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>{t("f2")}</Accordion.Header>
                  <Accordion.Body>{t("t1")}</Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>{t("f4")}</Accordion.Header>
                  <Accordion.Body>{t("t1")}</Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>{t("f3")}</Accordion.Header>
                  <Accordion.Body>{t("t1")}</Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header>{t("f5")}</Accordion.Header>
                  <Accordion.Body>{t("t1")}</Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                  <Accordion.Header>{t("f6")}</Accordion.Header>
                  <Accordion.Body>{t("t1")}</Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="6">
                  <Accordion.Header>{t("f7")}</Accordion.Header>
                  <Accordion.Body>{t("t1")}</Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
            <div className="col-sm-12 col-md-4 p-4 ps-5">
              <div className="top mb-3">
                <div className="logos d-flex align-items-center ">
                  <img
                    src={require("../Assets/logo.png")}
                    alt="nicu"
                    style={{ width: "100px" }}
                  />
                  <h3 className="h1 align-self-end ps-4 pt-2">Nicu</h3>
                </div>
                <h5>{t("h37")}</h5>
              </div>
              <div className="center mb-5">
                <p className="fs-3 hour">{t("p18")}</p>
                <p className="teal-color fs-3">1-885-665-2022</p>
                <p className="teal-color">
                  {t("p19")} <span> Woodmont LN. MK #2255</span>
                </p>
                <p className="teal-color">
                  {t("p20")} <span>info@bexi.com</span>
                </p>
              </div>
              <div className="later">
                <img src={require("../Assets/ambulance.png")} alt="nicu" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Services;
