import { Fragment, useState } from "react";
import './Widget.modules.scss';

const buttonWidth = 235;
const tabWidth = 738;
const tabHeaders = ["process", "mission", "values"];

export const Widget = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="widget-home">
      <header>
        {tabHeaders.map((tab, index) => (
          <button
            onClick={() => setActiveIndex(index)}
            key={tab}
            className={`material-symbols-outlined  ${activeIndex === index ? "active" : ""
              }`}
          >
            {tab}
          </button>
        ))}
        <div
          className="underline-home"
          style={{
            translate: `${activeIndex ? activeIndex * buttonWidth : 0}px 0`,
          }}
        ></div>
      </header>
      <div className="content-toggle">
        <div
          className="content-inner-toggle"
          style={{
            translate: `-${activeIndex ? activeIndex * tabWidth : 0}px 0`,
          }}
        >
          <div className="d-flex justify-content-between align-items-center">
            <div className='col-sm-12 col-md-4 my-4'>
              <div className='box text-center'>
                <i className="fa-solid fa-prescription fa-3x teal-color"></i>
                <h5 className='my-2 color-blue'>Prescription</h5>
                <p className='text-muted'>Follow the doctor's instructions</p>
              </div>

            </div>

            <div className='col-sm-12 col-md-4 my-4'>
              <div className='box text-center'>
                <i className="fa-solid fa-vial-circle-check fa-3x teal-color"></i>
                <h5 className='fw-bolder my-2 color-blue'>Analytics</h5>
                <p className='text-muted'>Guaranteed analysis laboratories</p>
              </div>

            </div>

            <div className='col-sm-12 col-md-4 my-4'>
              <div className='box text-center'>
                <i className="fa-solid fa-stethoscope fa-3x teal-color"></i>
                <h5 className='fw-bolder my-2 color-blue'>Medical</h5>
                <p className='text-muted'>Safety check on all body lights</p>
              </div>

            </div>
          </div>
          <div className="d-flex align-items-center justify-content-between">
            <Fragment>
              <div className='col-md-3 col-sm-12 box'>
                <img src={require('../Assets/baby-1.webp')} className='w-100' alt='img' />
              </div>
              <div className='col-md-6 col-sm-12 text-center box'>
                <h4 className='fw-bolder my-2 color-blue'>Our Mission is Give You Always Best Results.</h4>
                <p className='text-muted pt-2'>Exerci tation ullamcorper suscipit lobortis nisl aliquip ex ea commodo claritatem insitamconse quat.</p>
              </div>
              <div className='col-md-3 col-sm-12 box'>
                <img src={require('../Assets/baby-2.jpeg')} className='w-100' alt='img' />
              </div>

            </Fragment>
          </div>
          <div className="d-flex align-items-center justify-content-between">
            <Fragment>
              <div className='col-md-3 col-sm-12 box'>
                <img src={require('../Assets/baby-3.jpeg')} className='w-100' alt='img' />
              </div>
              <div className='col-md-6 col-sm-12 text-center box pt-3'>
                <h4 className='fw-bolder my-2 color-blue'>We are Trusted by over 25000+ of customers.</h4>
                <p className='text-muted'>Exerci tation ullamcorper suscipit lobortis nisl aliquip ex ea commodo claritatem insitamconse quat.</p>
              </div>
              <div className='col-md-3 col-sm-12 box'>
                <img src={require('../Assets/baby-4.jpeg')} className='w-100' alt='img' />
              </div>

            </Fragment>
          </div>
        </div>
      </div>
    </section>
  );
};
