import React, { useState } from "react";
import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import ScrollTrigger from "react-scroll-trigger";
import CountUp from "react-countup";
import "./Nicu.scss";
import Head from "../Head/Head";
import { Helmet } from "react-helmet";

const Nicu = ({ item, t }) => {
    const [counterOn, setCounterOn] = useState(false);
    return (
        <div className="nicu-data text-capitalize">
        <Helmet>
      <meta charSet="utf-8" />
      <title>NICU</title>
    </Helmet>
            <Head />
            <header className="text-center my-4 d-flex align-items-center justify-content-center flex-column position-relative headers">
                <h2>{t("h38")}</h2>
                <span className="position-relative my-3"></span>
            </header>
            <section className="banner-4 py-5 px-md-3">
                <ScrollTrigger
                    onEnter={() => setCounterOn(true)}
                    onExit={() => setCounterOn(false)}
                >
                    <div className="container p-5">
                        <div className="row">
                            <div className="col-md-3 col-sm-6 my-2">
                                <div className="item d-flex shadow">
                                    <div className="images me-3">
                                        <img src={require("../Assets/01.png")} alt="nicu" />
                                    </div>
                                    <div className="counter">
                                        <h3 className="fw-bolder">
                                            {" "}
                                            {counterOn && (
                                                <CountUp start={0} end={500} duration={4} delay={0} />
                                            )}{" "}
                                            +
                                        </h3>
                                        <p>{t("p13")}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 my-2">
                                <div className="item d-flex shadow">
                                    <div className="images me-3">
                                        <img src={require("../Assets/02.png")} alt="nicu" />
                                    </div>
                                    <div className="counter">
                                        <h3 className="fw-bolder">
                                            {" "}
                                            {counterOn && (
                                                <CountUp start={0} end={400} duration={4} delay={0} />
                                            )}{" "}
                                            +
                                        </h3>
                                        <p>{t("p14")}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 my-2">
                                <div className="item d-flex shadow">
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
                            <div className="col-md-3 col-sm-6 my-2">
                                <div className="item d-flex shadow">
                                    <div className="images me-3">
                                        <img src={require("../Assets/04.png")} alt="nicu" />
                                    </div>
                                    <div className="counter">
                                        <h3 className="fw-bolder">
                                            {" "}
                                            {counterOn && (
                                                <CountUp start={0} end={350} duration={4} delay={0} />
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
            <section className="container">
                <div className="row px-3 py-5 shadow-lg rounded-2">
                    <div className="col-md-12">
                        {item.map((e) => {
                            return (
                                <Fragment key={e.id}>
                                    <NavLink
                                        to={"/nicu/" + e.id}
                                        className="nicu-card nav-link my-3 px-4 py-5"
                                    >
                                        <div className="row">
                                            <div className="col-md-4">
                                                <div className="images">
                                                    <img
                                                        src={e.images}
                                                        alt="nicu"
                                                        className="w-100 rounded-2"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-4 my">
                                                <div className="items d-flex justify-content-center align-content-start">
                                                    <div className="one-item   p-3">
                                                        <img
                                                            src={require("../Assets/de-icon03.png")}
                                                            alt="nicu"
                                                        />
                                                    </div>
                                                    <div className="one-item  p-3">
                                                        <img
                                                            src={require("../Assets/cunt-icon03.png")}
                                                            alt="nicu"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="items d-flex justify-content-center">
                                                    <div className="one-item   p-3">
                                                        <img
                                                            src={require("../Assets/cunt-icon01.png")}
                                                            alt="nicu"
                                                        />
                                                    </div>
                                                    <div className="one-item p-3">
                                                        <img
                                                            src={require("../Assets/cunt-icon02.png")}
                                                            alt="nicu"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <h3>{e.name}</h3>
                                                <h5 className="pt-3">
                                                    <span>
                                                        <i className="fa-solid fa-location-dot teal-color pe-2"></i>
                                                    </span>
                                                    {e.place}
                                                </h5>
                                                <p className="teaxt-muted">
                                                    <i className="fa-regular fa-clock teal-color pe-2"></i>
                                                    The center is open 24 hours
                                                </p>
                                                <div className="stars mb-3">
                                                    <i className="fa-solid fa-star" />
                                                    <i className="fa-solid fa-star" />
                                                    <i className="fa-solid fa-star" />
                                                    <i className="fa-solid fa-star" />
                                                    <i className="fa-regular fa-star-half-stroke" />
                                                </div>
                                                <button className="btn btn-teal mt-5">Book Now</button>
                                            </div>
                                        </div>
                                    </NavLink>
                                </Fragment>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Nicu;
