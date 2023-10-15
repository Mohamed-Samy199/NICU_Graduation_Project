import React from 'react'
import { Carousel } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import './Home.modules.scss'
import Slider from '../Slider/Slider';
import Bubble from '../Bubble/Bubble';
import Research from '../Research/Research';
import BannerOne from '../BannerOne/BannerOne';
import { useNavigate } from 'react-router-dom';

export default function Home({ t }) {
  let navigate = useNavigate()
  const goToNicu = () => {
    navigate("/nicu")
  }
  const goToAbout = () => {
    navigate("/more")
  }

  return <div className='text-capitalize'>
    {/*<ParticlesBackground />*/}
    <Helmet>
      <meta charSet="utf-8" />
      <title>Home</title>
      <link rel="canonical" href="http://mysite.com/example" />
    </Helmet>

    <section className='home'>
      <Carousel fade>
        <Carousel.Item className='carousel carousel-one position-relative'>

          <Carousel.Caption>
            <h1 className='teal-color fw-bolder'>{t("header1")}</h1>
            <p className='pt-5 fs-4'>{t("p1")}</p>
            <button className='appointment mt-5 py-3 px-4' onClick={() => goToNicu()}>{t("btn4")}</button>
          </Carousel.Caption>
          <div className='overlay-background'></div>
        </Carousel.Item>
        <Carousel.Item className='carousel carousel-two position-relative'>
          <Carousel.Caption>
            <h2 className='teal-color fw-bolder'>{t("header2")}</h2>
            <p className='pt-5 fs-4'>
              {t("p2")}
            </p>
            <button className='appointment mt-5 py-3 px-4' onClick={() => goToNicu()}>{t("btn4")}</button>
          </Carousel.Caption>
          <div className='overlay-background'></div>
        </Carousel.Item>
        <Carousel.Item className='carousel carousel-three position-relative'>
          <Carousel.Caption className='pt-3'>
            <h2 className='teal-color fw-bolder fs-1 mt-3'>{t("header3")}</h2>
            <p className='pt-5 fs-4'>{t("p3")}</p>
            <button className='appointment mt-5 py-3 px-4' onClick={() => goToNicu()}>{t("btn4")}</button>
          </Carousel.Caption>
          <div className='overlay-background'></div>
        </Carousel.Item>
      </Carousel>
    </section>
    {/*<ParticlesBackground/>*/}


    <div className='bar d-flex justify-content-center align-items-center rounded-pill'>
      <marquee className="marquee   fs-2 d-inline" direction="left">
        <h3 className='d-inline-block'><i className="bi bi-check2-circle"></i> 24 hours work </h3>
        <h3 className='d-inline-block'><i className="bi bi-clipboard-data-fill"></i> 100+ patients per day</h3>
        <h3 className='d-inline-block'><i className="bi bi-clock-history"></i> Support rapid 24/7 </h3>
      </marquee>
    </div>

    <div className='py-5 text-center section-two'>
      <h3 className='fw-bolder' style={{ lineHeight: "2" }}>{t("paragraph1")}</h3>
      <h4 className='text-muted pb-3'>{t("h4one")} <br /> {t("h4two")}<br /> {t("h4there")}</h4>
    </div>
    <section className='container-fluid py-5 mb-4 home-container'>
      <header className='text-center d-flex align-items-center justify-content-center flex-column position-relative headers mb-4'>
        <h2 className='text-light'>{t("h1")}</h2>
        <span className='position-relative my-3'></span>
      </header>
      <Slider t={t} />
    </section>

    <section className='nicu-area'>
      <header className='text-center d-flex align-items-center justify-content-center flex-column position-relative headers mb-4'>
        <h2>{t("h4")}</h2>
        <span className='position-relative my-3'></span>
      </header>
      <div className='container'>
        <div className='row'>
          <div className='col-md-4 col-sm-12'>
            <div className='card shadow-lg my-3'>
              <div className='image-hover position-relative'>
                <img src={require('../Assets/api-1.jpg')} alt='nicu' className='card-img-top w-100' />
                <div className='overlay position-absolute d-flex justify-content-start align-items-end'>
                  <h3 className='p-3'>{t("h5")}</h3>
                </div>
              </div>
              <div className='card-body'>
                <h5 className='teal-color'>{t("btn5")} NICU</h5>
                <div>
                  <button className='btn btn-teal' onClick={() => goToAbout()}>{t("btn2")}</button>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-4 col-sm-12'>
            <div className='card shadow-lg my-3'>
              <div className='image-hover position-relative'>
                <img src={require('../Assets/api-2.jpg')} alt='nicu' className='card-img-top w-100' />
                <div className='overlay position-absolute d-flex justify-content-start align-items-end'>
                  <h3 className='p-3'>{t("h5")}</h3>
                </div>
              </div>
              <div className='card-body'>
                <h5 className='teal-color'>{t("btn6")} NICU</h5>
                <div>
                  <button className='btn btn-teal' onClick={() => goToAbout()}>{t("btn2")}</button>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-4 col-sm-12'>
            <div className='card shadow-lg my-3'>
              <div className='image-hover position-relative'>
                <img src={require('../Assets/api-3.jpg')} alt='nicu' className='card-img-top w-100' />
                <div className='overlay position-absolute d-flex justify-content-start align-items-end'>
                  <h3 className='p-3'>{t("h5")}</h3>
                </div>
              </div>
              <div className='card-body'>
                <h5 className='teal-color'>{t("btn7")} NICU</h5>
                <div>
                  <button className='btn btn-teal' onClick={() => goToAbout()}>{t("btn2")}</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="show-head my-5">
      <video src={require('../Assets/banner-1.mp4')} autoPlay loop muted></video>
      <h2 className="titel fw-bolder">BEGINNING OF LIFE</h2>
    </section>

    <section className='specialist'>
      <header className='text-center d-flex align-items-center justify-content-center flex-column position-relative headers mb-4'>
        <h2>{t("h6")}</h2>
        <span className='position-relative my-3'></span>
      </header>
      <div className='container'>
        <div className='row'>
          <div className='col-md-4 col-sm-12 my-2'>
            <div className='card shadow-lg'>
              <div className='image-hover-scale position-relative'>
                <img src={require('../Assets/dr-1.jpg')} alt='nicu' className='card-img-top w-100' />
              </div>
              <div className='card-body text-center'>
                <h4 className='text-light'>Cameron Williamson</h4>
                <h6 className='teal-color'>GENETIC SPECIALIST</h6>
              </div>
            </div>
          </div>
          <div className='col-md-4 col-sm-12 my-2'>
            <div className='card shadow-lg'>
              <div className='image-hover-scale position-relative'>
                <img src={require('../Assets/dr-2.jpg')} alt='nicu' className='card-img-top w-100' />
              </div>
              <div className='card-body text-center'>
                <h4 className='text-light'>Savannah Nguyen</h4>
                <h6 className='teal-color'>ANAESTHETIST SPECIALIST</h6>
              </div>
            </div>
          </div>
          <div className='col-md-4 col-sm-12 my-2'>
            <div className='card shadow-lg'>
              <div className='image-hover-scale position-relative'>
                <img src={require('../Assets/dr-3.jpg')} alt='nicu' className='card-img-top w-100' />
              </div>
              <div className='card-body text-center'>
                <h4 className='text-light'>Darlene Robertson</h4>
                <h6 className='teal-color'>GYNAECOLOGIST SPECIALIST</h6>
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-4 col-sm-12 my-2'>
            <div className='card shadow-lg'>
              <div className='image-hover-scale position-relative'>
                <img src={require('../Assets/dr-4.jpg')} alt='nicu' className='card-img-top w-100' />
              </div>
              <div className='card-body text-center'>
                <h4 className='text-light'>Jhon Methweu</h4>
                <h6 className='teal-color'>RADIOLOGIST SPECIALIST</h6>
              </div>
            </div>
          </div>
          <div className='col-md-4 col-sm-12 my-2'>
            <div className='card shadow-lg'>
              <div className='image-hover-scale position-relative'>
                <img src={require('../Assets/dr-5.jpg')} alt='nicu' className='card-img-top w-100' />
              </div>
              <div className='card-body text-center'>
                <h4 className='text-light'>Savannah Nguyen</h4>
                <h6 className='teal-color'>GENETIC SPECIALIST</h6>
              </div>
            </div>
          </div>
          <div className='col-md-4 col-sm-12 my-2'>
            <div className='card shadow-lg'>
              <div className='image-hover-scale position-relative'>
                <img src={require('../Assets/dr-6.jpg')} alt='nicu' className='card-img-top w-100' />
              </div>
              <div className='card-body text-center'>
                <h4 className='text-light'>Darlene Robertson</h4>
                <h6 className='teal-color'>GENETIC SPECIALIST</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <BannerOne t={t} />
    </section>

    <section>
      {/*    <Test/>*/}
    </section>

    <section>
      <Bubble />
    </section>

    <section className='my-5' >
      <header className='text-center d-flex align-items-center justify-content-center flex-column position-relative headers mb-4'>
        <h2>{t("h7")}</h2>
        <span className='position-relative my-3'></span>
      </header>
      <div style={{ paddingTop: "15rem" }}>
        <Research t2={t} />
      </div>
    </section>

  </div>

}
