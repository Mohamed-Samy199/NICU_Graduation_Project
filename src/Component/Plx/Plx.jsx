import React from 'react'
import { Fragment } from 'react';
import Plx from 'react-plx';


const Plxs = () => {
    const exampleParallaxData = [
        {
            start: 0,
            end: 300,
            properties: [
                {
                    startValue: 0,
                    endValue: 90,
                    property: "rotate"
                },
                {
                    startValue: 1,
                    endValue: 1.5,
                    property: "scale"
                },
                {
                    startValue: 1,
                    endValue: 0.75,
                    property: "opacity"
                }
            ]
        },
        {
            start: 350,
            duration: 300,
            properties: [
                {
                    startValue: "#3cb99c",
                    endValue: "rgba(50,50,200,0.8)",
                    property: "backgroundColor"
                },
                {
                    startValue: 0,
                    endValue: 100,
                    property: "translateY"
                },
                {
                    startValue: 0.75,
                    endValue: 1,
                    property: "opacity"
                }
            ]
        },
        {
            start: 700,
            duration: 1000,
            properties: [
                {
                    startValue: 100,
                    endValue: 0,
                    property: "translateY"
                },
                {
                    startValue: 1.5,
                    endValue: 2,
                    property: "scale"
                },
                {
                    startValue: 90,
                    endValue: 0,
                    property: "rotate"
                },
                // Blur is not performant
                // Used just as an example for CSS filters
                {
                    startValue: 0,
                    endValue: 2,
                    property: "blur"
                }
            ]
        }
    ];

    const styles = {
        width: 100,
        height: 100,
        lineHeight: "100px",
        textAlign: "center",
        borderRadius: 20,
        backgroundColor: "#34ba9c",
        color: "#fff",
        left: "50%",
        marginLeft: -50,
        top: 100,
        position: "fixed",
        fontFamily: "Helvetica, Arial, sans-serif"
    };
    return (
        <div>

            <Fragment>
                <div className="container" style={{ height: "500vh" }}>
                    <div className="row">
                        <div className="col-md-6">
                            <div style={{ height: 1000 }}>
                                <Plx parallaxData={exampleParallaxData} style={styles}>
                                    Hello!
                                </Plx>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div>
                                <h3 className='text-light'>Hello!</h3><h3 className='text-light'>Hello!</h3><h3 className='text-light'>Hello!</h3><h3 className='text-light'>Hello!</h3><h3 className='text-light'>Hello!</h3><h3 className='text-light'>Hello!</h3><h3 className='text-light'>Hello!</h3><h3 className='text-light'>Hello!</h3><h3 className='text-light'>Hello!</h3>

                            </div>
                        </div>
                    </div>
                </div>



            </Fragment>

        </div>
    )
}

export default Plxs
