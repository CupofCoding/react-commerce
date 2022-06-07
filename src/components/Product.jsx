// Card Component
// import React from 'react'
import styled from "styled-components";
// run npm install @mui/icons-material
import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material';

const Info = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center; 
    align-items: center;
    
    transition: all 0.4s ease;
    background-color: rgba(0,0,0,0.2);
    z-index: 3;
    opacity: 0;

    // &:hover{
    //     opacity: 1;
    // }
`;

const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #E8E8E8;
    position: relative;

    //if you want to import.... but component has to be moved before the and defined...for some reason animation won't work otherwise.
    &:hover ${Info}{
        opacity: 1;
    }
`;

const Circle = styled.div`
    width: 200px;
    height: 200px; 
    border-radius: 50%;
    background-color: white;
    position: absolute;
`;

const Image = styled.img`
    height: 75%;
    z-index: 2;
`;


const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    justify-content: center; 
    align-items: center;
    margin: 10px;

    cursor: pointer;
    transition: all 0.3s ease;

    &:hover{
        background-color: #E8E8E8;
        transform: scale(1.1);
    }
`;

const Product = ({ item }) => {
  return (
    <Container>
        <Circle />
        <Image src={item.img}/>
        <Info>
            <Icon>
                <ShoppingCartOutlined />
            </Icon>
            <Icon>
                <SearchOutlined />
            </Icon>
            <Icon>
                <FavoriteBorderOutlined />
            </Icon>
        </Info>
    </Container>
  );
};

export default Product;