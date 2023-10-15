import React, { useState } from 'react'
import './Accordion.modules.scss'
import { cards } from '../../data'

const Accordions = () => {

    const [active, setActive] = useState(0)
    return (
        <div className='accordions'>
            {
                cards.map((card, index) => {
                    return <article key={index} className={active === index ? "active" : ""} onClick={() => setActive(index)} >
                        <img src={card.image} alt="nicu" />
                        <div className='content-accordion'>
                            <div>
                                <h2 className='my-5'>{card.header}</h2>
                                <p className='text-muted'>{card.text}</p>
                            </div>
                        </div>
                    </article>
                })
            }

        </div>
    )
}

export default Accordions
