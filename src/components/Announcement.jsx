// import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 30px;
    background-color: darkcyan;
    color: white; 
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    font-size: 14px
`

const Announcement = () => {
  return (
    <Container>
        Announcement Text! Deals and Free Shipping on Orders Over $$$
    </Container>
  )
}

export default Announcement