import React from 'react'
import Slider from "react-slick";
import { slideBlog } from '../../data'

const MainSlider = () => {
    var settings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };
    return (
        <div className='m-5'>
            <Slider {...settings}>
                {
                    slideBlog.map((item) => {
                        return <div key={item.id}>
                            <img src={item.image} className='w-100 p-2' height={200} alt='nicu' />
                        </div>
                    })
                }
            </Slider>
        </div>
    )
}

export default MainSlider
