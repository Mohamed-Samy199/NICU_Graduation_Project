import React, { Fragment } from 'react'

const Value = ({t}) => {
  return (
    <Fragment>
      <div className='col-md-3 col-sm-12 box'>
      <img src={require('../Assets/baby-3.jpeg')} className='w-100' alt='img'/>
      </div>
      <div className='col-md-6 col-sm-12 text-center box pt-3'>
      <h4 className='fw-bolder my-2'>{t("h12")}</h4>
      <p className='text-muted'>{t("p10")}</p>
      </div>
      <div className='col-md-3 col-sm-12 box'>
      <img src={require('../Assets/baby-4.jpeg')} className='w-100' alt='img'/>
      </div>

    </Fragment>
  )
}

export default Value
