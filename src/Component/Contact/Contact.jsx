import React from "react";
import Head from "../Head/Head";
import TypeWriterEffect from "react-typewriter-effect";
import "./Contact.modules.scss";
import Map from "../Map/Map";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";

const Contact = ({ t }) => {
  const notify = () => toast.success("Message Send by Successful");
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_7motzm8",
        "template_46qmgxn",
        e.target,
        "bDRYPD3HczumeFiZZ"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
    notify("success");
  }
  let navigate = useNavigate()
  const goToNicu = () => {
    navigate("/nicu")
  }

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Contact</title>
      </Helmet>
      <Head />
      <header className="text-center d-flex align-items-center justify-content-center flex-column position-relative headers my-4">
        <h2>{t("h40")}</h2>
        <span className="position-relative my-3"></span>
      </header>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6 pt-4">
              <h6 className="teal-color">{t("h27")}</h6>
              <h3 className="fw-bolder h2 places">{t("h28")}</h3>
              <h3 className="fw-bolder h2 places">{t("h29")}</h3>
              <p className="text-muted my-4">{t("p17")} </p>
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
                    <h3 className="places">{t("h30")}</h3>
                    <h5 className="teal-color">{t("h31")}</h5>
                  </div>
                </div>
              </div>
              <button className="btn btn-teal my-5" onClick={() => goToNicu()}>{t("btn3")}</button>
            </div>
            <div className="col-md-6 col-sm-12">
              <h3 className="fw-bolder d-flex justify-content-center align-content-between ">
                <span className="teal-color h1 me-2">NICU</span>
                <TypeWriterEffect
                  textStyle={{
                    fontFamily: "Red Hat Display",
                    color: "#8c89a0",
                  }}
                  startDelay={2000}
                  cursorColor="#8c89a0"
                  multiText={[
                    "Medical technology",
                    "Experienced doctors",
                    "High care children",
                    "Places for escorts",
                  ]}
                  multiTextDelay={1000}
                  typeSpeed={30}
                  multiTextLoop
                />
              </h3>
              <div className="contact-place">
                <img
                  src={require("../Assets/Medical-GIF.gif")}
                  className="w-100"
                  alt="nicu"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="show-head"
        style={{ marginTop: "5rem", marginBottom: "5rem" }}
      >
        <video
          src={require("../Assets/banner-1.mp4")}
          autoPlay
          loop
          muted
        ></video>
        <h2 className="titel fw-bolder contact">CONTACT POINT START</h2>
      </section>

      <header className="text-center d-flex align-items-center justify-content-center flex-column position-relative headers my-4">
        <h2>{t("h41")}</h2>
        <span className="position-relative my-3"></span>
      </header>

      <section className="form-contact">
        <div className="container">
          <div className="row">
            <div className="col-md-7 col-sm-12 my-2">
              <h2>{t("h40")}</h2>
              <h2>{t("h42")}.</h2>
              <div className="parag-contact my-5">
                <p className="text-muted">{t("p21")}.</p>
                <p className="text-muted">{t("p22")}.</p>
              </div>
              <div>
                <form className="form-contact-data" onSubmit={sendEmail}>
                  <div>
                    <div className="mb-4">
                      <label
                        htmlFor="exampleFormControlInput1"
                        className="form-label"
                      >
                        {t("l1")}{" "}
                        <span className="teal-color fw-bolder">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="jon deo"
                        name="user_name"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="exampleFormControlInput2"
                        className="form-label"
                      >
                        {t("l2")}{" "}
                        <span className="teal-color fw-bolder">*</span>
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="exampleFormControlInput2"
                        placeholder="info@gmail.com"
                        name="user_email"
                      />
                    </div>
                    <div className="mb-5">
                      <label
                        htmlFor="exampleFormControlTextarea1"
                        className="form-label"
                      >
                        {t("l3")}{" "}
                        <span className="teal-color fw-bolder">*</span>
                      </label>
                      <textarea
                        name="message"
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        placeholder="opinion..."
                        rows={6}
                        defaultValue={""}
                      />
                    </div>
                    <div className="col-auto">
                      <input
                        type="submit"
                        value="Send"
                        className="btn btn-teal"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-5 col-sm-12">
              <div className="contact-details p-3">
                <div className="map-image">
                  <img
                    src={require("../Assets/contact_info_map.png")}
                    className="w-100"
                    alt="nicu"
                  />
                </div>
                <div className="address-contact py-3 px-4">
                  <h3 className="pb-2">{t("h43")}</h3>
                  <div className="icon-contact d-flex">
                    <i className="fa-solid fa-location-dot fs-2 mt-3 me-4"></i>
                    <div className="data-contact">
                      <h4>{t("h44")}</h4>
                      <p className="text-muted">
                        2130 Fulton Street San Diego CA 94117-1080 USA
                      </p>
                    </div>
                  </div>
                  <div className="icon-contact d-flex my-2">
                    <i class="fa-solid fa-phone-volume fs-2 mt-3 me-4"></i>
                    <div className="data-contact">
                      <h4>{t("h45")}</h4>
                      <p className="text-muted">012 8843 9737</p>
                    </div>
                  </div>
                  <div className="icon-contact d-flex">
                    <i class="fa-solid fa-envelope fs-2 mt-3 me-4"></i>
                    <div className="data-contact">
                      <h4>{t("h46")}</h4>
                      <p className="text-muted">info@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <header className="text-center d-flex align-items-center justify-content-center flex-column position-relative headers mt-5">
        <h2>{t("h47")}</h2>
        <span className="position-relative my-3"></span>
      </header>

      <section className="map">
        <Map />
      </section>
    </div>
  );
};

export default Contact;
