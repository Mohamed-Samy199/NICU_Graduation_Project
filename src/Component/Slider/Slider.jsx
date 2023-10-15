import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay  } from "swiper";
import slideOne from '../Assets/slide-1.webp';
import slideTwo from '../Assets/slide-2.webp';
import slideThere from '../Assets/slide-3.webp';
import slideFour from '../Assets/slide-4.webp';


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import 'swiper/css';
import './Slider.modules.scss'

// import required modules
import { Pagination, Navigation } from "swiper";
const Slider = ({ t }) => {
  console.log(t);

  return (
    <div className="container">
    <div className='row'>
        <div className='col-md-3 col-sm-12'>
          <h5 className='teal-color mb-4'>{t("h2")}</h5>
          <h3 className='fw-bold fs-2' style={{ lineHeight: "1.1" }}>{t("h3")}</h3>
          <p className='text-muted mt-4'>{t("p4")}</p>
          <button className='btn btn-teal my-4'>{t("btn1")}</button>
        </div>
        <div className='col-md-9 col-sm-12'>
        <Swiper
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          type: "fraction",
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay ,Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="image">
            <img src={slideOne} className='w-100 ' alt="nicu" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="image">
          <img src={slideTwo} className='w-100' alt="nicu" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="image">
          <img src={slideThere} className='w-100' alt="nicu" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="image">
          <img src={slideFour} className='w-100' alt="nicu" />
          </div>
        </SwiperSlide>
      </Swiper>
        </div>
      </div>
    
    </div>
      
    
  )
}

export default Slider
