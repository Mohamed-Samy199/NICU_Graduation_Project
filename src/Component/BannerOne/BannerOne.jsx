import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const BannerOne = ({ t }) => {
  return (
    <div className='container my-5'>
      <div className='row'>
        <div className='text-center d-flex justify-content-center align-content-center my-4'>
          <NavLink to="" className='btn-teal-outlet'>{t("nav1")}</NavLink>
          <NavLink to="mission" className='btn-teal-outlet'>{t("nav2")}</NavLink>
          <NavLink to="value" className='btn-teal-outlet'>{t("nav3")}</NavLink>
        </div>
        <div>
          <p className='text-center text-muted'>{t("p8")}</p>
        </div>
        <div className='row my-4'>
          <Outlet> </Outlet>
        </div>
      </div>
    </div>
  )
}

export default BannerOne
