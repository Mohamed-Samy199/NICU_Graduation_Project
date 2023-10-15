import React from 'react'
import './NotFound.scss'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
    let navigate = useNavigate()
    const goToHome = () =>{
        navigate('/home')
    }
    return (
        <div className='container'>
            <div className='not-found d-flex justify-content-center align-items-center'>
                <div className='move'>
                <button className='btn btn-teal' onClick={goToHome}>Go To Home</button>
                </div>
            </div>
        </div>
    )
}

export default NotFound

// <div className="select-images py-3">
//             <div className="d-flex justify-content-around align-items-center flex-wrap">
//               {
//                 selectImage.map((e) => <img src={e.image} alt="nicu" key={e.id} />)
//               }
//             </div>
//           </div>



// {
//     id: 1,
//     image : "https://labartisan.net/demo/mukti/assets/images/depart/icon/01.png",
//     speciality : "Speciality Stomach 1"
// },
// {
//     id: 2,
//     image : "https://labartisan.net/demo/mukti/assets/images/depart/icon/03.png",
//     speciality : "Speciality Genetic 2"
// },
// {
//     id: 3,
//     image : "https://labartisan.net/demo/mukti/assets/images/depart/icon/04.png",
//     speciality : "Speciality Neurologist 3"
// },
// {
//     id: 4,
//     image : "https://labartisan.net/demo/mukti/assets/images/depart/icon/05.png",
//     speciality : "Speciality Cardiology 4"
// },
// {
//     id: 5,
//     image : "https://labartisan.net/demo/mukti/assets/images/depart/icon/06.png",
//     speciality : "Speciality Analysis 5"
// },
// {
//     id: 6,
//     image : "https://labartisan.net/demo/mukti/assets/images/depart/icon/07.png",
//     speciality : "Speciality Analysis 6"
// },
// {
//     id: 7,
//     image : "https://labartisan.net/demo/mukti/assets/images/depart/icon/08.png",
//     speciality : "Speciality Samples 7"
// },
// {
//     id: 8,
//     image : "https://labartisan.net/demo/mukti/assets/images/depart/icon/09.png",
//     speciality : "Speciality Samples  8"
// },
