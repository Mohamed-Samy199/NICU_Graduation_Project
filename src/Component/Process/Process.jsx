import React, { Fragment } from 'react';

const Process = ({t}) => {
  return(
    <Fragment className='text-capitalize'>
    
    <div className='col-sm-12 col-md-4 my-4'>
      <div className='box text-center'>
        <i className="fa-solid fa-prescription fa-5x teal-color"></i>
        <h5 className='fw-bolder my-2'>{t("h8")}</h5>
        <p className='text-muted'>{t("p5")}</p>
      </div>

    </div>
    <div className='col-sm-12 col-md-4 my-4'>
      <div className='box text-center'>
        <i className="fa-solid fa-vial-circle-check fa-5x teal-color"></i>
        <h5 className='fw-bolder my-2'>{t("h9")}</h5>
        <p className='text-muted'>{t("p6")}</p>
      </div>

    </div>
    <div className='col-sm-12 col-md-4 my-4'>
      <div className='box text-center'>
        <i className="fa-solid fa-stethoscope fa-5x teal-color"></i>
        <h5 className='fw-bolder my-2'>{t("h10")}</h5>
        <p className='text-muted'>{t("p7")}</p>
      </div>

    </div>
    </Fragment>
  )
}

export default Process
