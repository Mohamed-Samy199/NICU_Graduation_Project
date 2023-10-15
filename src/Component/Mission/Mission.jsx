import React, { Fragment } from 'react'

const Mission = ({ t }) => {
  return (
    <Fragment>
      <div className='col-md-3 col-sm-12 box'>
        <img src={require('../Assets/baby-1.webp')} className='w-100' alt='img' />
      </div>
      <div className='col-md-6 col-sm-12 text-center box mt-3 text-capitalize'>
        <h4 className='fw-bolder my-2'>{t("h11")}</h4>
        <p className='text-muted'>{t("p9")}</p>
      </div>
      <div className='col-md-3 col-sm-12 box'>
        <img src={require('../Assets/baby-2.jpeg')} className='w-100' alt='img' />
      </div>
    </Fragment>
  )
}

export default Mission
