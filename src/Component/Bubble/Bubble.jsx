import React from 'react'
import styled from 'styled-components'
import './Bubble.modules.scss'

const Bubble = () => {
  const Container = styled.div`
    
    `
  return (
    <Container style={{ height: "30vh" }} className='bubble'>
      <div class="bubble-one">
        <div class="ball-one bubble-one-one">
        </div>
      </div>
      <div class="bubble-two">
        <div class="ball-two bubble-two-two">
        </div>
      </div>
      <div class="bubble-three">
        <div class="ball-three bubble-three-three">
        </div>
      </div>
    </Container>
  )
}

export default Bubble
