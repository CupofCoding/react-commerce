// import React from 'react'
import { Send } from '@mui/icons-material'
import styled from 'styled-components'

const Container = styled.div`
    height: 60vh;
    background-color: #F0F0F0;
    display: flex; 
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Title = styled.h1`
    font-size: 70px;
    margin-bottom: 20px;
`;

const Description = styled.div`
    font-size: 24px; 
    font-weight: 300;
    margin-bottom: 20px;
`;

const InputContainer = styled.div`
    width: 50%;
    height: 40px; 
    background-color: white; 
    display: flex;
    justify-content: space-between; 
    border: 1px solid lightgray;
`;

const Input = styled.input`
    border: none;
    flex: 8;
    padding-left: 20px;
`;

const Button = styled.button`
    flex: 1;
    border: none;
    background-color: darkcyan;
    color: white;
    cursor: pointer; 
`;

const Newsletter = () => {
  return (
    <Container>
        <Title>Newsletter</Title>
        <Description>Get the latest news about your favorite products!</Description>
        <InputContainer>
            <Input placeholder='Your email'/>
            <Button>
                <Send/>
            </Button>
        </InputContainer>
    </Container>
  )
}

export default Newsletter