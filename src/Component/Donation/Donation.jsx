import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Head from "../Head/Head";
import axios from "axios";
import { toast } from "react-toastify";

const Donation = ({ t }) => {
    const [donteNicu, setDonteNicu] = useState({
        name: "",
        phone: "",
        money: ""
    });
    function getUserData(e) {
        let myDonteNicu = { ...donteNicu };
        myDonteNicu[e.target.name] = e.target.value;
        setDonteNicu(myDonteNicu);
        console.log(myDonteNicu);
    }
    const url = "http://localhost:8080/api/book";
    const handleBooking = async (e) => {
        e.preventDefault();
        try {
            console.log(url);
            const response = await axios.post(`${url}/donate`, donteNicu, {
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const notify = () => toast.success('Donating Done');
            if (response.status == 200) {
                console.log(response.data);
                console.log(response.data.saveDonate.url);
                notify('success')
                window.open(response.data.saveDonate.url);
            } else {
                console.log(response);
            }
        } catch (e) {
            console.error(e);
        }
    };
    return <div>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Donation</title>
        </Helmet>
        <Head />
        <header className="text-center my-4 d-flex align-items-center justify-content-center flex-column position-relative headers">
            <h2>{t("h85")}</h2>
            <span className="position-relative my-3"></span>
        </header>

        <section>
            <div className="container w-75 my-4 mx-auto">
                <div className="row align-items-center py-3">
                    <div className="col-md-3 col-sm-12 my-2">
                        <img src={require("../Assets/orange.png")} alt="nicu" className="w-75 bg-light" />
                    </div>
                    <div className="col-md-3 col-sm-12  my-2">
                        <img src={require("../Assets/we.png")} alt="nicu" className="w-50" />
                    </div>
                    <div className="col-md-3 col-sm-12  my-2">
                        <img src={require("../Assets/vodafone.png")} alt="nicu" className="w-75" />
                    </div>
                    <div className="col-md-3 col-sm-12  my-2">
                        <img src={require("../Assets/fawry.png")} alt="nicu" className="w-75" />
                    </div>
                </div>
                <div className="row align-items-center my-5 py-3">
                    <div className="col-md-3 col-sm-12  my-2">
                        <img src={require("../Assets/tpay.png")} alt="nicu" className="w-75" />
                    </div>
                    <div className="col-md-3 col-sm-12  my-2">
                        <img src={require("../Assets/mega.png")} alt="nicu" className="w-75" />
                    </div>
                    <div className="col-md-3 col-sm-12 text-center  my-2">
                        <i className="fa-solid fa-hand-holding-heart fa-3x teal-color"></i>
                        <p className="text-muted mt-2">{t("p36")}</p>
                    </div>
                    <div className="col-md-3 col-sm-12 text-center  my-2">
                        <i class="fa-solid fa-calculator fa-3x teal-color"></i>
                        <p className="text-muted mt-2">{t("p37")}</p>
                    </div>
                </div>
            </div>
        </section>

        <header className="text-center my-4 d-flex align-items-center justify-content-center flex-column position-relative headers">
            <h2>{t("h86")}</h2>
            <span className="position-relative my-3"></span>
        </header>

        <section>
            <div className="container w-50 my-2 mx-auto">
                <h4 className="places my-3">{t("h87")} <span className="teal-color">*</span></h4>
                <select class="form-select" aria-label="Default select example">
                    <option selected>{t("op1")}</option>
                    <option value="1">{t("op2")}</option>
                    <option value="2">{t("op3")}</option>
                    <option value="3">{t("op4")}</option>
                </select>
                <form onSubmit={handleBooking}>
                    <div className="box my-4">
                        <h3 className='fs-5 places'>{t("h88")} <span className="teal-color">*</span></h3>
                        <input type="number" className='form-control' placeholder="donation value" name='money' onChange={getUserData} />
                    </div>
                    <div className="box my-4">
                        <h3 className='fs-5 places'>{t("h89")} <span className="teal-color">*</span></h3>
                        <input type="text" className='form-control' placeholder="name" name='name' onChange={getUserData} />
                    </div>
                    <div className="box my-4">
                        <h3 className='fs-5 places'>{t("h90")} <span className="teal-color">*</span></h3>
                        <input type="number" className='form-control' placeholder="phone" name='phone' onChange={getUserData} />
                    </div>
                    <div className="box my-5 text-center">
                        <button className="btn btn-teal">{t("p36")}</button>
                    </div>
                </form>
                <h3 className="places text-center">{t("h91")}</h3>
            </div>
        </section>
    </div>
};

export default Donation;
