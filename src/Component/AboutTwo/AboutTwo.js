import React, { Fragment, useState } from 'react'
import Head from '../Head/Head'
import { Accordion } from 'react-bootstrap'
import './AboutTwo.scss'
import { api, api_two } from '../../data'
import Filter from '../Filter/Filter'
import { NavLink } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import AccordionUs from '../AccordionUs/AccordionUs'

const AboutTwo = ({ t }) => {
  const [data, setDate] = useState(api)
  const [filter, setFilter] = useState("")
  const filterByBtn = (e) => {
    const result = api.filter((el) => {
      console.log(e);
      return el.type === e
    })
    setDate(result)
  }
  const filterName = (name) => {
    setFilter(name)
  }
  const namesHandel = () => {
    if (filter.length !== 0) {
      return data.filter(({ type }) => type.includes(filter))
    }
    return data
  }
  return (
    <div className='about-two'>
      <Helmet>
        <meta charSet="utf-8" />
        <title>About</title>
      </Helmet>

      <Head />
      <header className='text-center my-4 d-flex align-items-center justify-content-center flex-column position-relative headers'>
        <h2>{t("h65")}</h2>
        <span className='position-relative my-3'></span>
      </header>

      <section className='container mb-5'>
        <div className='row gx-md-5'>
          <div className='col-lg-6 col-sm-12 my-3'>
            <div className='image'>
              <img src={require('../Assets/about-1.jpg')} alt="about" className='w-100' />
            </div>
          </div>
          <div className='col-lg-6 col-sm-12 my-3'>
            <h2 className='head-2'>{t("h66")} <span className='h5 fw-light'>{t("h67")}</span></h2>
            <p className='text-muted'>{t("p23")} </p>
            <div>
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>{t("h68")}</Accordion.Header>
                  <Accordion.Body className='h6'>
                    {t("h61")}
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>{t("h69")}</Accordion.Header>
                  <Accordion.Body className='h6'>
                    {t("p28")}
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>{t("h70")}</Accordion.Header>
                  <Accordion.Body className='h6'>
                    {t("h61")}
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      <section className='filter-data mt-4 container'>
        <h3 className='fw-bolder text-center head-2 m-4'>{t("h71")}</h3>
        <div className="buttons mb-4" style={{ display: "flex", alignItems: "center", justifyContent: "center", flexWrap: "wrap" }}>
          <button className="click btn btn-teal m-3" onClick={() => filterByBtn("normal ")}>{t("btn5")}</button>
          <button className="click btn btn-teal m-3" onClick={() => filterByBtn("therapeutic ")}>{t("btn6")}</button>
          <button className="click btn btn-teal m-3" onClick={() => filterByBtn("emergency ")}>{t("btn7")}</button>
          <button className="click btn btn-teal m-3" onClick={() => setDate(api)}>{t("btn8")}</button>
        </div>
        <Filter filterName={filterName} className='py-5' />

        <div className=" d-flex justify-content-center align-items-center flex-wrap mt-4">
          {
            namesHandel().map((e) => {
              return (
                <NavLink to={`/aboutDetails/${e.id}/${e.type}`} className='nav-link'>
                  <Fragment>
                    <img className='p-3' src={e.image} alt="one" width="300px" />
                  </Fragment>
                </NavLink>
              )
            })
          }
        </div>
      </section>

      <section className='parent my-5'>
        <div className="row">
          <div className="col-md-6 ba-image">
          </div>
          <div className="col-md-6 part-two position-relative">
            <div className='vedio p-5 rounded-circle'>
              <a href="https://youtu.be/otN60BSuZrg" target="_blank" rel="noreferrer"><i className="fa-solid fa-circle-play fa-4x teal-color"></i></a>
            </div>
            <h5 className='fw-bolder teal-color'>{t("h72")}</h5>
            <h2 className='h1 fw-bolder'>{t("h73")}</h2>
            <h2 className='h1 fw-bolder'>{t("h74")}</h2>
            <h2 className='h1 fw-bolder'>{t("h75")}</h2>
            <p className='my-lg-5'>{t("p23")}</p>
            <div className='d-flex align-content-between justify-content-between g-4'>
              <div>
                <h5><i className="fa-solid fa-circle-check teal-color"></i> {t("p29")}</h5>
                <h5 className='py-4'><i className="fa-solid fa-circle-check teal-color"></i> {t("p30")}</h5>
                <h5><i className="fa-solid fa-circle-check teal-color"></i> {t("p31")}</h5>
              </div>
              <div>
                <h5><i className="fa-solid fa-circle-check teal-color"></i> {t("p32")}</h5>
                <h5 className='py-4'><i className="fa-solid fa-circle-check teal-color"></i> {t("p33")}</h5>
                <h5><i className="fa-solid fa-circle-check teal-color"></i> {t("p34")}</h5>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='specialist my-5'>
        <header className='text-center d-flex align-items-center justify-content-center flex-column position-relative headers my-5'>
          <h5 className='fw-bolder teal-color'>{t("h76")}</h5>
          <h3 className='h2 fw-bolder'>{t("h77")}</h3>
          <p className='text-muted'>{t("p35")}</p>
          <span className='position-relative my-3'></span>
        </header>
        <div className='container'>
          <div className='row' >
            {
              api_two.map((e) => {
                return (
                  <div className='col-sm-12 col-md-6 col-lg-4 my-2' key={e.id}>
                    <NavLink to={`/aboutDoctors/${e.id}`} className='card shadow-lg nav-link'>
                      <div className='image-hover-scale position-relative'>
                        <img src={e.image} alt='nicu' className='card-img-top w-100' />
                      </div>
                      <div className='card-body text-center'>
                        <h4 className='text-light'>{e.name}</h4>
                        <h6 className='teal-color'>{e.speciale}</h6>
                      </div>
                    </NavLink>
                  </div>
                )
              })
            }
          </div>
        </div>
      </section>

      <header className='text-center my-4 d-flex align-items-center justify-content-center flex-column position-relative headers'>
        <h2>{t("h76")}</h2>
        <span className='position-relative my-3'></span>
      </header>

      <section className="img-accordion">
        <div className='container'>
          <AccordionUs />
        </div>
      </section>

      <section className='container pt-5 mt-3 banner-3'>
        <div className='text-center'>
          <h5 className='fw-bolder teal-color'>{t("h78")}</h5>
          <h3 className='h2 fw-bolder'>{t("h79")}</h3>
          <h3 className='h2 fw-bolder'>{t("h80")}</h3>
        </div>
        <div className="row mt-5">

          <div className="col-sm-12 col-md-6 col-lg-3">
            <div className="boies text-center d-flex  justify-content-center align-items-center flex-column position-relative">
              <h2 className='p-3 position-absolute'>1</h2>
              <div className='rounded-circle d-flex justify-content-center align-items-center'>
                <i class="fa-solid fa-user-doctor teal-color fa-5x"></i>
              </div>
              <h4 className='pt-3'>{t("h81")}</h4>
            </div>
          </div>

          <div className="col-sm-12 col-md-6 col-lg-3">
            <div className="boies text-center d-flex  justify-content-center align-items-center flex-column position-relative">
              <h2 className='p-3 position-absolute'>2</h2>
              <div className='rounded-circle d-flex justify-content-center align-items-center'>
                <i class="fa-solid fa-file-prescription teal-color fa-5x"></i>
              </div>
              <h4 className='pt-3'>{t("h82")}</h4>
            </div>
          </div>

          <div className="col-sm-12 col-md-6 col-lg-3">
            <div className="boies text-center d-flex  justify-content-center align-items-center flex-column position-relative">
              <h2 className='p-3 position-absolute'>3</h2>
              <div className='rounded-circle d-flex justify-content-center align-items-center'>
                <i class="fa-regular fa-calendar-check teal-color fa-5x"></i>
              </div>
              <h4 className='pt-3'>{t("h83")}</h4>
            </div>
          </div>

          <div className="col-sm-12 col-md-6 col-lg-3">
            <div className="boies text-center d-flex  justify-content-center align-items-center flex-column position-relative">
              <h2 className='p-3 position-absolute'>4</h2>
              <div className='rounded-circle d-flex justify-content-center align-items-center'>
                <i class="fa-regular fa-lightbulb teal-color fa-5x"></i>
              </div>
              <h4 className='pt-3'>{t("h84")}</h4>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default AboutTwo
