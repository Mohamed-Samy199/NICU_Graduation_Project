import React, { Fragment } from 'react'
// import data from '../Assets/data.svg'
// import ParticlesBackground from '../ParticlesBackground/ParticlesBackground'
import Parallex from '../Parallex/Parallex'
import "./About.modules.scss"
import { Helmet } from 'react-helmet'

const About = () => {
  return (

    //   <div className='pt-6 container'>
    //   <div className='row'>
    //   <div className='col-md-4 col-sm-6'>
    //   <div className='items'>
    //   <div className='part' style={{height : "50vh"}}>
    //           <ParticlesBackground/>
    //         </div>
    //       <img src={data} alt='img' />
    //     </div>

    //   </div>
    // </div>
    //   </div>
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>About</title>
      </Helmet>
      <section style={{ height: '300vh', paddingBottom: "8rem" }}>
        <Parallex />
      </section>

    </Fragment>
  )
}

export default About
