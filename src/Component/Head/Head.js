import React from 'react'
import left from '../Assets/breadcrumb_shape01.png';
import right from '../Assets/breadcrumb_shape02.png';
import './Head.modules.scss'

const Head = () => {
    return (
        <div>
            <section className="shop">
                <div className="containet">
                    <div class="bubble1">
                        <div class="ball1 bubble11"></div>
                    </div>
                    <div class="bubble2">
                        <div class="ball2 bubble22"></div>
                    </div>
                    <div class="bubble3">
                        <div class="ball3 bubble33"></div>
                    </div>
                    <div className="content-left">
                        <div className="content">
                        </div>
                        <div className="image">
                            <img src={left} alt="left" />
                        </div>
                    </div>
                    <div className="content-right">
                        <div className="icontent">
                            <div className="right">
                            </div>
                        </div>
                        <div className="image">
                            <img src={right} alt="right" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Head
