import React from 'react'
import Plx from 'react-plx'
import one from '../Assets/shape-bg-01.png'
import two from '../Assets/two.png'
import there from '../Assets/threre.png'


const Parallex = () => {
    return (
        <div>
            <Plx
                parallaxData={[
                    {
                        start: 0,
                        end: 700,
                        easing: "ease-in",
                        properties: [
                            {
                                startValue: 1,
                                endValue: 1.6,
                                property: "scale"
                            }
                        ]
                    }
                ]}
                style={{
                    position: "fixed",
                    left: 0,
                    top: 0,
                    width: "100%",
                    zIndex: 100
                }}
            >
                <img style={{ width: "100%" }} src={one} alt="foreground" />
            </Plx>
            <Plx
                parallaxData={[
                    {
                        start: 0,
                        end: 800,
                        properties: [
                            {
                                startValue: 90,
                                endValue: 0,
                                property: "rotate"
                            },
                        ]
                    }
                ]}
                style={{
                    position: "fixed",
                    left: 540,
                    top: 40,
                    width: "70%",

                }}
            >
                <img style={{ width: "100%" }} src={two} alt="background" />
            </Plx>
            <Plx
                parallaxData={[
                    {
                        start: 0,
                        end: 400,
                        properties: [
                            {
                                startValue: 90,
                                endValue: 0,
                                property: "rotate"
                            }
                        ]
                    }
                ]}
                style={{
                    position: "fixed",
                    left: "50%",
                    top: "33vw",
                    width: "70%"
                }}
            >
                <img
                    style={{
                        width: "15vw"
                    }}
                    src={there}
                    alt="Goonies"
                />
            </Plx>
            <Plx
                parallaxData={[
                    {
                        start: 0,
                        end: 400,
                        properties: [
                            {
                                startValue: 0,
                                endValue: 1,
                                property: "opacity"
                            }
                        ]
                    }
                ]}
                style={{
                    position: "fixed",
                    left: "10%",
                    top: "10vw",
                    width: "40%"
                }}
            >
                <section>
                    <header className='d-flex align-items-start justify-content-center flex-column position-relative headers mb-4'>
                        <h2>About Us</h2>
                        <span className='position-relative my-3'></span>
                    </header>
                    <div>
                    <h2 className='teal-color fw-bolder mb-5'>The Best Modern And Sufficient Nurseries</h2>
                    <h3><span><i class="fa-solid fa-arrow-right teal-color me-2"></i></span>Nurseries at the highest level.</h3>
                    <h3><span><i class="fa-solid fa-arrow-right teal-color me-2"></i></span>New advanced respirators.</h3>
                    <h3><span><i class="fa-solid fa-arrow-right teal-color me-2"></i></span>Phototherapy devices.</h3>
                    <h3><span><i class="fa-solid fa-arrow-right teal-color me-2"></i></span>Bile analysis device.</h3>
                    <h3><span><i class="fa-solid fa-arrow-right teal-color me-2"></i></span>The nursery receives all weights.</h3>
                    <h3><span><i class="fa-solid fa-arrow-right teal-color me-2"></i></span>Branches spread everywhere.</h3>
                    <h3><span><i class="fa-solid fa-arrow-right teal-color me-2"></i></span>Immediate reception of critical cases.</h3>
                    <i class="flaticon-microscope"></i>
                    </div>
                </section>
            </Plx>
            <div
                style={{
                    position: "fixed",
                    lefft: 0,
                    zIndex: 200,
                    paddingTop: "56%",
                    height: "400vh",
                    width: "100%",

                    marginLeft: -50,
                    top: 120,
                }}
            >
            </div>
        </div>
    )
}

export default Parallex
