import { useParams } from 'react-router-dom'
import { api_two } from '../../data'
import './AboutDoctors.scss'
import { useRef } from 'react'
import { Helmet } from 'react-helmet'

const AboutDoctors = () => {
    const selectImg = useRef()
    const bigImg = useRef()
    let param = useParams()
    const fetchData = api_two.filter((e) => e.id === +param.id)
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>About Doctor</title>
            </Helmet>
            <div className='pt-7 doctor-details'>
                <div className="container p-5 bg-blue">
                    <div className="row">
                        <div className="col-lg-6 col-sm-12">
                            <h2 className='fw-bolder teal-color'>Why Choose Us In Special</h2>
                            <h3 className='fw-'>Our goal is to make sure with advances in technology</h3>
                            <div className="details m-5">
                                <h5><i class="fa-solid fa-arrow-right teal-color"></i> name : {fetchData[0].name}</h5>
                                <h5><i class="fa-solid fa-arrow-right teal-color my-2"></i> special : {fetchData[0].speciale}</h5>
                                <h5><i class="fa-solid fa-arrow-right teal-color my-2"></i> phone : {fetchData[0].phone}</h5>
                                <h5><i class="fa-solid fa-arrow-right teal-color"></i> days woke : {fetchData[0].days}</h5>
                            </div>
                            <div className="images">
                                <div className="d-flex" >
                                    {
                                        api_two.map((e) => {
                                            return (
                                                <img src={e.image} alt="nicu" className='w-25 m-2 rounded' key={e.id} ref={selectImg} />
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-12 mt-5 d-flex justify-content-center align-items-center">
                            <div>
                                <img src={fetchData[0].image} alt="nicu" className='rounded' ref={bigImg} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutDoctors
