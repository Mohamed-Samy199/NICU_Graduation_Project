import React from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { slideImages } from '../../data'
import { Fragment } from 'react'
import ScrollTrigger from 'react-scroll-trigger'
import CountUp from 'react-countup'
import Head from '../Head/Head'
import axios from 'axios'
import { toast } from 'react-toastify';
import './NicuDetails.modules.scss'
import { Helmet } from 'react-helmet'


const NicuDetails = ({t}) => {
    let navigate = useNavigate()
    const goToChack = () =>{
        navigate("/measure")
    }

    const [counterOn, setCounterOn] = useState(false)
    const { id } = useParams()
    const [stateImages, setStateImages] = useState(slideImages[id - 1])

    let allProdact = JSON.parse(localStorage.getItem("oneNicu5"))
    let find = allProdact.find((e) => e.id == id)

    const notify = () => toast.success('Booking Done');
    const [bookNicu, setBookNicu] = useState({
        name: "",
        phone: "",
        dateIssued: "",
        dateReturned: "",
        price: `${find.price}`
    });
    function getUserData(e) {
        let myBookNicu = { ...bookNicu };
        myBookNicu[e.target.name] = e.target.value;
        setBookNicu(myBookNicu);
        console.log(myBookNicu);
    }
    const url = "http://localhost:8080/api/book";
    const handleBooking = async (e) => {
        e.preventDefault();
        try {
            console.log(url);
            const response = await axios.post(`${url}/nicu`, bookNicu, {
                headers: {
                    "Content-Type": "application/json",
                },
            });
            

            if (response.status == 200) {
                console.log(response.data);
                console.log(response.data.saveBook.url);
                notify('success')
                window.open(response.data.saveBook.url);
            } else {
                console.log(response);
            }
        } catch (e) {
            console.error(e);
            //setErrorMessage(e.response.data.message);
        }
    };


    return (
        <div className='nicu-details text-capitalize'>
        <Helmet>
      <meta charSet="utf-8" />
      <title>NICU Details</title>
    </Helmet>
            <Head />
            <header className='text-center my-4 d-flex align-items-center justify-content-center flex-column position-relative headers'>
                <h2>{t("h38")}</h2>
                <span className='position-relative my-3'></span>
            </header>

            <section className='banner-4 py-5 px-md-3'>
                <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                    <div className="container p-5">
                        <div className="row">
                            <div className="col-md-3 col-sm-6 my-2">
                                <div className="item d-flex shadow">
                                    <div className="images me-3">
                                        <img src={require('../Assets/01.png')} alt="nicu" />
                                    </div>
                                    <div className="counter">
                                        <h3 className='fw-bolder'> {counterOn && <CountUp start={0} end={500} duration={4} delay={0} />} +</h3>
                                        <p>{t("p13")}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 my-2">
                                <div className="item d-flex shadow">
                                    <div className="images me-3">
                                        <img src={require('../Assets/02.png')} alt="nicu" />
                                    </div>
                                    <div className="counter">
                                        <h3 className='fw-bolder'> {counterOn && <CountUp start={0} end={400} duration={4} delay={0} />} +</h3>
                                        <p>{t("p14")}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 my-2">
                                <div className="item d-flex shadow">
                                    <div className="images me-3">
                                        <img src={require('../Assets/03.png')} alt="nicu" />
                                    </div>
                                    <div className="counter">
                                        <h3 className='fw-bolder'> {counterOn && <CountUp start={0} end={12} duration={5} delay={0} />} +</h3>
                                        <p>{t("p15")}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 my-2">
                                <div className="item d-flex shadow">
                                    <div className="images me-3">
                                        <img src={require('../Assets/04.png')} alt="nicu" />
                                    </div>
                                    <div className="counter">
                                        <h3 className='fw-bolder'> {counterOn && <CountUp start={0} end={350} duration={4} delay={0} />} +</h3>
                                        <p>{t("p16")}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </ScrollTrigger>
            </section>

            <section className="container mt-5" >
                <div className="row px-3 py-5 shadow-lg rounded-2">
                    <div className="col-md-12">
                        <Fragment >
                            <div className="row">
                                <div className="col-md-5">
                                    <div className="images">
                                        <img src={stateImages} alt="nicu" className='w-100 rounded-2' />
                                    </div>
                                </div>
                                <div className="col-md-7 ps-5">
                                    <div className="title d-flex justify-content-between mt-2">
                                        <h3 className='place'>{find.name}</h3>
                                        <h3 className='place'>EGP {find.price}</h3>
                                    </div>
                                    <h5 className='pt-3 place'><span><i className="fa-solid fa-location-dot teal-color pe-2"></i></span>{find.place}</h5>
                                    <p className='teaxt-muted place'>{find.desc}</p>
                                    <h2 className="badge badge-teal p-3 fs-6">Free Ambulance</h2>
                                    <div className="d-flex justify-content-between mt-4">
                                        <div className="left">
                                            <h5 className='place'><i class="fa-solid fa-bed teal-color pe-1"></i> {find.bed}</h5>
                                            <h5 className='place'><i class="fa-solid fa-phone teal-color pe-1"></i> {find.phone}</h5>
                                            <p className='text-muted'>Free cancellction</p>
                                            <p className='text-muted'>You can cancel later, so luck in this great price today!</p>
                                        </div>
                                        <div className="right">
                                            <p className='place'>Excellent <span className='bg-teal p-2 m-2'>{find.rate}</span></p>
                                            <p className='text-muted'>includes taxes and fees</p>
                                            <button className='btn btn-teal goToChack' onClick={()=> goToChack()}>Check Baby</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-5">
                                <div className="col-md-8">
                                    <div className="d-flex flex-wrap" >
                                        {
                                            slideImages.slice(0, 4).map((e, idx) => (
                                                <Fragment>
                                                    <img src={e} alt='nicu' key={idx} className='m-2 rounded' style={{ width: "22%", cursor: "pointer" }}
                                                        onClick={() => setStateImages(e)} />
                                                </Fragment>
                                            ))
                                        }
                                    </div>
                                    <div className='mt-4'>
                                        <h3 className='place'>Description</h3>
                                        <p className='text-muted'>{find.content}</p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <form onSubmit={handleBooking} className='bg-blue p-4'>
                                        <div className="box my-3">
                                            <h3 className='fs-5'>Enter Your Name</h3>
                                            <input type="text" className='form-control' placeholder="name" name='name' onChange={getUserData} />
                                        </div>
                                        <div className="box my-3">
                                            <h3 className='fs-5'>Enter your Phone</h3>
                                            <input type="number" className='form-control' placeholder="phone" name='phone' onChange={getUserData} />
                                        </div>
                                        <div className="box my-3">
                                            <h3 className='fs-5'>Arrivals</h3>
                                            <input type="date" className='form-control' name='dateIssued' onChange={getUserData} />
                                        </div>
                                        <div className="box my-3">
                                            <h3 className='fs-5'>Leaving</h3>
                                            <input type="date" className='form-control' name='dateReturned' onChange={getUserData} />
                                        </div>
                                        <div className="box my-3">
                                            <h3 className='fs-5'>Price</h3>
                                            <input type="number" className='form-control' name='price' value={find.price} onChange={getUserData} />
                                        </div>
                                        <button className="btn btn-teal">Appointment Now</button>
                                    </form>
                                </div>
                            </div>
                        </Fragment>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default NicuDetails
