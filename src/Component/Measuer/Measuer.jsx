import React, { useState } from 'react';
import './Measure.modules.scss'
import { Helmet } from 'react-helmet';

const Measuer = ({ t }) => {
    let time = new Date().toLocaleTimeString();
    const [currentTime, setCurrentTime] = useState(time)
    const updatedTime = () => {
        let time = new Date().toLocaleTimeString()
        setCurrentTime(time)
    }
    setInterval(updatedTime, 1000)
    return (
        <section className='pt-2 text-capitalize'>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Measuer</title>
            </Helmet>
            <div className='container pt-6'>
                <div className='row text-center'>
                    <h2 className='measure-child fw-bolder'>{t("h39")}</h2>
                    <div className='screen my-4'>
                        <h3 className='py-2 clock'>{currentTime}</h3>
                    </div>
                    <div className='measure mt-2'>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Measuer
