// import React from 'react'
import styled from 'styled-components'
import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material"
import { useState } from 'react';
import { sliderItems } from '../data'

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    // background-color: lightgray;
    position: relative;
    overflow: hidden;
`;

const Arrow = styled.div`
    width: 45px;
    height: 45px;
    background-color: whitesmoke;
    opacity: 0.65;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    // pass properties as JS code
    left: ${(props) => props.direction === "left" && "10px"};
    right: ${(props) => props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    z-index: 2;
`;

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transform: translateX(${(props) => props.slideIndex * -100}vw);
    transition: all 1.5s ease;
`;

//Slide container/carousel
const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;    
    //prop-color defined
    background-color: #${(props) => props.bg};
`;

const ImageContainer = styled.div`
    height: 100%;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Image = styled.img`
    height: 80%;    
    // flex: 1;
`;
    
const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`;
    
const Title = styled.h1`
    font-size: 60px;
`;
    
const Description = styled.p`
    margin: 50px 0;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 2px;
`;

const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
`;

const Slider = () => {
    // StateHook
    const [slideIndex, setSlideIndex] = useState(0);

    const handleClick = (direction) => {
    // Arrow Functionality
        if(direction === "left") {
            // switch statement; if index is greater than 0 then -1; if not then last item id; 2
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
        }
    };
  return (
    <Container>
        <Arrow direction="left" onClick={() => handleClick("left")}>
            <ArrowLeftOutlined />
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
            {sliderItems.map((item) => (
            <Slide bg={item.bg} key={item.id}>
                <ImageContainer>
                    <Image src={item.img} />
                </ImageContainer>
                <InfoContainer>
                    <Title>{item.title}</Title>
                    <Description>{item.description}</Description>
                    <Button>Shop Now &gt;&gt;</Button>
                </InfoContainer>
            </Slide>
            ))}
        </Wrapper>
        <Arrow direction="right" onClick={() => handleClick("right")}>
            <ArrowRightOutlined />
        </Arrow>
    </Container>
  )
};

export default Slider