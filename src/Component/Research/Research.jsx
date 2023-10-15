import React from 'react'
import './Research.modules.scss'

const Research = () => {
    return (
        <div className="banner-2">
            <div className="container">
                <div className="overlay">
                    <div className="bg-cyrcl">
                        <div className="video">
                            <video src={require('../Assets/banner-3.mp4')} className="video-panda" autoPlay muted loop />
                        </div>
                    </div>
                    <div className="flex d-flex align-content-center justify-content-center">
                        <div className="image">
                            <img src={require('../Assets/baby-1.webp')} alt="research" className='match' />
                        </div>
                        <h2 style={{transform : "translateY(30%)"}}>24/7</h2>
                        <div className="image">
                            <img src={require('../Assets/baby-4.jpeg')} className="match" alt="research" />
                        </div>
                    </div>
                    <div className='text-center'>
                    <button className='btn btn-teal'>details</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Research
