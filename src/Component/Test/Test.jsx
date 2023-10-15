import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import styled from 'styled-components'
// import Left from '../Left/Left'
import Incubator from '../Incubator/Incubator'
import TypeWriterEffect from 'react-typewriter-effect';
import './Test.modules.scss'

const Container = styled.div`
    
`
const Test = () => {
    return (
        <Container>
        <div className='container'>
        <header className='text-center d-flex align-items-center justify-content-center flex-column position-relative headers mb-4'>
        <h2>Services</h2>
        <span className='position-relative my-3'></span>
        </header>
        <p className='text-muted text-center'>
                            Exerci tation ullamcorper suscipit lobortis nisl aliquip ex ea commodo claritatem insitamconse quat.
                        </p>
            <h3 className='fw-bolder d-flex justify-content-center align-content-between my-4'>
                <span className='teal-color h1 me-2'>NICU</span>
                <TypeWriterEffect
                    textStyle={{
                        fontFamily: 'Red Hat Display',
                        color: '#8c89a0',
                    }}
                    startDelay={2000}
                    cursorColor="#8c89a0"
                    multiText={[
                        'Medical technology',
                        'Experienced doctors',
                        'High care children',
                        'Places for escorts',
                    ]}
                    multiTextDelay={1000}
                    typeSpeed={30}
                    multiTextLoop
                />
            </h3>
            </div>
            <Canvas className='service' style={{height: "80vh"}}>
            <Stage environment="city" intensity={0.6}>
            
            
            <Incubator/>
            </Stage>
            <OrbitControls enableZoom={false} />
        </Canvas>
        </Container>
    )
}

export default Test
