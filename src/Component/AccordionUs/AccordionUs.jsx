import React, { useState } from 'react'
import './AcoordionUs.modules.scss'
import { cardUs } from '../../data'

const AccordionUs = () => {
    const [active, setActive] = useState(0);
    return (
        <div className='accordions'>
            {
                cardUs.map((card, index) => {
                    return <article key={index} className={active === index ? "active" : ""} onClick={() => setActive(index)} >
                        <img src={card.image} alt="nicu" />
                        <div className='content-accordion'>
                            <div>
                                <h2 className='my-5  color-blue fw-bolder'>{card.header}</h2>
                                <p className='teal-color'>{card.text}</p>
                            </div>
                        </div>
                    </article>
                })
            }
        </div>
    )
}

export default AccordionUs
