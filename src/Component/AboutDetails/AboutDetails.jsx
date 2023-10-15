import React from 'react'
import { api } from '../../data'
import { useNavigate, useParams } from 'react-router-dom'
import './AboutDetails.scss'
import { Fragment } from 'react'
import { Helmet } from 'react-helmet'

const AboutDetails = () => {
  let param = useParams()
  const fetchData = api.filter((e) => e.id === +param.id)
  let navigate = useNavigate()
  const goToAbout = () => {
    navigate('/more')
  }
  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>About Details</title>
      </Helmet>
      <div className='pt-6 container about-details px-5'>
        <h2 className='fw-bolder text-center head-2 m-4 text-capitalize'>{fetchData[0].type} Nicu</h2>
        <div className='row'>
          <div className='col-sm-12 col-lg-6'>
            <img className='show w-100' src={fetchData[0].image} alt="nicu" />
          </div>
          <div className='col-sm-12 col-lg-6 right-sleep '>
            <img className='sleep' src={require('../Assets/about-1.png')} alt="nicu" />
          </div>
        </div>
        <p className='text-muted pt-4'>{fetchData[0].paragraph}</p>

        <button className='btn btn-teal' onClick={goToAbout}>back</button>
      </div>
    </Fragment>
  )
}

export default AboutDetails
