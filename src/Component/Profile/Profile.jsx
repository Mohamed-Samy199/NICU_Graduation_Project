import React from "react";
import img from "../Assets/profile-picture.webp";
import { Helmet } from "react-helmet";
export default function Profile({ userData }) {
  return (
    <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Profile</title>
    </Helmet>
      <div className="pt-6 profile container d-flex justify-content-center align-items-center flex-column">
        <div
          style={{ width: "250px", height: "250px" }}
          className="rounded-circle mt-3"
        >
          <img src={img} alt="profile" className="w-100 rounded-circle" />
        </div>
        <div className="pro-data text-center my-5">
          <h4>Name: Mohamed</h4>
          <h4 className="py-2">Emali: moh246@gmail.com</h4>
          <h4>Role: Patient</h4>
        </div>
      </div>
    </>
  );
}
